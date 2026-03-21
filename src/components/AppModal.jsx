import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

function getFocusableElements(node) {
  if (!node) return [];
  return Array.from(node.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute('hidden'),
  );
}

function incrementModalStack() {
  if (typeof window === 'undefined') return 0;
  const next = (window.__YAB_MODAL_STACK__ ?? 0) + 1;
  window.__YAB_MODAL_STACK__ = next;
  return next;
}

function decrementModalStack() {
  if (typeof window === 'undefined') return 0;
  const current = window.__YAB_MODAL_STACK__ ?? 1;
  const next = Math.max(0, current - 1);
  window.__YAB_MODAL_STACK__ = next;
  return next;
}

export default function AppModal({ open, title, onClose, children }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const appShell = document.querySelector('.app-shell');
    const stack = incrementModalStack();

    if (stack === 1) {
      document.body.style.overflow = 'hidden';
      if (appShell instanceof HTMLElement) {
        appShell.setAttribute('aria-hidden', 'true');
        appShell.setAttribute('inert', '');
      }
    }

    window.requestAnimationFrame(() => {
      const focusableElements = getFocusableElements(panelRef.current);
      const target = focusableElements[0] ?? closeButtonRef.current ?? panelRef.current;
      target?.focus();
    });

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusableElements = getFocusableElements(panel);
      if (focusableElements.length === 0) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstElement || !panel.contains(activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (activeElement === lastElement || !panel.contains(activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      window.removeEventListener('keydown', onKeyDown, true);

      const nextStack = decrementModalStack();
      if (nextStack === 0) {
        document.body.style.overflow = previousOverflow;
        if (appShell instanceof HTMLElement) {
          appShell.removeAttribute('aria-hidden');
          appShell.removeAttribute('inert');
        }
      }

      previousActiveElement?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <header className="modal-header">
          <h2 id={titleId}>{title}</h2>
          <button ref={closeButtonRef} type="button" className="modal-close" onClick={onClose}>
            <X size={16} />
          </button>
        </header>
        <div className="modal-content">{children}</div>
      </article>
    </div>,
    document.body,
  );
}

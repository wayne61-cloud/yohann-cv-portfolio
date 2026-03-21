import {
  recruiterWeights,
  signalLabels,
  skillSignals,
} from '../data/profileContent.js';

export function getFitInsights(recruiterType, lang = 'fr') {
  const weights = recruiterWeights[recruiterType] ?? recruiterWeights.cabinet;

  const weightedScores = Object.entries(skillSignals).map(([key, value]) => {
    const weight = weights[key] ?? 1;
    return {
      key,
      weighted: value * weight,
      raw: value,
      weight,
    };
  });

  const totalWeighted = weightedScores.reduce((acc, item) => acc + item.weighted, 0);
  const maxWeighted = Object.values(weights).reduce((acc, value) => acc + 10 * value, 0);
  const percentage = Math.round((totalWeighted / maxWeighted) * 100);

  const strongestSignals = [...weightedScores]
    .sort((a, b) => b.weighted - a.weighted)
    .slice(0, 4)
    .map((item) => signalLabels[lang][item.key]);

  return {
    score: Math.min(99, Math.max(55, percentage)),
    strongestSignals,
  };
}

export function getScoreTone(score) {
  if (score >= 84) return 'excellent';
  if (score >= 72) return 'strong';
  return 'good';
}

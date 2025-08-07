export const calculateNextReviewDate = (performance) => {
  const intervals = [1, 3, 7]; // days
  const interval = intervals[Math.min(performance, intervals.length - 1)];
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);
  return nextReviewDate;
};

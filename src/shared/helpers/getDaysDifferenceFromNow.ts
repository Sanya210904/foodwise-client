export function getDaysDifferenceFromNow(
  targetDateInput: string | Date,
): number {
  const now = new Date();
  const targetDate =
    typeof targetDateInput === 'string'
      ? new Date(targetDateInput)
      : targetDateInput;

  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
  );

  const diffMs = target.getTime() - nowDate.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
}

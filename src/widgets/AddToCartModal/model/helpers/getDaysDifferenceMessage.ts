export function getDaysDifferenceMessage(dayDifference: number): string {
  if (dayDifference === 0) {
    return 'Today';
  }

  if (dayDifference === 1) {
    return 'Tomorrow';
  }

  if (dayDifference === -1) {
    return 'Yesterday';
  }

  if (dayDifference > 1) {
    return `In ${dayDifference} days`;
  }

  if (dayDifference < -1) {
    return `${Math.abs(dayDifference)} days ago`;
  }

  return '';
}

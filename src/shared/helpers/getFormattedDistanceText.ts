export const getFormattedDistanceText = (distanceInKilometres: number) => {
  if (distanceInKilometres < 1) {
    return `${(distanceInKilometres * 1000).toFixed(0)} m`;
  } else {
    return `${distanceInKilometres.toFixed(1)} km`;
  }
};

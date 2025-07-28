import {distance, point} from '@turf/turf';
import {Location} from '../types/Location';

export const getDistanceBetweenPoints = (
  from: Location,
  to: Location,
): number => {
  const fromPoint = point([from.longitude, from.latitude]);
  const toPoint = point([to.longitude, to.latitude]);

  const distanceBetweenPoints = distance(fromPoint, toPoint, {
    units: 'kilometers',
  });

  return distanceBetweenPoints;
};

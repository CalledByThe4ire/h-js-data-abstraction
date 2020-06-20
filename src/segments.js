// @ts-check

import { makeDecartPoint, getX, getY } from './points.js';

// BEGIN (write your solution here)
export const makeSegment = (point1, point2) => ({
  beginPoint: point1,
  endPoint: point2,
});

export const getBeginPoint = ({ beginPoint }) => beginPoint;

export const getEndPoint = ({ endPoint }) => endPoint;

export const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);
  const beginPointX = getX(beginPoint);
  const beginPointY = getY(beginPoint);
  const endPointX = getX(endPoint);
  const endPointY = getY(endPoint);

  return makeDecartPoint(
    (beginPointX + endPointX) / 2,
    (beginPointY + endPointY) / 2,
  );
};
// END

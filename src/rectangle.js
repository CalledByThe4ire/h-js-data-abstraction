// @ts-check
// eslint-disable-next-line
import { makeDecartPoint, getX, getY, getQuadrant } from "./points.js";

// BEGIN (write your solution here)
const makeRectangle = (startPoint, width, height) => ({
  startPoint,
  width,
  height,
});

const getStartPoint = ({ startPoint }) => startPoint;

const getWidth = ({ width }) => width;

const getHeight = ({ height }) => height;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );

  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

export {
  makeRectangle, getStartPoint, getWidth, getHeight, containsOrigin,
};
// END

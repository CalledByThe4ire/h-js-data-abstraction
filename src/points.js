// @ts-check

const makeDecartPoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

// BEGIN (write your solution here)
const getX = (point) => {
  //
};

const getY = (point) => {
  //
};
// END

export { makeDecartPoint, getX, getY };

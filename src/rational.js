// @ts-check

import getGcd from "./utils.js";

// BEGIN (write your solution here)
const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = ({ numer }) => numer;

const getDenom = ({ denom }) => denom;

const add = (rational1, rational2) => {
  if (getDenom(rational1) === getDenom(rational2)) {
    return makeRational(
      getNumer(rational1) + getNumer(rational2),
      getDenom(rational1)
    );
  }

  return makeRational(
    getNumer(rational1) * getDenom(rational2) +
      getDenom(rational1) * getNumer(rational2),
    getDenom(rational1) * getDenom(rational2)
  );
};

const sub = (rational1, rational2) => {
  if (getDenom(rational1) === getDenom(rational2)) {
    return makeRational(
      getNumer(rational1) - getNumer(rational2),
      getDenom(rational1)
    );
  }

  return makeRational(
    getNumer(rational1) * getDenom(rational2) -
      getDenom(rational1) * getNumer(rational2),
    getDenom(rational1) * getDenom(rational2)
  );
};
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export { makeRational, getNumer, getDenom, add, sub, ratToString };

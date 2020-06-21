// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

import { URL } from "url";

// BEGIN
const make = (urlAddress) => {
  const data = new URL(urlAddress);

  return data;
};

const getProtocol = (data) => data.protocol;
const getHost = (data) => data.host;
const getPath = (data) => data.pathname;

const getQueryParam = (data, paramName, defaultValue = null) =>
  data.searchParams.get(paramName) || defaultValue;

const setHost = (data, host) => {
  data.host = host;
};

const setPath = (data, path) => {
  data.pathname = path;
};

const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};

const setQueryParam = (data, key, value) => {
  data.searchParams.set(key, value);
};

const toString = (data) => data.toString();

export {
  make,
  getProtocol,
  getHost,
  getPath,
  setProtocol,
  setHost,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};
// END

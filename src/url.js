// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

import { URL } from "url";

// BEGIN (write your solution here)
const make = (url) => new URL(url);
const toString = (url) => url.toString();
const getProtocol = (url) => url.protocol;
const getHost = (url) => url.host;
const getPath = (url) => url.pathname;
const getQueryParam = (url, paramName, defaultParamValue = null) =>
  url.searchParams.get(paramName) || defaultParamValue;
const setQueryParam = (url, paramName, paramValue) => {
  const params = new URLSearchParams(url.search);
  params.set(paramName, paramValue);

  return (url.search = `${params.toString()}`);
};
const setProtocol = (url, protocol) => (url.protocol = protocol);
const setHost = (url, host) => (url.host = host);
const setPath = (url, pathname) => (url.pathname = pathname);

export {
  make,
  toString,
  getProtocol,
  getHost,
  getPath,
  getQueryParam,
  setQueryParam,
  setProtocol,
  setHost,
  setPath,
};
// END

function normalizeURL(urlstring) {
  urlstring = urlstring.toString().toLowerCase();

  console.log(urlstring);
  const urlObj = new URL(urlstring);
  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

  if (hostPath.length > 0 && hostPath.slice(-1) === "/") {
    return hostPath.slice(0, -1);
  } else {
    return hostPath;
  }
}

module.exports = {
  normalizeURL,
};

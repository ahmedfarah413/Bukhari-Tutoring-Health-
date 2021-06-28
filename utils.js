function getBaseUrl(env) {
  let appUrl;
  switch (env) {
    case "production":
      appUrl = "PRODUCTION_URL";
      break;
    default:
      appUrl = "DEVELOPMENT_URL";
  }
  return process.env[appUrl];
}

module.exports = getBaseUrl;

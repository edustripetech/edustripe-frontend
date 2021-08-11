const commonEnvs = {
  SENTRY_DSN: process.env.SENTRY_DSN,
  SECRET_KEY: process.env.SECRET_KEY,
  ENVIRONMENT: process.env.ENVIRONMENT,
};

const config = Object.freeze({
  local: {
    ...commonEnvs,
    API_URL: process.env.API_URL,
  },
  // development: {
  //   ...commonEnvs,
  //   API_URL: process.env.DEV_API_URL,
  // },
  // staging: {
  //   ...commonEnvs,
  //   API_URL: process.env.STAGING_API_URL,
  // },
  production: {
    ...commonEnvs,
    API_URL: process.env.API_URL,
  },
});

export default config[commonEnvs.ENVIRONMENT];

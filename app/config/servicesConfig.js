//TODO use db or ENV variables
const servicesConfig = {
  users:
    process.env.USERS_SERVICE_URL ||
    "https://fiubify-users-staging.herokuapp.com/",
  auth:
    process.env.AUTH_SERVICE_URL ||
    "https://fiubify-users-staging.herokuapp.com/",
  contents:
    process.env.CONTENTS_SERVICE_URL ||
    "https://fiubify-streamable-staging.herokuapp.com/",
  metrics:
    process.env.METRICS_SERVICE_URL ||
    "https://fiubify-metrics-staging.herokuapp.com/",
};

module.exports = servicesConfig;

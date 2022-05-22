//TODO use db or ENV variables
const servicesConfig = {
  users: 'https://fiubify-users-staging.herokuapp.com/',
  auth: 'https://fiubify-users-staging.herokuapp.com/',
  contents: 'https://fiubify-streamable-staging.herokuapp.com/'
};

const servicesProtectedEndpoints = {
  contents: {
    post: 'Artist'
  },
  users: {
    get: 'Admin',
    patch: 'Admin'
  }
}

module.exports = {
  servicesConfig: servicesConfig,
  servicesProtectedEndpoints: servicesProtectedEndpoints
};


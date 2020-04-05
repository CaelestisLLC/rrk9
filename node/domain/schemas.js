/** schemas.js **/
// is this necessary?

schemas = {
  user: {
    id: null,
    email: null
  },
  login: {
    id: null,
    email: null,
    // userId: null,
    datetime: null
  },
  receipt: {
    id: null,
    loginId: null,
    email: null,
    datetime: null
  }
}

module.exports = schemas;

const boom = require('@hapi/boom')
const { config } = require('../../config/')
function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack }
  }
  return error
}

function wrapErrors(error, req, res, next) {
  if (!error.isBoom) {
    next(boom.badImplementation(error))
  }
  next(error)
}

function logErrors(error, req, res, next) {
  console.error(error)
  next(error)
}

function errorHandlers(error, req, res, next) {
  const {
    output: { statusCode, payload },
  } = error
  res.status(statusCode)
  res.json(withErrorStack(payload, error.stack))
}

module.exports = {
  wrapErrors,
  logErrors,
  errorHandlers,
}

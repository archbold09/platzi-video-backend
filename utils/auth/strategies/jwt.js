const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const { config } = require('../../../config')
const UserService = require('../../../services/users')

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (tokenPayload, cb) => {
      const userService = new UserService()

      try {
        const user = await userService.getUser({ email: tokenPayload.email })

        if (!user) {
          return cb(boom.unauthorized(), false)
        }

        delete user.password

        cb(null, { ...user, scopes: tokenPayload.scopes })
      } catch (error) {
        return cb(error)
      }
    }
  )
)

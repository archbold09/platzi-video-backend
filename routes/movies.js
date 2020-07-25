const express = require('express')
const passport = require('passport')
const MoviesService = require('../services/movies')

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies')

const validationHandlers = require('../utils/middlewares/validationHandlers')
const scopesValidationHandlers = require('../utils/middlewares/scopesValidationHandlers')
const joi = require('@hapi/joi')

const cacheResponse = require('../utils/cacheResponse')
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time')

//strategy json web token
require('../utils/auth/strategies/jwt')

function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  const moviesService = new MoviesService()

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandlers(['read:movies']),
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
      const { tags } = req.query
      try {
        const movies = await moviesService.getMovies({ tags })
        res.status(200).json({
          data: movies,
          message: 'movies listed',
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandlers(['read:movies']),
    validationHandlers(joi.object({ movieId: movieIdSchema }), 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS)
      const { movieId } = req.params
      try {
        const movie = await moviesService.getMovie({ movieId })
        res.status(200).json({
          data: movie,
          message: 'movie found',
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    validationHandlers(createMovieSchema),
    scopesValidationHandlers(['create:movies']),
    async (req, res, next) => {
      const { body: movie } = req
      try {
        const createdMovieId = await moviesService.createMovie({ movie })
        res.status(201).json({
          data: createdMovieId,
          message: 'movie created',
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandlers({ movieId: movieIdSchema }, 'params'),
    scopesValidationHandlers(['update:movies']),
    validationHandlers(updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req.params
      const { body: movie } = req

      try {
        const updatedMovie = await moviesService.updateMovie({ movieId, movie })
        res.status(200).json({
          data: updatedMovie,
          message: 'movie update',
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandlers(['delete:movies']),
    validationHandlers({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params
      try {
        const deleteMovie = await moviesService.deleteMovie({ movieId })
        res.status(200).json({
          data: deleteMovie,
          message: 'movie delete',
        })
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = moviesApi

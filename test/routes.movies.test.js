const assert = require('assert')
const proxyquire = require('proxyquire')

const {
  moviesMock,
  MoviesServiceMock,
} = require('../utils/mook_data/MOCK_DATA')
const testServer = require('../utils/testServer')
const { response } = require('express')

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    '../services/movies.js': MoviesServiceMock ,
  })

  const request = testServer(route)

  describe('GET /movies', () => {

    it('should response with status 200', (done) => {
      request.get('/api/movies').expect(200, done)
    })

    it('should respond with the list of movies', (done) => {
      request.get('/api/movies').end((error, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        })
      })
      done()
    })

  })
})

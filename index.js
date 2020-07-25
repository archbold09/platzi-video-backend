const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

const {
  logErrors,
  wrapErrors,
  errorHandlers,
} = require('./utils/middlewares/errorHandlers')

const { config } = require('./config/index')

const authApi = require('./routes/auth')
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovies')
const notFoundHandler = require('./utils/middlewares/notFoundHandlers')

//routes
authApi(app)
moviesApi(app)
userMoviesApi(app)
app.use(notFoundHandler)

//error handlers
//middlewares always behind of rute
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandlers)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')
const mongoose = require('mongoose')

const SERVER_PORT = process.env.SERVER_PORT || 9000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  }),
)
app.use('/api', router)
app.use(errorMiddleware)

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(SERVER_PORT, () =>
      console.log(`Server started on PORT = ${SERVER_PORT}`),
    )
  } catch (error) {
    console.error(error)
  }
}

start()

import * as logger from './logger'
import * as dotenv from 'dotenv'

const path = process.cwd() + '/.env'
console.log('path', path)
dotenv.config({ path }) 

const JWT_SECRET = process.env.SECRET
const PORT = process.env.PORT || 3003
const MIN_PASSWORD_LENGTH = 8

logger.info(`ENV is ${process.env.NODE_ENV}`)

let MONGODB_URI = process.env.DEV_MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
} else if (process.env.NODE_ENV === 'production') {
  MONGODB_URI = process.env.PROD_MONGODB_URI
}

export {
  MIN_PASSWORD_LENGTH,
  MONGODB_URI,
  PORT,
  JWT_SECRET,
}

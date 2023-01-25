import dotenv from 'dotenv'
import server from './server'

dotenv.config()
const port = process.env.PORT || 5050
server().listen(port)

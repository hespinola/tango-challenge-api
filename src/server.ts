import cors from 'cors'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import http from 'http'
import morgan from 'morgan'

const server = () => {
  const app = express()

  // Middleware
  app.use(express.json())
  app.use(cors())
  app.use(helmet())
  app.use(morgan('tiny'))

  // Routes
  app.use('/v1/fibonacci', (req: Request, res: Response) => {
    return res.json({
      status: true,
      data: 8
    })
  })
  app.get('/health', (_, res) => res.status(200).send({ success: true }))

  // All non specific routes return 404
  app.get('*', (_, res) => res.status(404).send('Not Found'))

  const httpServer = http.createServer(app)

  httpServer.on('listening', () => {
    console.info(`Server listening on port ${process.env.PORT}`)
  })

  return httpServer
}

export default server

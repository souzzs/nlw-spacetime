import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: ['http://localhost:3000'],
})
app.register(jwt, {
  secret: 'spacetime',
})
app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server running on http://localhost:3333')
  })

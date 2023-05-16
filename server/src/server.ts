import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(' Server runnind on http://localhost:3333')
  })

import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance) {
  app.post('/books', async (request) => {
    const createBookBody = z.object({
      title: z.string(),
      author: z.string(),
      pcompany: z.string(),
      favorite: z.boolean(),
    })

    const { title, author, pcompany, favorite } = createBookBody.parse(request.body)

    await prisma.books.create({
      data: {
        title,
        author,
        pcompany,
        favorite,
      }
    })
  })
}

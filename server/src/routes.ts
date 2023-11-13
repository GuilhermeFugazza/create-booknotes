import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "./lib/prisma"



export async function appRoutes(app: FastifyInstance) {
  app.get('/books', async () => {
    const books = await prisma.books.findMany()
  
    return books
  })

  app.get('/folders', async () => {
    const folders = await prisma.folders.findMany()
  
    return folders
  })

  app.get('/notes', async () => {
    const notes = await prisma.notes.findMany()
  
    return notes
  })

  app.post('/books', async (request) => {
    const createBook = z.object({
      title: z.string(),
      author: z.string(),
      pcompany: z.string(),
      favorite: z.boolean(),
    })

    const { title, author, pcompany, favorite } = createBook.parse(request.body)

    await prisma.books.create({
      data: {
        title,
        author,
        pcompany,
        favorite,
      }
    })
  })

  app.post('/folders', async (request) => {
    const createFolder = z.object({
      name: z.string(),
      description: z.string(),
    })

    const { name, description } = createFolder.parse(request.body)

    await prisma.folders.create({
      data: {
        name,
        description,
      }
    })
  })

  app.post('/notes', async (request) => {
    const createNote = z.object({
      title: z.string(),
      note: z.string(),
      pages: z.string(),
      id_book: z.string(),
    })

    const { title, note, pages, id_book } = createNote.parse(request.body)

    await prisma.notes.create({
      data: {
        title,
        note,
        pages,
        id_book,
      }
    })
  })
}

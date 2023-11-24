import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";

// Defina um tipo para os parâmetros da solicitação
interface RequestParams {
  bookId: string;
}

const createRouteOptions = (): RouteShorthandOptions => ({
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          data: { type: 'object' },
        },
      },
    },
  },
});

export async function appRoutes(app: FastifyInstance) {
  app.get('/books', async () => {
    const books = await prisma.books.findMany();
    return books;
  });

  app.get('/books/:bookId', async (request) => {
    const { bookId } = request.params as RequestParams; // Adicione a conversão de tipo
    const bookDetails = await prisma.books.findUnique({
      where: { id: bookId },
    });
  
    if (!bookDetails) {
      return { success: false, data: null };
    }
  
    return { success: true, data: bookDetails };
  });

  app.get('/books/:bookId/notes', async (request) => {
    const { bookId } = request.params as RequestParams;
    const notes = await prisma.notes.findMany({
      where: { id_book: bookId },
    });
  
    return notes;
  });

  app.get('/folders', async () => {
    const folders = await prisma.folders.findMany();
    return folders;
  });

  app.get('/notes', async () => {
    const notes = await prisma.notes.findMany();
    return notes;
  });

  app.post('/books', async (request) => {
    const createBook = z.object({
      title: z.string(),
      author: z.string(),
      pcompany: z.string(),
    });

    const { title, author, pcompany } = createBook.parse(request.body);

    await prisma.books.create({
      data: {
        title,
        author,
        pcompany,
      },
    });
  });

  app.post('/folders', async (request) => {
    const createFolder = z.object({
      name: z.string(),
      description: z.string(),
    });

    const { name, description } = createFolder.parse(request.body);

    await prisma.folders.create({
      data: {
        name,
        description,
      },
    });
  });

  app.post('/books/:bookId/notes', createRouteOptions(), async (request) => {
    const { bookId } = request.params as RequestParams;
    const createNote = z.object({
      title: z.string(),
      note: z.string(),
      pages: z.string(),
    });
  
    const { title, note, pages } = createNote.parse(request.body);
  
    const bookExists = await prisma.books.findUnique({
      where: { id: bookId },
    });
  
    if (!bookExists) {
      return { success: false, data: null };
    }
  
    const createdNote = await prisma.notes.create({
      data: {
        title,
        note,
        pages,
        id_book: bookId,
      },
    });
  
    return { success: true, data: createdNote };
  });
}
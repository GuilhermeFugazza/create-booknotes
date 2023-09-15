import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const firstBookId = '64ec024e-5977-49a6-8b10-d4ac8da70925'

async function main() {
    await prisma.classifieds.deleteMany()
    await prisma.folders.deleteMany()
    await prisma.notes.deleteMany()
    await prisma.books.deleteMany()

    await prisma.books.create({
        data:{
            id: firstBookId,
            title: "caminhar",
            author: "wawf",    
            pcompany: "afwafaw",
            favorite: true
        }
    })

    await prisma.folders.create({
        data: {
            name: 'Teste',
            description: 'testando pastas',
        }
    })    

    await prisma.notes.create({
        data: {
            title: 'cavalo branco',
            note: 'testando pastas',
            pages: '130 - 134',
            id_book: firstBookId
        }
    }) 
}

main()
.then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
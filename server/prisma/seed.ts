import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const firstBookId = '64ec024e-5977-49a6-8b10-d4ac8da70925'
const secondBookId = '64ec024e-5077-49a6-8b12-d4ac8hs70925'

async function main() {
    await prisma.classifieds.deleteMany()
    await prisma.folders.deleteMany()
    await prisma.notes.deleteMany()
    await prisma.books.deleteMany()

    await Promise.all([
        prisma.books.create({
            data: {
                id: firstBookId,
                title: "É assim que acaba",
                author: "Collen Hoover",
                pcompany: "Galera",

            }
        }),

        prisma.books.create({
            data: {
                id: secondBookId,
                title: "De sangue e cinzas",
                author: "Jennifer L. Armentrout",
                pcompany: "Galera",
            }
        })
    ])

    await Promise.all([
        prisma.folders.create({
            data: {
                name: 'Boxe',
                description: 'Romances para lutadores',
            }
        }),

        prisma.folders.create({
            data: {
                name: 'Romances apimentados',
                description: 'Romances para pimentas',
            }
        })
    ])

    await Promise.all([
        prisma.notes.create({
            data: {
                title: 'Rolando abaixo',
                note: 'Você caiu da escada — diz ele. — Está machucada.',
                pages: '250 - 251',
                id_book: firstBookId
            }
        }),

        prisma.notes.create({
            data: {
                title: '',
                note: '“Havia apenas desejo, muito desejo, e centenas de outras coisas poderosas e proibidas que reverberavam por mim…”',
                pages: '250 - ',
                id_book: secondBookId
            }
        })
    ])
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

async function main() {
  // Create a board and get its ID
  const board = await prisma.board.create({
    data: {
      title: 'Board title',
      author: 'Dojon',
      category: 'dog',
      imageUrl: "#"
    }
  })

  // Create a card that references the actual board ID
  await prisma.card.create({
    data: {
      message: "hello",
      gifUrl: "#",
      upvotes: 1,
      boardId: board.id,
      author: "Astrid2"
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

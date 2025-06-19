const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

module.exports = {
    async main() {
        const boards = [
          { title: 'Luna', type: 'dog' },
        ]

        for (const board of boards) {
            await prisma.Board.create({ data: board })
        }
    }
}

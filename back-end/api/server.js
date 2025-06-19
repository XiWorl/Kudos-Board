const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const model = require("./db-model-prisma")

const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())

const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()


server.get("/api", async (req, res, next) => {
    try {
        const data = await prisma.board.findMany()
        res.status(200).json(data)
        return data

    } catch (err) {
      next(err)
    }
    next({ message: "GET /api", status: 200 })
})


// Error handling middleware
server.use((err, req, res, next) => {
  const { message, status = 500 } = err
  res.status(status).json({ message }) // Unsafe in prod
})

module.exports = server

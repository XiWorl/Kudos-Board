const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const modelHelper = require("./db-model-prisma")
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())


function checkIfBoardIsValid(data) {
	const isBoardValid = (
		data.title !== undefined &&
		data.author !== undefined &&
		data.category !== undefined &&
		data.imageUrl !== undefined
	)
	return isBoardValid
}

function checkIfCardIsValid(data) {
	const isCardValid = (
		data.message !== undefined &&
		data.author !== undefined &&
		data.gifUrl !== undefined &&
		data.upvotes !== undefined &&
		data.boardId !== undefined
	)
	return isCardValid
}


server.get("/api/boards", async (req, res, next) => {
	try {
		const data = await prisma.board.findMany()
		res.status(200).json(data)
		return

	} catch (err) {
		next(err)
		return
	}
})

server.get("/api/boards/:boardId", async (req, res, next) => {
	try {
		const id = parseInt(req.params.boardId)
		const data = await prisma.board.findUnique({ where: { id: id } })
		res.status(200).json(data)
		return

	} catch (err) {
		next(err)
		return
	}
})

server.get("/api/cards", async (req, res, next) => {
	try {
		const data = await prisma.card.findMany()
		res.status(200).json(data)
		return

	} catch (err) {
		next(err)
		return
	}
})

server.get("/api/cards/:cardId", async (req, res, next) => {
	try {
		const id = parseInt(req.params.cardId)
		const data = await prisma.card.findUnique({ where: { id: id } })
		res.status(200).json(data)
		return

	} catch (err) {
		next(err)
		return
	}
})

server.post("/api/boards", async (req, res, next) => {
	const newBoard = req.body

	try {
		if (checkIfBoardIsValid(newBoard) == true) {
			const data = await prisma.board.create({ data: newBoard })
			res.status(201).json(data)
			return
		} else {
			res.status(400).json({ message: "Invalid board data" })
			return
		}
	} catch (err) {
		next(err)
		return
	}
})

server.post("/api/boards/:boardId/cards", async (req, res, next) => {
	const newCard = req.body
	
	try {
		if (checkIfCardIsValid(newCard) == true) {
			const data = await prisma.card.create({ data: newCard })
			res.status(201).json(data)
			return
		} else {
			res.status(400).json({ message: "Invalid card data" })
			return
		}
	} catch (err) {
		next(err)
		return
	}
})

// Error handling middleware
server.use((err, req, res, next) => {
	const { message, status = 500 } = err
	res.status(status).json({ message }) // Unsafe in prod
})

module.exports = server

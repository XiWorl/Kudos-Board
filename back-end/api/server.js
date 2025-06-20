const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())


function checkIfBoardIsValid(data) {
	const isBoardValid = (
		data.title !== undefined &&
		data.category !== undefined &&
		data.imageUrl !== undefined
	)
	return isBoardValid
}

function checkIfCardIsValid(data) {
	const isCardValid = (
		data.message !== undefined &&
		data.title !== undefined &&
		data.gifUrl !== undefined &&
		data.upvotes !== undefined &&
		data.boardId !== undefined
	)
	return isCardValid
}


// GET
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
		const data = await prisma.board.findUnique({ where: {id: id} })
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
		const data = await prisma.card.findUnique({ where: {id: id} })
		res.status(200).json(data)
		return

	} catch (err) {
		next(err)
		return
	}
})

// POST
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


// DELETE
server.delete("/api/boards/:boardId", async (req, res, next) => {
	try {
		const id = parseInt(req.params.boardId)
		const deleted = await prisma.board.delete({ where:{ id: id  }})
		res.status(200).json(deleted)
		return
	} catch (err) {
		next(err)
		return
	}
})

server.delete("/api/boards/:boardId/cards/:cardId", async (req, res, next) => {
	try {
		const id = parseInt(req.params.cardId)
		const deleted = await prisma.card.delete({ where:{id: id}})
		res.status(200).json(deleted)
		return
	} catch (err) {
		next(err)
		return
	}
})

// PATCH
server.patch("/api/boards/:boardId/cards/:cardId", async (req, res, next) => {
	const action = req.body["action"]

	if (action !== undefined) {
		try {
			const id = parseInt(req.params.cardId)
			const data = await prisma.card.findUnique({ where: {id: id} })
			if (data == null || data.upvotes == null ) {
				next({ message: "Card not found", status: 404 })
				return
			}

			let updated = ""

			if (action == "increment") {
				updated = await prisma.card.update({
					where:{id: id}, data: {upvotes: data.upvotes + 1}
				})
			} else if (action == "decrement") {
				updated = await prisma.card.update({
					where:{id: id}, data: {upvotes: data.upvotes - 1}
				})
			}
			res.status(200).json(updated)
			return

		} catch (err) {
			next(err)
			return
		}
	}

	next({ message: "Invalid action", status: 400 })
})

//TODO: name all card id's "cardid" and board id's "boardid"


// Error handling middleware
server.use((err, req, res, next) => {
	const { message, status = 500 } = err
	res.status(status).json({ message }) // Unsafe in prod
})

module.exports = server

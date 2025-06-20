import "../styles/CardContainer.css"
import { CardModal } from "./CardModal"
import { getCardsFromBoard } from "../api"
import { useParams, useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { enableCardModal } from "./CardModal"
import { deleteCard } from "../api"
import { changeUpvote } from "../api"
import { Link } from "react-router-dom"
import { Footer } from "./Footer"

function onCardDelete(cardId, setCardsDisplayed, cardsDisplayed) {
	return async function() {
		await deleteCard(cardId)
		setCardsDisplayed([...cardsDisplayed.filter((card) => card.id !== cardId)])
	}
}

function onCardUpvote(cardBody, setCardsDisplayed, cardsDisplayed) {
	return async function() {
		const cardId = cardBody.id
		const newUpvoteValue = await changeUpvote(cardId, {"action": "increment"})
		cardBody.incremented = true
		cardBody.upvotes = newUpvoteValue.upvotes

		const cloneOfCardsDisplay = [...cardsDisplayed]
		cloneOfCardsDisplay.map((card) => {
			if (card.id == cardId) {
				card.upvotes = cardBody.upvotes
				card.incremented = cardBody.incremented
			}
		})
		setCardsDisplayed([...cloneOfCardsDisplay])
	}
}


function Card(props) {
	return (
		<div className="card">
			<h2>{props.cardBody.title}</h2>
			<h3>{props.cardBody.message}</h3>
			<h3>{props.cardBody.author}</h3>
			<img className="card-gif" src={props.cardBody.gifUrl} alt="" />
			<button onClick={onCardUpvote(props.cardBody, props.setCardsDisplayed, props.cardsDisplayed)}>Upvotes: {props.cardBody.upvotes}</button>
			<button onClick={onCardDelete(props.cardBody.id, props.setCardsDisplayed, props.cardsDisplayed)}>Delete</button>
		</div>
	)
}

function Container(props) {
	useEffect(() => {
		getCardsFromBoard(props.boardId).then((cards) => {
			cards.map((card) => {
				card.incremented = false
			})
			props.setCardsDisplayed(...props.cardsDisplayed, cards)
		})
	}, [])

	return (
		<div className="container">
			{
				props.cardsDisplayed.map((cardInfo) => {
					return <Card key={cardInfo.id}cardBody={cardInfo} setCardsDisplayed={props.setCardsDisplayed} cardsDisplayed={props.cardsDisplayed} />
				})
			}
		</div>
	)
}



export function CardContainer() {
	const [cardsDisplayed, setCardsDisplayed] = useState([])
	const { boardId } = useParams()
	const location = useLocation()

	const boardInfo = location.state || {}

	return (
		<div id="card-container-div">
			<div id="main-header">
				<Link to={"/"} id="back-button">Go Back</Link>
				<h1>Kudos Board</h1>
				<h2>{boardInfo.title || 'Title'}</h2>
				<h3>{boardInfo.category || 'Unknown Category'}</h3>
			</div>
			<button id="create-a-card-button" onClick={enableCardModal}>Create a Card</button>
			<CardModal boardId={boardId} cardsDisplayed={cardsDisplayed} setCardsDisplayed={setCardsDisplayed}/>
			<Container boardId={boardId} cardsDisplayed={cardsDisplayed} setCardsDisplayed={setCardsDisplayed}/>
			<Footer />
		</div>
	)

}

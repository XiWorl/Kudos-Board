import "../styles/CardContainer.css"
import { CardModal } from "./CardModal"
import { getCardsFromBoard } from "../api"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { enableCardModal } from "./CardModal"


function Card(props) {
	return (
		<div className="card">
			<h2>{props.cardBody.title}</h2>
			<h3>{props.cardBody.message}</h3>
			<h3>{props.cardBody.author}</h3>
			<button>Upvotes: {props.cardBody.upvotes}</button>
			<button>Delete</button>
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
					return <Card cardBody={cardInfo}/>
				})
			}
		</div>
	)
}



export function CardContainer() {
	const [cardsDisplayed, setCardsDisplayed] = useState([])
	const { boardId } = useParams()

	return (
		<>
			<h1>Kudos Board</h1>
			<h2>Title</h2>
			<button onClick={enableCardModal}>Create a Card</button>
			<CardModal boardId={boardId} cardsDisplayed={cardsDisplayed} setCardsDisplayed={setCardsDisplayed}/>
			<Container boardId={boardId} cardsDisplayed={cardsDisplayed} setCardsDisplayed={setCardsDisplayed}/>
		</>
	)

}

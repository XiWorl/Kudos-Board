import "../styles/CardContainer.css"
import { CardModal } from "./CardModal"
import { getCardsFromBoard } from "../api"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"


function Card() {
	return (
		<div className="card">
			<h2>Card Title</h2>
			<h3>Card Description</h3>
			<h3>Card Owner</h3>
			<button>Upvote</button>
			<button>Delete</button>
		</div>
	)
}

function Container(props) {
	useEffect(() => {
		getCardsFromBoard(props.boardId).then((cards) => {
			props.setCardsDisplayed(...props.cardsDisplayed, cards)
		})
	}, [])

	return (
		<div className="container">
			{
				props.cardsDisplayed.map((card) => {
					return <Card />
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
			<button>Create a Card</button>
			<CardModal boardId={boardId} cardsDisplayed={cardsDisplayed} setCardsDisplayed={setCardsDisplayed}/>
			<Container boardId={boardId} cardsDisplayed={cardsDisplayed} setCardsDisplayed={setCardsDisplayed}/>
		</>
	)

}

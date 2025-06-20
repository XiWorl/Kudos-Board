import "../styles/CardContainer.css"
import { CardModal } from "./CardModal"


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

function Container() {
  return (
    <div className="container">
		<Card />

	</div>
  )
}



export function CardContainer() {
  return (
	<>
		<h1>Kudos Board</h1>
		<h2>Title</h2>
		<button>Create a Card</button>
		<CardModal />
		<Container />
	</>
  )

}

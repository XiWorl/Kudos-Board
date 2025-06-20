import "../styles/Card.css"
import { deleteBoard } from "../api"


function ViewBoardButton(props) {
    return function() {
    }
}
function DeleteBoardButton(props) {
    return function() {
        deleteBoard(props.cardBody.id)
        props.setDisplayedCards(props.displayedCards.filter(card => card.id != props.cardBody.id))
    }
}


export function Card(props) {
    return (
        <div className="card">
            <div className="card-information">
                <img src={props.cardBody.imageUrl} alt={props.cardBody.title} />
                <h2 className="card-text">{props.cardBody.title}</h2>
                <h3 className="card-text">{props.cardBody.category}</h3>
            </div>

            <div className="card-interactables">
                <button onClick={ViewBoardButton(props)}>View Board</button>
                <button onClick={DeleteBoardButton(props)}>Delete Board</button>
            </div>
        </div>
    )
}

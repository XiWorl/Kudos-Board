import "../styles/Card.css"
import { deleteBoard } from "../api"
import { useNavigate } from "react-router-dom"


function ViewBoardButton(props) {
    const navigate = useNavigate();
    return function() {
        navigate(`/boards/${props.cardBody.id}/cards`, {
            state: {
                title: props.cardBody.title,
                category: props.cardBody.category,
            }
        });
    }
}

function DeleteBoardButton(props) {
    return function() {
        deleteBoard(props.cardBody.id)
        props.setDisplayedCards(props.displayedCards.filter(card => card.id != props.cardBody.id))
    }
}


export function Board(props) {
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

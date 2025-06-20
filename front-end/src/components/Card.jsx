import "../styles/Card.css"


function ViewBoardButton(props) {
    return (
        <button onClick={props.onClick}>View Board</button>
    )
}
function DeleteBoardButton(props) {
    return (
        <button onClick={props.onClick}>Delete Board</button>
    )
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
                <ViewBoardButton />
                <DeleteBoardButton />
            </div>
        </div>
    )
}

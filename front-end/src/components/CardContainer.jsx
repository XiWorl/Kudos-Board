import "../styles/CardContainer.css"

let testData = [
    {id: 1, title: "Board title", type: "Thank You", author: "John"},
    {id: 2, title: "Here I am", type: "Thank You", author: "Jimmy"},
    {id: 3, title: "Title", type: "Celebration", author: "Johnny"},
]

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

function Card(props) {
    return (
        <div className="card">
            <div className="card-information">
                <img src="#" alt="" />
                <h2 className="card-text">{props.title}</h2>
                <h3 className="card-text">{props.type}</h3>
            </div>

            <div className="card-interactables">
                <ViewBoardButton />
                <DeleteBoardButton />
            </div>
        </div>
    )
}

export function CardContainer(props) {
    return (
        <div id="card-container">
            {testData.map(function(item) {
                return <Card key={item.id}title={item.title} type={item.type} author={item.author} />
            })}
        </div>
    )
}

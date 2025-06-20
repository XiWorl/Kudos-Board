import { Card } from "./Card"
import "../styles/CardContainer.css"

let testData = [
    {id: 1, title: "Board title", type: "Thank You", author: "John"},
    {id: 2, title: "Here I am", type: "Thank You", author: "Jimmy"},
    {id: 3, title: "Title", type: "Celebration", author: "Johnny"},
]




export function CardContainer(props) {
    return (
        <div id="card-container">
            {testData.map(function(item) {
                return <Card key={item.id}title={item.title} type={item.type} author={item.author} />
            })}
        </div>
    )
}

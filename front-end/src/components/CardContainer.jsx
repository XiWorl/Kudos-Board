import { Card } from "./Card"
import { useEffect } from "react"
import { getBoards } from "../api"
import "../styles/CardContainer.css"

let testData = [
    {id: 1, title: "Board title", type: "Thank You", author: "John"},
    {id: 2, title: "Here I am", type: "Thank You", author: "Jimmy"},
    {id: 3, title: "Title", type: "Celebration", author: "Johnny"},
]

function searchQueryFilter(searchQuery, cardData) {
    if (searchQuery == "" || searchQuery == " ") {
        return true
    }
    if (cardData.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true
    }
    return false
}
function searchFilter(cardData) {

}


export function CardContainer(props) {
    useEffect(function() {
        const result = getBoards()
        result.then(data => {
            props.setDisplayedCards(data)
        })
    }, [])

    return (
        <div id="card-container">
            {
                searchFilter(props.displayedCards)
            }
            {
                props.displayedCards.map(function(item) {
                    if (searchQueryFilter(props.searchQuery, item) == false) {
                        return
                    }
                    return <Card key={item.id} cardBody={item} />
                })
            }
        </div>
    )
}

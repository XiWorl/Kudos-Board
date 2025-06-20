import { Card } from "./Card"
import { useEffect } from "react"
import { getBoards } from "../api"
import "../styles/CardContainer.css"

const sortOptions = {
    "Recent": function(a, b) { return a.id < b.id ? 1 : -1 },
    "All": function(a, b) { return a.id > b.id ? 1 : -1 },
}

const filterOptions = {
    "Celebration": function(a) { return a.type == "Celebration" },
    "Thank You": function(a) { return a.type == "Thank You" },
    "Inspiration": function(a) { return a.type == "Inspiration" },
}

function searchQueryFilter(searchQuery, cardData) {
    if (searchQuery == "" || searchQuery == " ") {
        return true
    }
    if (cardData.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true
    }
    return false
}

export function renderSort(displayedCards, currentFilter) {
    if (sortOptions[currentFilter] != undefined) {
        displayedCards.sort(sortOptions[currentFilter])
    } else if (filterOptions[currentFilter] != undefined) {
        displayedCards = displayedCards.filter(filterOptions[currentFilter])
    }
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
                renderSort(props.displayedCards, props.currentFilter)
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

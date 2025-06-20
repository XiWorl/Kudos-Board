import { Board } from "./Board"
import { useEffect } from "react"
import { getBoards } from "../api"
import "../styles/CardContainer.css"

const sortOptions = {
    "Recent": function(a, b) { return a.id < b.id ? 1 : -1 },
    "All": function(a, b) { return a.id > b.id ? 1 : -1 },
}

const filterOptions = {
    "Celebration": function(a) { return a.category == "Celebration" },
    "Thank You": function(a) { return a.category == "Thank You" },
    "Inspiration": function(a) { return a.category == "Inspiration" },
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

export function renderSort(displayedCards, setDisplayedCards, currentFilter) {
    displayedCards.map(function(card) {
        card.visible = true
    })

    if (sortOptions[currentFilter] != undefined) {
        displayedCards.sort(sortOptions[currentFilter])
    } else if (filterOptions[currentFilter] != undefined) {
        displayedCards.map(function(card) {
            if (filterOptions[currentFilter](card) == false) {
                card.visible = false
            }
        })
    }
}


export function BoardContainer(props) {
    useEffect(function() {
        const result = getBoards()
        result.then(data => {
            props.setDisplayedCards(data)
        })
    }, [])

    return (
        <div id="board-container" className="container">
            {
                renderSort(props.displayedCards, props.setDisplayedCards, props.currentFilter)
            }
            {
                props.displayedCards.map(function(item) {
                    if (searchQueryFilter(props.searchQuery, item) == false) {
                        return
                    }
                    if (item.visible == false) {
                        return
                    }
                    return <Board key={item.id} cardBody={item} setDisplayedCards={props.setDisplayedCards} displayedCards={props.displayedCards}/>
                })
            }
        </div>
    )
}

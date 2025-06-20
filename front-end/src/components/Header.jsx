import { enableBoardModal, disableBoardModal } from "./BoardModal"
import "../styles/Header.css"


function onCreateBoard() {
    enableBoardModal()
}

function onChange(setSearchQuery) {
    return function(event) {
        setSearchQuery(event.target.value)
    }
}

function onClearSearch(setSearchQuery) {
    return function() {
        setSearchQuery("")
        document.getElementById("search").value = ""
    }
}

function onFilterButtonClick(setCurrentFilter, displayedCards) {
    return function(event) {
        setCurrentFilter(event.target.innerText)
    }
}

export function Header(props) {
    return (
        <>
            <h1>Kudos Board</h1>
            <div id="search-div">
                <input type="text" id="search" placeholder="Search" className="search-div-child" onChange={onChange(props.setSearchQuery)} />
                <button id="search-button" className="searchbar-button search-div-child">Search</button>
                <button id="clear-search" className="searchbar-button search-div-child" onClick={onClearSearch(props.setSearchQuery)}>Clear</button>
            </div>
            <div id="filter-div">
                <button className="filter-button" onClick={onFilterButtonClick(props.setCurrentFilter, props.displayedCards)}>All</button>
                <button className="filter-button" onClick={onFilterButtonClick(props.setCurrentFilter, props.displayedCards)}>Recent</button>
                <button className="filter-button" onClick={onFilterButtonClick(props.setCurrentFilter, props.displayedCards)}>Celebration</button>
                <button className="filter-button" onClick={onFilterButtonClick(props.setCurrentFilter, props.displayedCards)}>Thank You</button>
                <button className="filter-button" onClick={onFilterButtonClick(props.setCurrentFilter, props.displayedCards)}>Inspiration</button>
            </div>
            <button id="create-a-board" className="filter-button" onClick={onCreateBoard}>Create A New Board</button>
        </>
    )
}

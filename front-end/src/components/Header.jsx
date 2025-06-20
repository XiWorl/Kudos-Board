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
                <button className="filter-button">All</button>
                <button className="filter-button">Recent</button>
                <button className="filter-button">Celebration</button>
                <button className="filter-button">Thank You</button>
                <button className="filter-button">Inspiration</button>
            </div>
            <button id="create-a-board" className="filter-button" onClick={onCreateBoard}>Create A New Board</button>
        </>
    )
}

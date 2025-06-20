import { enableBoardModal, disableBoardModal } from "./BoardModal"
import "../styles/Header.css"


function onCreateBoard() {
    console.log("Creating a new board")
    enableBoardModal()
}

export function Header() {
    return (
        <>
            <h1>Kudos Board</h1>
            <div id="search-div">
                <input type="text" id="search" placeholder="Search" className="search-div-child"/>
                <button id="search-button" className="searchbar-button search-div-child">Search</button>
                <button id="clear-search" className="searchbar-button search-div-child">Clear</button>
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

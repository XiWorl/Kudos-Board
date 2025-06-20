import { useState } from "react"
import { createNewCard } from "../api";
import "../styles/BoardModal.css"

const API_KEY = import.meta.env.VITE_API_KEY;

function disablCardModal() {

}

function onGIFImageClicked(gifURL, setDisplayedGIFs) {
    return function(a) {
        document.getElementById("card-gif-url").value = gifURL
        document.getElementById("card-gif-search").value = ""
        setDisplayedGIFs([])
    }
}

function GIFSContainter(props) {
    return (
        <div id="gifs-container">
            {props.displayedGIFs.map((gifURL) => (
                <img onClick={onGIFImageClicked(gifURL, props.setDisplayedGIFs)} src={gifURL} width="150" height="150" className="giphy-embed" key={gifURL}></img>
            ))}
        </div>
    )
}

function createCard(boardId, cardsDisplayed, setCardsDisplayed) {
    return async function () {
        const title = document.getElementById("card-title").value
        const description = document.getElementById("card-description").value
        const gifUrl = document.getElementById("card-gif-url").value
        const gifSearch = document.getElementById("card-gif-search").value
        const owner = document.getElementById("card-owner").value

        //TODO: try catch on parseInt
        if (title === "" || description === "" ||  gifUrl === "") {
            alert("Please fill in all required fields")
            return
        }
        const cardData = await createNewCard(boardId, { "title": title, "message": description, "gifUrl": gifUrl, "upvotes": 0, "boardId": parseInt(boardId), "author": owner})
        setCardsDisplayed([...cardsDisplayed, cardData])
    }
}

function getSearchedGIF(displayedGIFs, setDisplayedGIFs) {
    return async function() {
        const splitArray = document.getElementById("card-gif-search").value.split(" ");
        const joinedString = splitArray.join("+");

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${joinedString}&limit=6`
        const response = await fetch(url)
        const gifsData = await response.json()
        const newGifUrls = gifsData.data.map(gif => gif.images.preview_gif.url)
        setDisplayedGIFs([...displayedGIFs, ...newGifUrls])
    }
}

export function CardModal(props) {
    const [displayedGIFs, setDisplayedGIFs] = useState([])

    return (
        <div id="card-modal">
            <div className="board-modal-content">
                <span className="close" onClick={disablCardModal}>&times;</span>
                <h2>Create a New Card</h2>
                <input type="text" id="card-title" placeholder="Enter card title" />
                <input type="text" id="card-description" placeholder="Enter card description" />
                <input type="text" id="card-gif-search" placeholder="Search GIFs" />
                <button onClick={getSearchedGIF(displayedGIFs, setDisplayedGIFs)}>Search</button>
                <GIFSContainter displayedGIFs={displayedGIFs} setDisplayedGIFs={setDisplayedGIFs}/>
                <input type="text" id="card-gif-url" placeholder="Enter GIF URL" />
                <input type="text" id="card-owner" placeholder="Enter Owner (optional)" />
                <button onClick={createCard(props.boardId, props.cardsDisplayed, props.setCardsDisplayed)} >Create card</button>
            </div>
        </div>
    )
}

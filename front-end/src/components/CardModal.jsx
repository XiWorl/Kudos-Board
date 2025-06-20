import "../styles/BoardModal.css"

function disablCardModal() {

}

export function CardModal(props) {
    return (
        <div id="card-modal">
            <div className="board-modal-content">
                <span className="close" onClick={disablCardModal}>&times;</span>
                <h2>Create a New Card</h2>
                <input type="text" id="board-title" placeholder="Enter card title"/>
                <input type="text" id="board-title" placeholder="Enter card description"/>
                <input type="text" id="board-title" placeholder="Search GIFs"/>
                <button>Search</button>
                <input type="text" id="board-title" placeholder="Enter GIF URL"/>
                <input type="text" id="board-title" placeholder="Enter Owner (optional)"/>
                <button>Create card</button>
            </div>
        </div>
    )
}



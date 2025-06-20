import "../styles/BoardModal.css"

const DEFAULT_CATEGORY = "Select a Category"

export function BoardModal(props) {
    return (
        <div id="board-modal">
            <div className="board-modal-content">
                <span className="close" onClick={disableBoardModal}>&times;</span>
                <h2>Create a New Board</h2>
                <div>
                    <h3>Title</h3>
                    <input type="text" id="board-title"/>
                </div>
                <div>
                    <h3>Category</h3>
                    <select id="board-category" required>
                        <option value="Select a Category">Select a category</option>
                        <option value="Celebration">Celebration</option>
                        <option value="Thank You">Thank You</option>
                        <option value="Inspiration">Inspiration</option>
                    </select>
                </div>
                <div>
                    <h3>Author</h3>
                    <input type="text" id="board-Author"/>
                </div>
                <button onClick={createBoard(props.setDisplayedCards)}>Create a Board</button>
            </div>
        </div>
    )
}

function createBoard(displayedCards, setDisplayedCards) {
    return function() {
        const title = document.getElementById("board-title").value
        const category = document.getElementById("board-category").value
        const author = document.getElementById("board-Author").value

        if (category === DEFAULT_CATEGORY || title === "" || title === " ") {
            alert("Please select a category and title for your board")
        }
        
        disableBoardModal()
    }
}


export function enableBoardModal() {
    document.getElementById("board-modal").style.display = "block"
}

export function disableBoardModal() {
    document.getElementById("board-modal").style.display = "none"
}

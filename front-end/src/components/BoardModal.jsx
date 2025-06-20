import "../styles/BoardModal.css"


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
                <button onClick={createBoard}>Create a Board</button>
            </div>
        </div>
    )
}

function createBoard() {

}


export function enableBoardModal() {
    document.getElementById("board-modal").style.display = "block"
}

export function disableBoardModal() {
    document.getElementById("board-modal").style.display = "none"
}

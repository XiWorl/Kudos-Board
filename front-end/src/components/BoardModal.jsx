
export function BoardModal(props) {
    <div id="board-modal">
        <div class="board-modal-content">
            <span class="close" onClick={disableBoardModal}>&times;</span>
            <h2>Create a New Board</h2>
            <div>
                <h3>Title</h3>
                <input type="text" id="board-title"/>
            </div>
            <div>
                <h3>Category</h3>
                <select id="board-category">
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
            <button>Create a Board</button>
        </div>
    </div>
}

export function enableBoardModal() {
    document.getElementById("board-modal").style.display = "block";
}

export function disableBoardModal() {
    document.getElementById("board-modal").style.display = "none";
}

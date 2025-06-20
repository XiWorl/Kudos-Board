const DEFAULT_BOARD_ID = 1
const baseURL = import.meta.env.VITE_RENDER_LINK || 'http://localhost:3000'

export async function createNewBoard(boardData) {
    try {
        const response = await fetch(`${baseURL}/api/boards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(boardData),
        })

        const data = await response.json()
		return data;
    } catch (error) {
        console.error('Error posting data:', error)
    }
}

export async function deleteBoard(boardId) {
    try {
        const response = await fetch(`${baseURL}/api/boards/${boardId}`, {
            method: 'DELETE',
        })

        const data = await response.json()
		return data;
    } catch (error) {
        console.error('Error posting data:', error)
    }
}

export async function getBoards() {
	try {
        const response = await fetch(`${baseURL}/api/boards`)
        const data = await response.json()
		return data
    } catch (error) {
        console.error('Error retrieving data:', error)
    }
}

export async function getCardsFromBoard(boardId) {
    try {
        const response = await fetch(`${baseURL}/api/boards/${boardId}/cards`)
        const data = await response.json()
		return data
    } catch (error) {
        console.error('Error retrieving data:', error)
    }
}

export async function createNewCard(boardId, cardData) {
    try {
        const response = await fetch(`${baseURL}/api/boards/${boardId}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        })

        const data = await response.json()
		return data;
    } catch (error) {
        console.error('Error posting data:', error)
    }
}

export async function deleteCard(cardId) {
    try {
		const id = parseInt(cardId)
        const response = await fetch(`${baseURL}/api/boards/${DEFAULT_BOARD_ID}/cards/${id}`, {
            method: 'DELETE',
        })

        const data = await response.json()
		return data;
    } catch (error) {
        console.error('Error posting data:', error)
    }
}


export async function changeUpvote(cardId, action) {
    try {
		const id = parseInt(cardId)
        const response = await fetch(`${baseURL}/api/boards/${DEFAULT_BOARD_ID}/cards/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action),
        })

        const data = await response.json()
		return data;
    } catch (error) {
        console.error('Error posting data:', error)
    }
}

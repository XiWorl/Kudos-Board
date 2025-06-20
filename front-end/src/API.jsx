

export async function createNewBoard(boardData) {
    try {
        const response = await fetch('http://localhost:3000/api/boards', {
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
        const response = await fetch(`http://localhost:3000/api/boards/${boardId}`, {
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
        const response = await fetch('http://localhost:3000/api/boards')
        const data = await response.json()
		return data
    } catch (error) {
        console.error('Error retrieving data:', error)
    }
}

export async function getCardsFromBoard(boardId) {
    try {
        const response = await fetch(`http://localhost:3000/api/boards/${boardId}/cards`)
        const data = await response.json()
		return data
    } catch (error) {
        console.error('Error retrieving data:', error)
    }
}

export async function createNewCard(boardId, cardData) {
    try {
        const response = await fetch(`http://localhost:3000/api/boards/${boardId}/cards`, {
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

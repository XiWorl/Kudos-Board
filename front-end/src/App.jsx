import { useState } from 'react'
import { BoardContainer } from './components/BoardContainer'
import { Header } from './components/Header'
import { BoardModal } from './components/BoardModal'


import "./styles/App.css"




function App() {
  const [displayedCards, setDisplayedCards] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentFilter, setCurrentFilter] = useState("All")

  return (
    <>
      <div id="body-content">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setCurrentFilter={setCurrentFilter} displayedCards={displayedCards}/>
        <BoardModal displayedCards={displayedCards} setDisplayedCards={setDisplayedCards} />
        <BoardContainer displayedCards={displayedCards} setDisplayedCards={setDisplayedCards} searchQuery={searchQuery} currentFilter={currentFilter}/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import { CardContainer } from './components/CardContainer'
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
        <CardContainer displayedCards={displayedCards} setDisplayedCards={setDisplayedCards} searchQuery={searchQuery} currentFilter={currentFilter}/>
      </div>
    </>
  )
}

export default App

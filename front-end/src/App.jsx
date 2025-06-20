import { useState } from 'react'
import { CardContainer } from './components/CardContainer'
import { Header } from './components/Header'
import { BoardModal } from './components/BoardModal'


import "./styles/App.css"




function App() {
  const [displayedCards, setDisplayedCards] = useState([])
  const [searchQuery, setSearchQuery] = useState([])

  return (
    <>
      <div id="body-content">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <BoardModal />
        <CardContainer displayedCards={displayedCards} setDisplayedCards={setDisplayedCards} searchQuery={searchQuery}/>
      </div>
    </>
  )
}

export default App

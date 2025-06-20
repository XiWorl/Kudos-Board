import { useState } from 'react'
import { CardContainer } from './components/CardContainer'
import { Header } from './components/Header'
import "./styles/App.css"

function App() {
  const [displayedCards, setDisplayedCards] = useState([])
  const [searchQuery, setsearchQuery] = useState([])

  return (
    <>
      <div id="body-content">
        <Header />
        <CardContainer displayedCards={displayedCards} setDisplayedCards={setDisplayedCards} searchQuery={searchQuery}/>
      </div>
    </>
  )
}

export default App

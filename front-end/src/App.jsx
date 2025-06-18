import { useState } from 'react'
import { CardContainer } from './components/CardContainer'
import { Header } from './components/Header'
import "./styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <div>
      <Header />
      <CardContainer />
    </div>
    </>)
}

export default App

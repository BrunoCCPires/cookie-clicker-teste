import { useState } from 'react'
import './App.css'

function App() {
  const [cookies, setCookies] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [multiplierCost, setMultiplierCost] = useState(10)

  const handleClick = () => {
    setCookies(prev => prev + multiplier)
  }

  const buyMultiplier = () => {
    if (cookies >= multiplierCost) {
      setCookies(prev => prev - multiplierCost)
      setMultiplier(prev => prev + 1)
      setMultiplierCost(prev => Math.floor(prev * 1.5))
    }
  }

  return (
    <div className="cookie-clicker">
      <h1>Cookie Clicker</h1>
      
      <div className="stats">
        <p>Cookies: {cookies}</p>
        <p>Cookies per click: {multiplier}</p>
      </div>

      <button 
        className="cookie-button" 
        onClick={handleClick}
      >
        🍪
      </button>

      <div className="shop">
        <h2>Shop</h2>
        <button
          onClick={buyMultiplier}
          disabled={cookies < multiplierCost}
          className="shop-button"
        >
          Buy Multiplier ({multiplierCost} cookies)
        </button>
      </div>
    </div>
  )
}

export default App
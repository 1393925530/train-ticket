import { createContext, useState } from 'react'
import './App.css'

const BatteryContext = createContext()
const OnlineContext = createContext()

function Leaf() {
  return (
    <BatteryContext.Consumer>
      {(battery) => (
        <OnlineContext.Consumer>
          {(online) => (
            <h1>
              Battery: {battery}, Online: {String(online)}
            </h1>
          )}
        </OnlineContext.Consumer>
      )}
    </BatteryContext.Consumer>
  )
}

function Middle() {
  return <Leaf />
}

function App() {
  const [battery, setBattery] = useState(60)
  const [online, setOnline] = useState(false)
  return (
    <BatteryContext.Provider value={battery}>
      <OnlineContext.Provider value={online}>
        <button type="button" onClick={() => setBattery(battery - 1)}>
          Press
        </button>
        <button type="button" onClick={() => setOnline(!online)}>
          Switch
        </button>
        <Middle />
      </OnlineContext.Provider>
    </BatteryContext.Provider>
  )
}

export default App

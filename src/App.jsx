import { BrowserRouter as Router } from 'react-router-dom'
import GameContainer from './components/GameContainer'
import { AudioProvider } from './contexts/AudioContext'
import { GameStateProvider } from './contexts/GameStateContext'

export default function App() {
  return (
    <Router>
      <GameStateProvider>
        <AudioProvider>
          <GameContainer />
        </AudioProvider>
      </GameStateProvider>
    </Router>
  )
}

import { createContext, useState, useCallback } from 'react'

export const GameStateContext = createContext()

export function GameStateProvider({ children }) {
  const [gameState, setGameStateRaw] = useState({
    currentScene: 'lunar-arrival',
    inventory: [],
    discoveredData: [],
    progress: {}
  })

  const setGameState = useCallback((updates) => {
    setGameStateRaw(prev => ({
      ...prev,
      ...updates
    }))
  }, [])

  const value = {
    gameState,
    setGameState
  }

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  )
}

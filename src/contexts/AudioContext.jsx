import { createContext, useState, useCallback } from 'react'
import { Howl } from 'howler'

export const AudioContext = createContext()

export function AudioProvider({ children }) {
  const [narrationPlaying, setNarrationPlaying] = useState(false)

  const playNarration = useCallback((id) => {
    // Implementation for playing narration audio
    setNarrationPlaying(true)
  }, [])

  const value = {
    narrationPlaying,
    playNarration
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

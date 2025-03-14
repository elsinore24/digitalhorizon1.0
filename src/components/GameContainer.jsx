import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LunarArrival from '../scenes/LunarArrival'
import DataPerceptionOverlay from './DataPerceptionOverlay'
import styles from './GameContainer.module.scss'

export default function GameContainer() {
  const [dataPerceptionMode, setDataPerceptionMode] = useState(false)

  const toggleDataPerception = () => {
    setDataPerceptionMode(!dataPerceptionMode)
  }

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<LunarArrival dataPerceptionMode={dataPerceptionMode} />} />
      </Routes>
      <DataPerceptionOverlay active={dataPerceptionMode} />
      <button className={styles.perceptionToggle} onClick={toggleDataPerception}>
        Toggle Data Perception
      </button>
    </div>
  )
}

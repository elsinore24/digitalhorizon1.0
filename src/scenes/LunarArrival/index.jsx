import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useAudio from '../../hooks/useAudio'
import useGameState from '../../hooks/useGameState'
import styles from './LunarArrival.module.scss'

export default function LunarArrival({ dataPerceptionMode }) {
  const { playNarration } = useAudio()
  const { setGameState } = useGameState()

  useEffect(() => {
    playNarration('lunar-arrival-intro')
  }, [])

  return (
    <motion.div 
      className={`${styles.scene} ${dataPerceptionMode ? styles.dataMode : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.environment}>
        <div className={styles.lunarSurface}></div>
        {dataPerceptionMode && (
          <div className={styles.dataOverlay}>
            <div className={styles.temporalEcho}></div>
            <div className={styles.hiddenPath}></div>
          </div>
        )}
      </div>
      <div className={styles.dialogueBox}>
        <p>Alara: Professor Thorne, can you hear me? Your consciousness is now interfacing with my systems...</p>
      </div>
    </motion.div>
  )
}

import { useState, useRef, useEffect } from 'react'
import Popup from './Popup'

function DelayedPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(true)
    }, 5000) as NodeJS.Timeout

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {showPopup && <Popup />}
    </>
  )
}

export default DelayedPopup

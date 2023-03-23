import { useState } from 'react'
import Popup from './Popup'

function DelayedPopup() {
  const [showPopup, setShowPopup] = useState(false)

  setTimeout(() => {
    setShowPopup(true)
  }, 5000)

  return (
    <>
      {showPopup && <Popup />}
    </>
  )
}

export default DelayedPopup

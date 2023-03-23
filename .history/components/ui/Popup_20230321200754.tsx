import { useState, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Popup from './Popup'


type DelayedPopupProps = {
  onClose: () => void
}

function DelayedPopup({ onClose }: DelayedPopupProps) {
  const [showPopup, setShowPopup] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {showPopup && <Popup onClose={onClose} />}
    </>
  )
}

export default DelayedPopup

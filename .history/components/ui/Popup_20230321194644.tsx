import { Fragment, useState, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Popup from './Popup'

function DelayedPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const popupContentRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        popupContentRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !popupContentRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function handlePopupClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }

  return (
    <>
      {showPopup && (
        <div ref={popupRef}>
          <div ref={popupContentRef} onClick={handlePopupClick}>
            <Popup />
          </div>
        </div>
      )}
    </>
  )
}

export default DelayedPopup

import React from 'react'

const Popup = ({closePopup}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="popup-close" aria-label="popup-close" onClick={closePopup}>
          <img src="../img/close.svg" />
        </button>
        <div className="mx-auto mt-16 mb-5 popup-image"></div>
        <div className="text-center mx-auto w-1/2">
          <p className="text-2xl font-bold mb-5">Your pick was correct!</p>
          <p className="text-lg font-normal">Braves won!</p>
        </div>
      </div>
      <div className="popup-layer" onClick={closePopup}></div>
    </div>
  )
}

export default Popup

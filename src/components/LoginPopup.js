import React from 'react'

const LoginPopup = ({closePopup, login}) => {
  return (
    <div className="popup">
      <div className="popup-login rounded relative">
        <div className="popup-header flex">
          <img className="ml-5 mt-5" src="./img/fms-logo.png" />
          {/* <img className="ml-auto" src="./img/logo.png" /> */}
        </div>
        <div>
          <strong className="login-slogan text-2xl my-16 block text-center">Sign in to proceed</strong>
          <button
            className="mb-5 mx-auto w-1/2 flex items-center justify-center py-2 bg-white text-black rounded-lg"
            onClick={login}
          >
            <img className="mr-3" src="./img/apple.svg" />
            Sign up with Apple
          </button>
          <button
            className="mb-5 mx-auto w-1/2 flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg"
            onClick={login}
          >
            <img className="mr-3" src="./img/facebook.svg" />
            Sign up with Facebook
          </button>
        </div>
        <button className="popup-close" aria-label="popup-close" onClick={closePopup}>
          <img src="../img/close.svg" />
        </button>
        {/* <div className="mx-auto mt-16 mb-5 popup-image"></div>
        <div className="text-center mx-auto w-1/2">
          <p className="text-2xl font-bold mb-5">Your pick was correct!</p>
          <p className="text-lg font-normal">Braves won!</p>
        </div> */}

      </div>
      <div className="popup-layer" onClick={closePopup}></div>
    </div>
  )
}

export default LoginPopup
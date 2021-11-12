import React, {useState} from 'react'
import Cookies from 'js-cookie'
import FacebookLogin from 'react-facebook-login'

const parseJwt = (token) => {
  try {
      return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
      return null
  }
}

const LoginPopup = ({closePopup, login, getGameData}) => {
  const [error, setError] = useState()
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const resetErrors = () => {
    setError('')
    setEmailError('')
    setPasswordError('')
  }
  
  const parseErrorStatus = (status, statusText) => {
    // console.log('status', status)
    // console.log('statusText', statusText)
    switch (status) {
      case 401:
        setError('Wrong E-mail / Password')
        break
      default:
        setError('Unrecognized Error')
        break
    }
  }
  
  const loginByFacebook = (resp) => {
      console.log('face resp', resp)
  
      // fetch('165.22.179.8/accounts/social-auth', {
      //       method: 'GET',
      //       // body: JSON.stringify({email, password}),
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer ' + Cookies.get('access'),
      //       },
      //   }).then(
      //       response => response.json().then(data => (
      //         {response: response, body: data}
      //     )))
  }
  
  const loginByServer = () => {
      const credentials = {
        username: 'test_thursday_1111',
        password: 'setpass1',
      }
      
      fetch('http://165.22.179.8/accounts/token/', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': 'Bearer ' + Cookies.get('access'),
            },
      }).then(
        response => {
          console.log('response', response)
  
          if (!response.ok) {
            parseErrorStatus(response.status, response.statusText)
          }
          return response.json()
        }
      ).then(data => {
        if (!data.access || !data.refresh) {
          return
        }
        // Cookies.set('access', data.access)
        // Cookies.set('refresh', data.refresh)

        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)
  
        const parsedToken = parseJwt(data.access)
        const userId = parsedToken.user_id
        // console.log('parsedToken', parsedToken)

        getGameData()
        closePopup()
        // resetErrors()
      }).catch(err => {
        console.log('err', err)
      })
  }

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
            onClick={loginByServer}
          >
            <img className="mr-3" src="./img/apple.svg" />
            {/* Sign up with Apple */}
            Sign up temp
          </button>
          <FacebookLogin
            textButton="Sign up with Facebook"
            // appId= "544840439922230"
            appId= "1290912134691205"
            fields="name,email"
            callback={loginByFacebook}
            cssClass="mb-5 mx-auto w-1/2 flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg"
          />
          {/* <button
            className="mb-5 mx-auto w-1/2 flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg"
            onClick={loginByFacebook}
          >
            <img className="mr-3" src="./img/facebook.svg" />
            Sign up with Facebook
          </button> */}
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
import React from 'react'
import FacebookLogin from 'react-facebook-login'

const SignIn = ({setCurrentPage, getGameData}) => {

  const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
        return null
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
      setCurrentPage('games')
      // closePopup()
      // resetErrors()
    }).catch(err => {
      console.log('err', err)
    })
  }

  // const setGamesPage = () => {
  //   getGameData()
  //   setCurrentPage('games')
  // }
  return (
    <main className="signin pb-10 flex flex-col justify-end">
      <img className="mx-auto" src="./img/logo.png" />
      <button
        className="mb-2 mx-auto w-2/3 flex items-center justify-center py-2 bg-white text-black rounded-lg"
        onClick={loginByServer}
      >
        <img className="mr-3" src="./img/apple.svg" />
        {/* Sign up with Apple */}
        Sign up temp
      </button>
      {/* <button
        className="mb-2 mx-auto w-2/3 flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg"
        onClick={setGamesPage}
      >
        <img className="mr-3" src="./img/facebook.svg" />
        Sign up with Facebook
      </button> */}
      <FacebookLogin
        textButton="Sign up with Facebook"
        // appId= "544840439922230"
        appId= "1290912134691205"
        fields="name,email"
        callback={loginByFacebook}
        cssClass="mb-5 mx-auto w-2/3 flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg"
      />
    </main>
  )
}

export default SignIn

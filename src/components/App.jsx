import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Games from './Games'
import Leaderboard from './Leaderboard'
import LoginPage from './LoginPage'
import LoginPopup from './LoginPopup'
import Cookies from 'js-cookie'

const isDesktop = window.screen.width > 768

const App = ({setContainerBackground}) => {
  const [currentPage, setCurrentPage] = useState(isDesktop ? 'games' : 'login')
  const [isAuth, setAuth] = useState(false)
  const [isLoginPopupShown, setLoginPopupShown] = useState(false)
  const [game, setGame] = useState(null)

  const getGameData = () => {
    const accessToken = localStorage.getItem('access')
    const refreshToken = localStorage.getItem('refresh')
    const headers = accessToken ? {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    } : {
      'Content-Type': 'application/json',
    }

    // Cookies.get('access') ? 
    fetch('http://165.22.179.8/events/', {
          method: 'GET',
          headers: headers,
      })
      .then(
        response => response.json()
      )
      .then(data => {
          // console.log('games data', data)
          setGame(data.results[1])
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    setContainerBackground(currentPage === 'login' ? 'linear-gradient(to bottom, #F2C34E, #ED944F)' : '#141415')
  }, [currentPage])

  useEffect(() => {
    getGameData()
  }, [])

  const closeLoginPopup = () => {
    setLoginPopupShown(false)
  }
  const login = () => {
    setAuth(true)
    setLoginPopupShown(false)
  }

  const doLogin = () => {
    isDesktop ? setLoginPopupShown(true) : setCurrentPage('login')
  }

  console.log('game', game)

  return (
    <>
      {currentPage !== 'login' && isDesktop ? 
        <Header
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          isAuth={isAuth}
          setAuth={setAuth}
          setLoginPopupShown={setLoginPopupShown}
          getGameData={getGameData}
        /> : 
        null
      }
      {currentPage === 'login' ? <LoginPage setCurrentPage={setCurrentPage} getGameData={getGameData} /> : null}
      {currentPage === 'games' ? <Games isAuth={isAuth} doLogin={doLogin} game={game} /> : null}
      {currentPage === 'leaderboard' ? <Leaderboard isAuth={isAuth} /> : null}
      {currentPage !== 'login' && !isDesktop ? <Footer setCurrentPage={setCurrentPage} /> : null}
      {isLoginPopupShown ? <LoginPopup closePopup={closeLoginPopup} login={login} getGameData={getGameData} /> : null}
    </>
  )
}

export default App

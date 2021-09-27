import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Games from './Games'
import Leaderboard from './Leaderboard'
import LoginPage from './LoginPage'
import LoginPopup from './LoginPopup'

const isDesktop = window.screen.width > 768

const App = ({setContainerBackground}) => {
  const [currentPage, setCurrentPage] = useState(isDesktop ? 'games' : 'login')
  const [isAuth, setAuth] = useState(false)
  const [isLoginPopupShown, setLoginPopupShown] = useState(false)

  useEffect(() => {
    setContainerBackground(currentPage === 'login' ? 'linear-gradient(to bottom, #F2C34E, #ED944F)' : '#141415')
  }, [currentPage])

  const closeLoginPopup = () => {
    setLoginPopupShown(false)
  }
  const login = () => {
    setAuth(true)
    setLoginPopupShown(false)
  }

  return (
    <>
      {currentPage !== 'login' && isDesktop ? 
        <Header
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          isAuth={isAuth}
          setAuth={setAuth}
          setLoginPopupShown={setLoginPopupShown}
        /> : 
        null
      }
      {currentPage === 'login' ? <LoginPage setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 'games' ? <Games isAuth={isAuth} /> : null}
      {currentPage === 'leaderboard' ? <Leaderboard isAuth={isAuth} /> : null}
      {currentPage !== 'login' && !isDesktop ? <Footer setCurrentPage={setCurrentPage} /> : null}
      {isLoginPopupShown ? <LoginPopup closePopup={closeLoginPopup} login={login} /> : null}
    </>
  )
}

export default App

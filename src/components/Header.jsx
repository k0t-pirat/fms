import React from 'react'

const Header = ({setCurrentPage, currentPage, isAuth, setAuth, setLoginPopupShown}) => {
  const setGamesPage = (evt) => {
    evt.preventDefault()
    setCurrentPage('games')
  }
  const setLeaderboardPage = (evt) => {
    evt.preventDefault()
    setCurrentPage('leaderboard')
  }
  const setScoresPage = (evt) => {
    evt.preventDefault()
  }
  const setSignInPage = (evt) => {
    evt.preventDefault()
    setCurrentPage('login')
  }
  const logout = (evt) => {
    evt.preventDefault()
    setAuth(false)
  }
  const showLoginPopup = (evt) => {
    evt.preventDefault()
    setLoginPopupShown(true)
  }

  return (
    <header className="py-5 px-10 flex justify-between items-center border-b border-gray-600">
      <img src="./img/logo-small.png" />
      <div className="flex">
        <a className={`mr-6 ${currentPage === 'games' ? 'link-active' : ''}`} href="" onClick={setGamesPage}>Matches</a>
        <a className={`mr-6 ${currentPage === 'leaderboard' ? 'link-active' : ''}`} href="" onClick={setLeaderboardPage}>LeaderBoard</a>
        {isAuth ? 
          <a className={`mr-6 ${currentPage === 'none' ? 'link-active' : ''}`} href="" onClick={logout}>Sign Out</a> :
          <a className={`mr-6 ${currentPage === 'none' ? 'link-active' : ''}`} href="" onClick={showLoginPopup}>Sign In</a>
        }
      </div>
    </header>
  )
}

export default Header

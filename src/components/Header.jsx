import React from 'react'

const Header = ({setCurrentPage, currentPage, isAuth, setAuth, setLoginPopupShown, setGame, getGameData}) => {
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
  const logout = (getGameData, evt) => {
    evt.preventDefault()
    // setAuth(false)
    localStorage.removeItem('access')
    getGameData()

    // fetch('http://165.22.179.8/events/', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         // 'Authorization': 'Bearer ' + '',
    //       },
    //   })
    //   .then(
    //     response => response.json()
    //   )
    //   .then(data => {
    //       console.log('games data', data)
    //       setGame(data.results[1])
    //   })
    //   .catch(err => {
    //     console.log('err', err)
    //   })
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
        {localStorage.getItem('access') ? 
          <a className={`mr-6 ${currentPage === 'none' ? 'link-active' : ''}`} href="" onClick={(evt) => {logout(getGameData, evt)}}>Sign Out</a> :
          <a className={`mr-6 ${currentPage === 'none' ? 'link-active' : ''}`} href="" onClick={showLoginPopup}>Sign In</a>
        }
      </div>
    </header>
  )
}

export default Header

import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Games from './Games'
import Leaderboard from './Leaderboard'
import SignIn from './SignIn'

const App = ({setContainerBackground}) => {
  const [currentPage, setCurrentPage] = useState('signin')

  useEffect(() => {
    setContainerBackground(currentPage === 'signin' ? 'linear-gradient(to bottom, #F2C34E, #ED944F)' : '#141415')
  }, [currentPage])

  return (
    <>
      {currentPage === 'signin' ? <SignIn setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 'games' ? <Games /> : null}
      {currentPage === 'leaderboard' ? <Leaderboard /> : null}
      {currentPage !== 'signin' ? <Footer setCurrentPage={setCurrentPage} /> : null}
    </>
  )
}

export default App

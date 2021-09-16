import React, {useState} from 'react'
import { icons } from './icons'
import Header from './Header'
import Footer from './Footer'
import Matches from './Matches'
import Board from './Board'

const App = () => {
  const [currentPage, setCurrentPage] = useState('matches')

  return (
    <>
      {/* <Header /> */}
      {currentPage === 'matches' ? <Matches setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 'board' ? <Board setCurrentPage={setCurrentPage} /> : null}
      <Footer />
    </>
  )
}

export default App

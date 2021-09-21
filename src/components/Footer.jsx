import React from 'react'
import { icons } from './icons'

const Footer = ({setCurrentPage}) => {
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

  return (
    <footer className="mt-auto px-8 py-3 flex justify-between">
      <a href="" className="flex flex-col items-center" onClick={setGamesPage}>
        <div>
          {icons.globe}
        </div>
        <p className="opacity-60 font-10">Games</p>
      </a>
      <a href="" className="flex flex-col items-center" onClick={setLeaderboardPage}>
        <div>
          {icons.globe}
        </div>
        <p className="opacity-60 font-10">Leaderboard</p>
      </a>
      <a href="" className="flex flex-col items-center" onClick={setScoresPage}>
        <div>
          {icons.globe}
        </div>
        <p className="opacity-60 font-10">Scores</p>
      </a>
    </footer>
  )
}

export default Footer

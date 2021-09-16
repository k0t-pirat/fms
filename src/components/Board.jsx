import React from 'react'

const leaders = [
  {
    name: 'LeaderLeader',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 25,
    leaderPlace: 1,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 20,
    bestStreak: 20,
    leaderPlace: 2,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 18,
    leaderPlace: 3,
  },
  {
    name: 'Sholmes',
    nickname: '@HolmesJr',
    currentStreak: 13,
    bestStreak: 8,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 14,
  },
  {
    name: 'SelenStranger',
    nickname: '@HolmesJr',
    currentStreak: 15,
    bestStreak: 15,
  },
  {
    name: 'Mike',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 7,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 2,
    bestStreak: 9,
  },
  {
    name: 'You',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 7,
  },
]

const Board = ({setCurrentPage}) => {

  const setMatchesPage = (evt) => {
    evt.preventDefault()
    setCurrentPage('matches')
  }
  return (
    <main className="px-6">
      <h1 className="font-17 text-center">Leaderboard</h1>
      {/* <input type="radio" name="lists" value="current" />
      <input type="radio" name="lists" value="alltime" /> */}
      <section>
        <div className="flex justify-between font-9 mb-5 mt-5 px-3" style={{color: 'rgba(255,255,255,0.7)'}}>
          <div className="flex flex-start">
            <p className="minw-35">Place</p>
            <p>Player</p>
          </div>
          <div className="flex flex-end text-right">
            <p>All-time streak</p>
            <p className="minw-50">Best streak</p>
          </div>
        </div>
        <ul>
          {leaders.map((leader, index) => {
            const {name, nickname, currentStreak, bestStreak, leaderPlace} = leader

            return (
              <li key={index} className={"flex justify-between items-center py-2 px-3 mb-5" + (leaderPlace ? " background background--skew leader-" + leaderPlace : "")}>
                <div className="flex items-center">
                  <div className="minw-35">
                    <p className="leader-index text-center" style={{width: '15px'}}>
                      <span className="leader-index-text">{index + 1}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <div style={{width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white'}}>
                      <img src={`./img/avatars/avatar-${index}.png`} />
                    </div>
                    <div className="flex flex-col justify-around ml-2">
                      <a href="#" className="font-12" onClick={setMatchesPage}>{name}</a>
                      <p className="font-11">{nickname}</p>
                    </div>
                  </div>
                </div>
                <div className="flex text-right">
                  <p>{currentStreak}</p>
                  <p className="minw-50">{bestStreak}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Board

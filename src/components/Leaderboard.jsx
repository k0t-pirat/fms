import React, {useState} from 'react'

const isDesktop = window.screen.width > 768

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

const Leaderboard = () => {
  const [activeButton, setActiveButton] = useState('current')
  return (
    <main className="px-6 md:px-0 flex-grow flex flex-col">
      {!isDesktop ? <h1 className="mb-5 font-17 text-center">Leaderboard</h1> : null}
      {!isDesktop ? 
        <div className="mx-auto border border-white border-opacity-60 rounded-3xl toggle">
          <button
            className={"w-1/2 rounded-3xl capitalize font-3xl" + " " + (activeButton === 'current' ? "active" : "")}
            onClick={() => {setActiveButton('current')}}
          >
            Current
          </button>
          <button
            className={"w-1/2 rounded-3xl capitalize font-3xl" + " " + (activeButton === 'all-time' ? "active" : "")}
            onClick={() => {setActiveButton('all-time')}}
          >
            All-time
          </button>
        </div> :
        null
      }
      <section className="flex flex-col flex-grow">
        {!isDesktop ?
          <div className="flex justify-between font-9 mb-5 mt-5 px-3" style={{color: 'rgba(255,255,255,0.7)'}}>
            <div className="flex flex-start">
              <p className="minw-35">Place</p>
              <p>Player</p>
            </div>
            <div className="flex flex-end text-right">
              <p>All-time streak</p>
              <p className="minw-50">Best streak</p>
            </div>
          </div> :
          null
        }
        <div className="md:flex flex-grow">
          {(activeButton === 'current') || isDesktop ?
            <div className="leaderboard-white md:w-1/2">
              {isDesktop ? <h3 className="my-12 text-5xl md:mx-auto md:w-1/3">Current</h3> : null}
              <ul className="md:mx-auto md:w-1/3">
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
                            <p>{name}</p>
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
            </div> :
            null
          }
          {(activeButton === 'active') || isDesktop ?
            <div className="leaderboard-violet md:w-1/2">
              {isDesktop ? <h3 className="my-12 text-5xl md:mx-auto md:w-1/3">All time</h3> : null}
              <ul className="md:mx-auto md:w-1/3">
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
                            <p>{name}</p>
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
            </div> :
            null
          }
        </div>
      </section>
    </main>
  )
}

export default Leaderboard

import React, {useState} from "react"
import Popup from './Popup'
import { icons } from './icons'

const comments = [
  {
    author: 'Jorge Watson',
    text: 'Choosed Cincinnati Reds',
    time: '2 hours ago',
  },
  {
    author: 'Jorge Watson',
    text: 'WOW!WOW!WOW!',
    time: '2 hours ago',
  },
  {
    author: 'Jorge Watson',
    text: 'I love this game so mutch!',
    time: '2 hours ago',
  },
]

const teams = [
  {
    name: 'Washington',
    image: './img/team1.png',
    value: '35-85',
    backgroundClass: 'background--darkred',
  },
  {
    name: 'Braves',
    image: './img/team2.png',
    value: '35-85',
    backgroundClass: 'background--darkblue',
  },
]

const Games = () => {
  const [isPopupActive, setPopupActive] = useState(true)
  const [checkedTeamIndex, setCheckedTeamIndex] = useState(-1)

  const closePopup = () => {
    setPopupActive(false)
  }
  
  return (
    <>
      <main className="px-6">
        <section className="mb-6">
          <h2 className="text-xl text-center mb-9">Matches screen</h2>
          <div className="flex justify-between gap-x-8">
            <div className="flex w-1/2 background background--skew background--yellow">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                <img src="./img/avatar.png" />
              </div>
              <div className="pl-3 py-3 flex-grow">
                <p className="font-12">My streak</p>
                <p className="text-2xl font-bold">W-7</p>
              </div>
            </div>
            <div className="flex w-1/2 background background--skew background--blue">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                <img src="./img/avatar.png" />
              </div>
              <div className="pl-3 py-3 flex-grow">
                <p className="font-12">Current leader</p>
                <p className="text-2xl font-bold">W-8</p>
              </div>
            </div>
          </div>
          <div className="gradient-border mt-6"></div>
        </section>
        <section>
          <h2 className="mb-5 text-center text-5xl font-bold">6/25</h2>
          <div className="flex justify-between gap-x-2">
            {teams.map((team, index) => (
              <div
                key={team.name}
                className={"relative w-1/2 px-2 py-6 flex flex-col justify-around items-center cursor-pointer background" + " " + team.backgroundClass}
                style={{height: '230px'}}
                onClick={() => {setCheckedTeamIndex(index)}}
              >
                <div className="temp" style={{width: '143px', height: '74px'}}>
                  <img src={team.image} />
                </div>
                <p className="text-center text-2xl font-bold">{team.value}</p>
                <div className="absolute bottom-0 right-0 mb-3 mr-3">
                  {checkedTeamIndex === index ? icons.check: null}
                </div>
            </div>
            ))}
          </div>
          <div className="my-4 opacity-80 text-center">
            <p className="mb-2">Long press on card to confirm or edit ↑</p>
            <p>Locks at 4:10</p>
          </div>
          <div className="gradient-border"></div>
        </section>
        <div className="gradient-border mt-6"></div>
        <div className="mb-6">
          <img className="w-full" src="./img/video.png" />
          <div className="flex flex-row justify-between">
            <p className="flex items-center">{icons.eye}<span className="ml-2" style={{color: 'EBEBF5', opacity: '0.6'}}>8563</span></p>
            <p className="flex items-center"><span className="mr-2" style={{color: 'EBEBF5', opacity: '0.6'}}>342</span>{icons.bubble}</p>
          </div>
          {/* <video /> */}
        </div>
        <section>
          <h2 className="mb-5 text-xl font-bold">Comments</h2>
          <ul>
            {
              comments.map((comment, index) => (
                <li key={index} className="mb-3 flex">
                  <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                <img src="./img/avatar.png" />
                  </div>
                  <div className="pl-3 pb-3 flex-grow">
                    <div className="py-1">
                      <h3>{comment.author}</h3>
                      <p className="font-normal opacity-60" style={{color: '#EBEBF5'}}>{comment.time}</p>
                    </div>
                    <div className="flex">
                      <div style={{width: "24px", height: '24px', borderRadius: '50%', backgroundColor: 'white'}}>
                        <img src="./img/avatar.png" />
                      </div>
                      <p className="pl-3 font-lg font-normal">{comment.text}</p>
                    </div>
                    <div className="gradient-border mt-3"></div>
                  </div>
                </li>
              ))
            }
          </ul>
          <div className="flex justify-between items-center gap-x-5">
            <input className="comment flex-grow" type="text" placeholder="Write a comment" />
            <button type="submit" className="comment-submit">{icons.submit}</button>
          </div>
        </section>
      </main>
      {isPopupActive ? <Popup closePopup={closePopup} /> : null}
    </>
  )
}

export default Games

import React, {useEffect, useState} from "react"
import Cookies from 'js-cookie'
import Popup from './Popup'
import { icons } from './icons'
import {formatDate} from './util'

const isDesktop = window.screen.width > 768

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

const Games = ({doLogin, game}) => {
  const [isPopupActive, setPopupActive] = useState(false)
  const [checkedTeamIndex, setCheckedTeamIndex] = useState(-1)
  const [activeConditionId, setActiveConditionId] = useState(-1)

  const closePopup = () => {
    setPopupActive(false)
  }

  const pickCondition = (eventId, conditionId) => {
    // console.log(123)
    localStorage.getItem('access') ?
      fetch('http://165.22.179.8/events/' + eventId + '/pick/', {
            method: 'POST',
            body: JSON.stringify({condition: conditionId}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('access'),
            },
        }).then(
            response => response.json().then(data => {
              console.log('pick response', data)
              if (data.detail === 'already picked') {
                return
              }
              setActiveConditionId(conditionId)
              // {response: response, body: data}
          }).catch(err => {
            console.log('eventId err', err)
          })
        ) :
        doLogin()
  }

  if (!game) {
    return <p>Загрузка данных...</p>
  }
  
  return (
    <>
      <main className="pb-5 px-6 md:px-0 flex flex-col md:flex-row md:gap-x-5">
        <div className="md:flex-grow md:pr-60 md:pl-20">
          {/* {!isDesktop ? (
            <section className="mb-6">
              <h2 className="text-xl text-center mb-9">Matches screen</h2>
              <div className="flex justify-around gap-x-8">
                <div className="flex background background--skew background--yellow" style={{width: '166px'}}>
                  <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                    <img src="./img/avatar.png" />
                  </div>
                  <div className="pl-3 py-3 flex-grow">
                    <p className="font-12">My streak</p>
                    <p className="text-2xl font-bold">W-7</p>
                  </div>
                </div>
                <div className="flex background background--skew background--blue" style={{width: '166px'}}>
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
            </section>) : 
            null
          } */}
          {/* {isDesktop ? (
            <section className="flex py-3 border-b border-gray-600">
              <div className="flex items-center mr-20">
                <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                  <img src="./img/avatar.png" />
                </div>
                <div className="pl-3 py-3 flex-grow">
                  <p className="font-12">My streak</p>
                  <p className="text-2xl font-bold">W-7</p>
                </div>
              </div>
              <div className="flex items-center">
                <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                  <img src="./img/avatar.png" />
                </div>
                <div className="pl-3 py-3 flex-grow">
                  <p className="font-12">Current leader</p>
                  <p className="text-2xl font-bold">W-8</p>
                </div>
              </div>
            </section>) :
            null
          } */}
          <section>
            {!isDesktop ? <h2 className="mb-5 text-center text-5xl font-bold">{game.name}</h2> : null}
            {isDesktop ? <h2 className="my-8 text-left text-5xl font-bold">{game.name}</h2> : null}
            {isDesktop ? <p className="mb-3 text-left">{game.description}</p> : <p className="mb-3 text-center">{game.description}</p>}
            <div className={"flex justify-around" + (isDesktop ? " gap-x-10" : " gap-x-2")}>
              {
                game.conditions.map((condition, index) => (
                  isDesktop ? 
                  <div key={index} className="flex flex-col w-1/2">
                    <div
                      key={condition.competitor.id}
                      className={"relative px-2 py-6 flex flex-col justify-around items-center background" + " " + 
                        (index === 0 ? 'background--darkred' : 'background--darkblue')}
                      style={{height: '230px'}}
                    >
                        <div className="temp" style={{width: '143px', height: '74px'}}>
                          <img src={condition.competitor.image} />
                        </div>
                        <p className="text-center text-2xl font-bold">{condition.competitor.name}</p>
                        <div className="absolute bottom-0 right-0 mb-3 mr-3">
                          {condition.satisfied ? icons.check: null}
                        </div>
                    </div>
                    <button
                      className="mt-10 py-5 rounded pick-button"
                      onClick={() => {pickCondition(condition.id, condition.competitor.id)}}
                      disabled={(activeConditionId === condition.id) || (game.picked !== null)}
                    >
                      {(activeConditionId === condition.id) || (game.picked === condition.id) ? 'Picked': 'Pick'}
                    </button>
                  </div> :
                  <div
                    key={condition.competitor.name}
                    className={"relative px-2 py-6 flex flex-col justify-around items-center cursor-pointer background" + " " + 
                      (index === 0 ? 'background--darkred' : 'background--darkblue')}
                    style={{height: '230px', width: '166px'}}
                    onClick={() => {pickCondition(condition.id, condition.competitor.id)}}
                  >
                    <div className="temp" style={{width: '143px', height: '74px'}}>
                      <img src={condition.competitor.image} />
                    </div>
                    <p className="text-center text-2xl font-bold">{condition.competitor.name}</p>
                    <div className="absolute bottom-0 right-0 mb-3 mr-3">
                      {(activeConditionId === condition.id) || (game.picked === condition.id) ? icons.check : null}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className={"my-4 opacity-80" + (isDesktop ? " text-left" : " text-center")}>
              {!isDesktop ? <p className="mb-2">Long press on card to confirm or edit ↑</p> : null}
              <p>Locks at <span className="ml-3">{formatDate(game.end_date)}</span></p>
            </div>
            <div className="gradient-border"></div>
          </section>
          <div className="gradient-border mt-6"></div>
          <div className="mb-6">
            <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/N0QblwXyXvo" frameBorder="0" />
            </div>
            <div className="flex flex-row justify-between">
              <p className="flex items-center">{icons.eye}<span className="ml-2" style={{color: 'EBEBF5', opacity: '0.6'}}>8563</span></p>
              <p className="flex items-center"><span className="mr-2" style={{color: 'EBEBF5', opacity: '0.6'}}>342</span>{icons.bubble}</p>
            </div>
          </div>
        </div>
        <section className="md:w-1/3 md:p-10 comments">
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

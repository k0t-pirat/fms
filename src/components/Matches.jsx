import React from "react"
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
const Matches = ({setCurrentPage}) => {

  const setBoardPage = (evt) => {
    evt.preventDefault()
    setCurrentPage('board')
  }
  
  return (
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
              <a href="#" onClick={setBoardPage} className="text-2xl font-bold">W-7</a>
            </div>
          </div>
          <div className="flex w-1/2 background background--skew background--blue">
            <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
              <img src="./img/avatar.png" />
            </div>
            <div className="pl-3 py-3 flex-grow">
              <p className="font-12">Current leader</p>
              <a href="#" onClick={setBoardPage} className="text-2xl font-bold">W-8</a>
            </div>
          </div>
        </div>
        <div className="gradient-border mt-6"></div>
      </section>
      <section>
        <h2 className="mb-5 text-center text-5xl font-bold">6/25</h2>
        <div className="flex justify-between gap-x-2">
          <div className="w-1/2 px-2 py-6 flex flex-col justify-around items-center background background--darkred" style={{height: '230px'}}>
            <div className="temp" style={{width: '143px', height: '74px'}}>
              <img src="./img/team1.png" />
            </div>
            <p className="text-center text-2xl font-bold">35-85</p>
          </div>
          <div className="w-1/2 px-2 py-6 flex flex-col justify-around items-center background background--darkblue" style={{height: '230px'}}>
            <div className="temp" style={{width: '143px', height: '74px'}}>
              <img src="./img/team2.png" />
            </div>
            <p className="text-center text-2xl font-bold">35-85</p>
          </div>
        </div>
        <div className="my-4 opacity-80 text-center">
          <p className="mb-2">Long press on card to confirm or edit ↑</p>
          <p>Locks at 4:10</p>
        </div>
        <div className="gradient-border"></div>
      </section>
      <div>
        <video />
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
  )
}

export default Matches

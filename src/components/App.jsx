import React from 'react'

const App = () => {
  return (
    <>
      <header className="flex justify-between px-2 mb-2">
        <p>Carrier</p>
        <p>4:20 PM</p>
        <p>100%</p>
      </header>
      <main className="px-6">
        <section className="mb-6">
          <h2 className="text-xl text-center mb-9">Matches screen</h2>
          <div className="flex justify-between gap-x-8">
            <div className="flex w-1/2 background background--skew background--yellow">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                {/* <img width="40" height="40" /> */}
              </div>
              <div className="pl-3 py-3 flex-grow">
                <p>My streak</p>
                <p className="text-2xl font-bold">W-7</p>
              </div>
            </div>
            <div className="flex w-1/2 background background--skew background--blue">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                {/* <img width="40" height="40" /> */}
              </div>
              <div className="pl-3 py-3 flex-grow">
                <p>Current leader</p>
                <p className="text-2xl font-bold">W-8</p>
              </div>
            </div>
          </div>
          <div className="gradient-border mt-6"></div>
        </section>
        <section>
          <h2 className="mb-5 text-center text-5xl font-bold">6/25</h2>
          <div className="flex justify-between gap-x-2">
            <div className="w-1/2 px-2 py-6 flex flex-col justify-around background background--darkred">
              <div className="temp" style={{width: '143px', height: '74px'}}>
                <img src="" />
              </div>
              <p className="text-center text-2xl font-bold">35-85</p>
            </div>
            <div className="w-1/2 px-2 py-6 flex flex-col justify-around background background--darkblue">
              <div className="temp" style={{width: '143px', height: '74px'}}>
                <img src="" />
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
            <li className="mb-3 flex">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                {/* <img width="40" height="40" /> */}
              </div>
              <div className="pl-3 pb-3 flex-grow">
                <div className="py-1">
                  <h3>Jorge Watson</h3>
                  <p className="font-normal opacity-60" style={{color: '#EBEBF5'}}>2 hours ago</p>
                </div>
                <div className="flex">
                  <div style={{width: "24px", height: '24px', borderRadius: '50%', backgroundColor: 'white'}}>
                    {/* <img width="40" height="40" /> */}
                  </div>
                  <p className="pl-3 font-lg font-normal">Choosed Cincinnati Reds</p>
                </div>
                <div className="gradient-border mt-3"></div>
              </div>
            </li>
            <li className="mb-3 flex">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                {/* <img width="40" height="40" /> */}
              </div>
              <div className="pl-3 pb-3 flex-grow">
                <div className="py-1">
                  <h3>Jorge Watson</h3>
                  <p className="font-normal opacity-60" style={{color: '#EBEBF5'}}>2 hours ago</p>
                </div>
                <div className="flex">
                  <div style={{width: "24px", height: '24px', borderRadius: '50%', backgroundColor: 'white'}}>
                    {/* <img width="40" height="40" /> */}
                  </div>
                  <p className="pl-3 font-lg font-normal">WOW!WOW!WOW!</p>
                </div>
                <div className="gradient-border mt-3"></div>
              </div>
            </li>
            <li className="mb-3 flex">
              <div style={{width: "40px", height: '40px', borderRadius: '50%', backgroundColor: 'white'}}>
                {/* <img width="40" height="40" /> */}
              </div>
              <div className="pl-3 pb-3 flex-grow">
                <div className="py-1">
                  <h3>Jorge Watson</h3>
                  <p className="font-normal opacity-60" style={{color: '#EBEBF5'}}>2 hours ago</p>
                </div>
                <div className="flex">
                  <div style={{width: "24px", height: '24px', borderRadius: '50%', backgroundColor: 'white'}}>
                    {/* <img width="40" height="40" /> */}
                  </div>
                  <p className="pl-3 font-lg font-normal">I love this game so mutch!</p>
                </div>
                <div className="gradient-border mt-3"></div>
              </div>
            </li>
          </ul>
          <div className="flex">
            <input className="comment" style={{}} type="text" placeholder="Write a comment" />
            <button type="submit">submit comment</button>
          </div>
        </section>
      </main>
      <footer className="px-8 py-3 flex justify-around">
        <p className="opacity-60 font-sm">Scores</p>
        <p className="opacity-60 font-sm">Scores</p>
        <p className="opacity-60 font-sm">Scores</p>
      </footer>
      <div>
        <button>Close Popup</button>
        <div>
          <p>Your pick was correct!</p>
          <p>Braves won!</p>
        </div>
      </div>
    </>
  )
}

export default App

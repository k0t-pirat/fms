import React from 'react'
import { icons } from './icons'

const Footer = () => {
  return (
    <footer className="px-8 py-3 flex justify-between">
      <div>
        <div className="mx-auto">
          {icons.globe}
        </div>
        <p className="opacity-60 font-10">Scores</p>
      </div>
      <div>
        <div className="mx-auto">
          {icons.globe}
        </div>
        <p className="opacity-60 font-10">Scores</p>
      </div>
      <div>
        <div className="mx-auto">
          {icons.globe}
        </div>
        <p className="opacity-60 font-10">Scores</p>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import {icons} from './icons'

const Header = () => {
  return (
    <div>
      <header className="flex justify-between px-2 mb-2">
        <div className="flex items-center gap-x-2">
          {icons.signal}
          <p>Carrier</p>
          {icons.wifi}
        </div>
        <p>4:20 PM</p>
        <div className="flex items-center gap-x-2">
          {icons.bluetooth}
          <p>100%</p>
          {icons.charge}
        </div>
      </header>
    </div>
  )
}

export default Header
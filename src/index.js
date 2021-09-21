import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../css/index.css'

const container = document.querySelector('#react_root')

const setContainerBackground = (background) => {
  container.style.background = background
}

const Index = () => {
  return <App setContainerBackground={setContainerBackground} />
}

ReactDOM.render(<Index />, container);
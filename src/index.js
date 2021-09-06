import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../css/index.css'

const Index = () => {
  return <App />
}

const container = document.querySelector('#react_root')

ReactDOM.render(<Index />, container);
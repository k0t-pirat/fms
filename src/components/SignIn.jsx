import React from 'react'

const SignIn = () => {
  return (
    <main className="flex flex-col justify-end" style={{backgroundImage: 'url(./img/rhyno.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right',}}>
      <img src="./img/logo.png" />
      <button>Sign up with Apple</button>
      <button>Sign up with Facebook</button>
    </main>
  )
}

export default SignIn

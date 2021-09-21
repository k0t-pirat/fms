import React from 'react'

const SignIn = ({setCurrentPage}) => {
  const setGamesPage = () => {
    setCurrentPage('games')
  }
  return (
    <main className="signin pb-10 flex flex-col justify-end">
      <img className="mx-auto" src="./img/logo.png" />
      <button
        className="mb-2 mx-auto w-2/3 flex items-center justify-center py-2 bg-white text-black rounded-lg"
        onClick={setGamesPage}
      >
        <img className="mr-3" src="./img/apple.svg" />
        Sign up with Apple
      </button>
      <button
        className="mb-2 mx-auto w-2/3 flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg"
        onClick={setGamesPage}
      >
        <img className="mr-3" src="./img/facebook.svg" />
        Sign up with Facebook
      </button>
    </main>
  )
}

export default SignIn

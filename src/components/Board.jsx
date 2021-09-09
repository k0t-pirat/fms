import React from 'react'

const leaders = [
  {
    name: 'LeaderLeader',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 25,
    leaderPlace: 1,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 20,
    bestStreak: 20,
    leaderPlace: 2,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 18,
    leaderPlace: 3,
  },
  {
    name: 'Sholmes',
    nickname: '@HolmesJr',
    currentStreak: 13,
    bestStreak: 8,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 14,
  },
  {
    name: 'SelenStranger',
    nickname: '@HolmesJr',
    currentStreak: 15,
    bestStreak: 15,
  },
  {
    name: 'Mike',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 7,
  },
  {
    name: 'Christopher McGee',
    nickname: '@HolmesJr',
    currentStreak: 2,
    bestStreak: 9,
  },
  {
    name: 'You',
    nickname: '@HolmesJr',
    currentStreak: 5,
    bestStreak: 7,
  },
]

const Board = () => {
  return (
    <main>
      <h1>Leaderboard</h1>
      <input type="radio" name="lists" value="current" />
      <input type="radio" name="lists" value="alltime" />
      <section>
        <ul>
          {leaders.map(leader => (
            <li>
              <p>{leader}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Board

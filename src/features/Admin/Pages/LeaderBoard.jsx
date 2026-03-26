import React from 'react'
import useAdmin from '../hooks/useAdmin'
import "../styles/leaderboard.style.scss"

function LeaderBoard() {
  const { leaderboard, isLoading } = useAdmin()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      <p className='subtitle'>Top performers based on points</p>

      <div className='leaderboard-list'>
        {leaderboard.map((user, index) => (
          <div className={`leaderboard-item rank-${user.rank}`} key={user._id}>
            
            {/* Rank */}
            <div className='rank'>
              #{user.rank}
            </div>

            {/* Avatar */}
            <div className='avatar'>
              {user.name.charAt(0).toUpperCase()}
            </div>

            {/* Info */}
            <div className='info'>
              <p className='name'>{user.name}</p>
              <p className='points'>{user.points} pts</p>
            </div>

            {/* Medal for top 3 */}
            {index === 0 && <span style={{fontSize: "2rem"}} className='medal gold'>🥇</span>}
            {index === 1 && <span style={{fontSize: "2rem"}} className='medal silver'>🥈</span>}
            {index === 2 && <span style={{fontSize: "2rem"}} className='medal bronze'>🥉</span>}

          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaderBoard
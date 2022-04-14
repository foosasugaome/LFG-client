import { Link } from 'react-router-dom'
import Games from '../pages/Games/Games'
export default function Navibar ({ games, setGames, currentGame, setCurrentGame,currentUser, setCurrentUser}) {
  const handleLogout = () => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
    setCurrentUser(null)    
  }

  return (
    <>
      <div className='navbar-logo' >
        <h1>LFG</h1>
      </div>
      <div className='navbar-main' >        
        <Games games={games} setGames={setGames}  currentGame={currentGame} setCurrentGame={setCurrentGame}/>
      </div>

      <div className='navbar-footer'>      
      {currentUser ? 
      <>
        <p><Link to='/logout' onClick={handleLogout}>Logout</Link></p>        
      </>
      :
      <>
        <p><Link to='/login'>Login</Link></p>
        <p><Link to='/signup'>Sign Up</Link></p>
      </>
      } 
      <p><Link to='/about'>About</Link></p>     
      <p><Link to='/'>Help</Link></p>
      </div>
    </>
  )
}

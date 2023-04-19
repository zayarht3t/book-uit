


import React, { useContext } from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faBookOpen, faHouse, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const Navbar = () => {
const {user,dispatch} = useContext(AuthContext);
return (
  <div className='w-full top-0 sticky bg-sky-600 text-white p-3 flex justify-between items-center shadow-md z-30'>
      <Link to='/'>
      <div className="logo font-bold text-2xl">
          BookShelf
      </div>
      </Link>
      <ul className='hidden md:flex font-900 text-500 '>
        <Link to={'/'}>
          <li className='mx-5 flex items-center gap-1 cursor-pointer hover:text-sky-200'>
            <FontAwesomeIcon icon={faHouse}/>
            HOME
            </li>
        </Link>
          
          <Link to={'/latest'}>
           <li className='mx-5 flex items-center gap-1 cursor-pointer hover:text-sky-200'>
            <FontAwesomeIcon icon={faBookOpen}/>
            Latest
          </li>
          </Link>
          <Link to={'/popular'}>
            <li className='mx-5 flex items-center gap-1 cursor-pointer hover:text-sky-200'>
              <FontAwesomeIcon icon={faArrowTrendUp}/>
              Popular
            </li>
          </Link>
          {
            user &&
            <Link to={'/favourite'}>
              <li className='mx-5 flex items-center gap-1 cursor-pointer hover:text-sky-200'>
                <FontAwesomeIcon icon={faUser}/>
                Your favourites
              </li>
            </Link>
              
          }
          <Link to={'/search'}>
          <li className='mx-5 flex items-center gap-1 cursor-pointer hover:text-sky-200'>
            <FontAwesomeIcon icon={faSearch}/>
            Search Books
          </li>
          </Link>
          
      </ul>
      {
        !user &&
          <Link to={'/signup'} >
          <div className="register hidden md:flex px-2 py-1 bg-blue-500 rounded-md hover:bg-blue-800 text-white">
            <button>Register</button>
          </div>
        </Link>
      }
      {
        user && 
        <Link to={'/register'}>
        <div className="register hidden md:flex gap-2">
          <p>{user.username}</p>
          <button className=' bg-blue-700 p-1 text-sm font-bold rounded-md hover:bg-blue-800 text-white' onClick={()=>dispatch({type: "LOGOUT"})}>LOGOUT</button>
        </div>
      </Link>
      }
      
      <div>
        {
          user ?
          <Link to={'/register'}>
        <div className="register  md:hidden gap-2">
          <p>{user.username}</p>
        </div>
      </Link>:
        <Link to={'/signup'} >
        <div className="register md:hidden px-2 py-1 bg-blue-500 rounded-md hover:bg-blue-800 text-white">
          <button>Register</button>
        </div>
      </Link>

        }
      </div>
      
      {/* <div className="hamburgerMenu md:hidden flex flex-col p-1 border-2 border-inherit rounded ">
        <div className='w-6 h-0.5 bg-white my-0.5'></div>
        <div className='w-6 h-0.5 bg-white my-0.5'></div>
        <div className='w-6 h-0.5 bg-white my-0.5'></div>
      </div> */}
  </div>
)
}

export default Navbar
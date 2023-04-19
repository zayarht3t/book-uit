import React, { useContext } from 'react'
import './Alert.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';


const Alert = ({setPopup}) => {
  const {user} = useContext(AuthContext);
  return (
    <div className='w-full'>
         <div
  class="bg-green-50 border border-green-400 rounded text-green-800 text-sm p-2 flex items-start my-2 w-5/6 mx-auto "
>
  <div >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={()=>setPopup(false)}
      
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
  <div class="w-full">
    <p className='font-bold'>
      UIT BookShelf is collection of over 20000 books with various categories  by online. The main purpose is to encourage readers and find books easily with many categories.
    </p>
    {

    }
    {
      !user &&
      <Link to={'/register'}>
      <button className='bg-blue-500 mt-2 text-white p-1 rounded font-bold'>Register/Login</button>
    </Link>
    }
    
    
  </div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={()=>setPopup(false)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
</div>
    </div>
   

  )
}

export default Alert
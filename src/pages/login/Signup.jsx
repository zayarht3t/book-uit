import React, { useContext, useState } from 'react'
import './Signup.css'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const [password,setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);
    const body = {
        email,
        password
    }
    
    const handleClick =async () => {
        dispatch({type: "LOGIN_START"});
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login',body,{headers: {'Content-Type': 'application/json'},withCredentials: true});
            console.log(response.data);
            dispatch({type: "LOGIN_SUCCESS", payload: response.data});
            navigate('/');

        } catch (error) {
            dispatch({type: "LOGIN_FAILURE"});
            setError("Username or password incorrect")
        }
    }
  
  return (
    <div className="min-h-screen bg-sky-300 flex flex-col justify-center border-2 border-blue-500 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <p className="mt-2 text-center text-xl font-bold leading-5 text-black max-w">
           login to your account
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full flex justify-center items-center sm:max-w-md">
        <div className="bg-white w-3/4 py-8 px-4 shadow sm:rounded-lg sm:px-10">

                <div className="mt-6">
                    <label for="email" className="block text-sm font-medium leading-5  text-gray-700">
            Email address
          </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="user@example.com" type="email" required="" value={email} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                "/>
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                Password
            </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" onChange={(e)=>setPassword(e.target.value)} name="password" type="password" required="" value={password} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                    {error && <p className='text-sm text-red-500 my-1'>{error}</p>}
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button type="submit" onClick={handleClick} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
               LOGIN
            </button>
          </span>
                </div>

        </div>
    </div>
</div>
  )
}

export default Signup
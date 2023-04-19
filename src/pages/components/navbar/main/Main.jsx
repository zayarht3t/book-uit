import React, { useEffect, useState } from 'react'
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import Item from '../item/Item';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [books,setBooks] = useState([]);
    const [counts,setCounts] = useState([]);
useEffect(()=>{
    const fetch = async()=>{
       
        try {
             const response = await axios.get('https://book-shelf-server-red.vercel.app/api/books');
             const count = await axios.get('https://book-shelf-server-red.vercel.app/api/books/count');
             setCounts(count.data);
             setBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    fetch();
},[])
  return (
    <div className='w-full mt-7'>
        <div className="container w-5/6 mx-auto bg-white  rounded-md px-5 py-8">
            <div className="upper">
                <div className="upload w-full flex justify-between ">
                    <p className='text-xl font-bold'>Recent Uploaded Books</p>
                    <Link to={'/popular'}>
                        <button className='px-3 py-1 font-bold bg-sky-500 text-white text-center rounded'>View All</button>
                    </Link>
                    
                </div>
                <div className="booksContainer w-full bg-gray-100 my-4 flex gap-3 overflow-x-auto ">
                    {
                        books.map(book=>(
                                <Item key={book._id} book={book}/>
                        ))
                    }
                    
                </div>
            </div>
            <div className="lower flex justify-between w-full flex-wrap mt-5">
                <div className="left p-2">
                    <div className="upper gap-5 md:flex mb-4">
                        <Link to={'/latest'}>
                            <div className='bg-blue-800 px-32 py-8 cursor-pointer text-white flex flex-col text-center rounded-md mb-4'>
                                <FontAwesomeIcon icon={faBookOpen} className='w-12 h-6 mb-2'/>
                                <p className='font-bold text-xl'>Latest</p>
                            </div>
                        </Link>
                        <Link to={'/popular'}>
                            <div className='bg-green-800 px-32 py-8 cursor-pointer text-white flex flex-col text-center rounded-md mb-4'>
                                <FontAwesomeIcon icon={faArrowTrendUp} className='w-12 h-6 mb-2'/>
                                <p className='font-bold text-xl'>Popular</p>
                            </div>
                        </Link> 
                    </div>
                    <div className="lower gap-5 md:flex">
                        <Link>
                        <div className='bg-red-600 px-32 py-8 cursor-pointer  text-white flex flex-col text-center rounded-md mb-4'>
                            <FontAwesomeIcon icon={faSearch} className='w-12 h-6 mb-2'/>
                            <p className='font-bold text-lg'>Author</p>
                        </div>
                        </Link>

                        <Link to={'/search'}>
                        <div className='bg-yellow-600 px-32 py-8 cursor-pointer text-white flex flex-col text-center rounded-md mb-4'>
                            <FontAwesomeIcon icon={faSearch} className='w-12 h-6 mb-2'/>
                            <p className='font-bold text-xl'>Search.</p>
                        </div>
                        </Link>
                        
                    </div>
                </div>
                <div className="right w-80 mx-auto">
                    <div className="search p-2">
                        <div className='bg-blue-500 text-left h-10 px-1 rounded items-center flex mb-2'>
                            <p className='text-white text-lg '>Book Category</p>
                        </div>
                        <div className="category">
                            <div className="technology w-full flex justify-between">
                                <div className='w-full flex justify-between'>
                                    <div className="container w-full  flex-wrap ">
                                    <div className='w-full flex justify-between gap-7 px-2 text-center mb-2'>
                                        <p className='text-md'>Technology</p>
                                        <p className='text-sm text-white  w-4 rounded-md bg-gray-400'>{counts[0]}</p>
                                    </div>
                                    <div className='w-full flex justify-between gap-7 px-2 text-center mb-2'>
                                        <p className='text-md'>Politic</p>
                                        <p className='text-sm text-white  w-4 rounded-md bg-gray-400'>{counts[1]}</p>
                                    </div>
                                    <div className='w-full flex justify-between gap-7 px-2 text-center mb-2'>
                                        <p className='text-md'>story</p>
                                        <p className='text-sm text-white  w-4 rounded-md bg-gray-400'>{counts[2]}</p>
                                    </div>
                                    <div className='w-full flex justify-between gap-7 px-2 text-center mb-2'>
                                        <p className='text-md'>Poem</p>
                                        <p className='text-sm text-white  w-4 rounded-md bg-gray-400'>{counts[3]}</p>
                                    </div>
                            </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
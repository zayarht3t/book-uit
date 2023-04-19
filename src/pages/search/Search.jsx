import React, { useEffect, useState } from 'react'
import './Search.css';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/navbar/footer/Footer'
import Card from '../components/navbar/card/Card'
import axios from 'axios';


const Search = () => {

    const [count,setCount] = useState(0);
    const [books,setBooks] = useState([]);
    const [sort,setSort] = useState("");
    const [text,setText] = useState("");
    
    let loop;

    useEffect(()=>{
       const fetchData = async ()=>{
        try {
            const response = await axios.get('http://localhost:8000/api/books/popular?page=1')
            setCount(response.data.count);
            setBooks(response.data.books);

            loop = Math.ceil(count/6);
        } catch (error) {
            console.error(error);
        }
        
       } 

       fetchData()
    },[])

    const handleClick =async (num)=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/books/popular?page=${num}`)
            setCount(response.data.count);
            setBooks(response.data.books);

            loop = Math.ceil(count/6);
        } catch (error) {
            console.error(error);
        }
    }

    const searchClick =async ()=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/books/name?name=${text}`);
            console.log(response.data)
            setCount(response.data.count);
            setBooks(response.data);
        } catch (error) {
            
        }
    }
  return (
    <div className='bg-sky-300 max-h-full'>
            <Navbar/>
            <div className="detail w-full bg-sky-300 h-full z-10">
                <div className="container w-full mx-auto  rounded-md px-5 py-8 h-5/6">
                    <div className="detailContainer w-5/6 mx-auto bg-white  rounded-md px-5 py-6 h-5/6 mt-5">
                        <div className="detail">
                        <div className="recommand w-full">
                            <div className='w-full gap-3 flex items-center mx-auto text-center justify-between'>
                                <div className=''>
                                    <label for="cars" className='text-md font-bold mr-2'>Category: </label>
                                    <select data-te-select-init className='md:p-1 md:w-32 rounded text-sm outline-none border-[1px] border-gray-400'>
                                        <option value="1">Technology</option>
                                        <option value="2">Story</option>
                                        <option value="3">Philosophy</option>
                                        <option value="4">Poem</option>
                                    </select>

                                </div>
                                 
                                    <select data-te-select-init   className='rounded text-sm md:p-1 md:w-36  outline-none border-[1px]  border-gray-400'>
                                        <option value="1" >Sort by book title</option>
                                        <option value="2">Sort by date</option>
                                        
                                    </select>
                            </div>

                            <div className="searchText w-full gap-3 mt-4">
                                <label htmlFor="search" className='mr-7 text-sm font-bold'>Search: </label>
                                <input type="text" onChange={(e)=>setText(e.target.value)} value={text} className='w-2/4 mx-2 rounded border-[1px] border-gray-400 outline-none p-1' placeholder='enter your book name' id='search' />
                                <button className='bg-blue-400 px-2 py-1 text-white rounded ' onClick={searchClick}>Search</button>
                            </div>

                            <div className="cards md:flex mt-10 p-1 rounded border-[1px] border-gray-300  flex-wrap  justify-between">
                                {

                                   books&& books.map(book=>{
                                        return <Card key={book._id} book={book}/>
                                    })

                                }
                                    
                                
                            </div>
                            <div className="pagination w-full flex justify-center gap-2 items-center">
                               <button className='py-1 px-2 w-20 rounded bg-blue-400 text-white items-center text-center font-bold' onClick={()=>handleClick(1)}>previous</button>
                               <button className='py-1 px-2 w-10 rounded bg-blue-400 text-white items-center text-center font-bold'>1</button>
                               <button className='py-1 px-2 w-20 rounded bg-blue-400 text-white items-center text-center font-bold' onClick={()=>handleClick(2)}>next</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Search
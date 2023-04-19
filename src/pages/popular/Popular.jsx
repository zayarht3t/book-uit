import React, { useEffect, useState } from 'react'
import './Popular.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/navbar/footer/Footer'
import Card from '../components/navbar/card/Card'
import axios from 'axios'




const Popular = () => {
    const [popup,setPopup] = useState(true);
    const [count,setCount] = useState(0);
    const [books,setBooks] = useState([]);
    
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
    return (
        <div className='bg-sky-300'>
            <Navbar/>
            <div className="detail w-full bg-sky-300 h-full z-10">
                <div className="container w-full mx-auto  rounded-md px-5 py-8 h-5/6">
                    <div className="detailContainer w-5/6 mx-auto bg-white  rounded-md px-5 py-6 h-5/6 mt-5">
                        <div className="detail">
                        <div className="recommand w-full">
                            <p className='text-2xl font-bold mb-2'>Recommended Books</p>
                            {
                                popup &&
                                <div className='w-5/6 flex justify-between bg-green-200 text-black items-center mx-auto p-3 text-sm font-bold'>
                                In this section, you will show the most downloaded books.
                                <p onClick={()=>setPopup(false)} className='cursor-pointer'>X</p>
                            </div>
                            }
                            
                            <div className="cards md:flex  flex-wrap  justify-between">
                                {
                                    books.map(book=>{
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

export default Popular
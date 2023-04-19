import React, { useContext, useEffect, useState } from 'react'
import './Favourite.css'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/navbar/footer/Footer'
import Card from '../components/navbar/card/Card'

const Favourite = () => {
    const [books,setBooks] = useState([]);
    const [popup,setPopup] = useState(true);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const fetchData = async ()=>{
         try {
             const response = await axios.get(`https://book-shelf-server-red.vercel.app/api/users/getFavourites/${user._id}`,{withCredentials: true})
             setBooks(response.data);

         } catch (error) {
             console.error(error);
         }
         
        } 
 
        fetchData()
     },[])
  return (
    <div className='bg-sky-300'>
            <Navbar/>
            <div className="detail w-full bg-sky-300 h-full z-10">
                <div className="container w-full mx-auto  rounded-md px-5 py-8 h-5/6">
                    <div className="detailContainer w-5/6 mx-auto bg-white  rounded-md px-5 py-6 h-5/6 mt-5">
                        <div className="detail">
                        <div className="recommand w-full">
                            {
                                popup &&
                                <div className='w-5/6 flex justify-between bg-green-200 text-black items-center mx-auto p-3 text-sm font-bold'>
                                In this section, your favourite books will be showed.
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
                            {
                                books &&
                                 <div className="pagination w-full mt-1 flex justify-center gap-2 items-center">
                               <button className='py-1 px-2 w-20 rounded bg-blue-400 text-white items-center text-center font-bold'>previous</button>
                               <button className='py-1 px-2 w-10 rounded bg-blue-400 text-white items-center text-center font-bold'>1</button>
                               <button className='py-1 px-2 w-20 rounded bg-blue-400 text-white items-center text-center font-bold'>next</button>
                            </div>
                            }
                            
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Favourite
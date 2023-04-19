import React, { useContext } from 'react'
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleInfo, faStaffAesculapius,faStar as FullStar ,faStarHalf, faStarHalfStroke, faUser } from '@fortawesome/free-solid-svg-icons'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom';
import {faStar as EmptyStar} from '@fortawesome/free-regular-svg-icons'
import { AuthContext } from '../../../../context/AuthContext';
import axios from 'axios';

const Card = ({book}) => {
    const {user} = useContext(AuthContext);
    const handleClick = async (type)=>{
       const response = await axios.put(`https://book-shelf-server-red.vercel.app/api/users/addToFavourites/${book?._id}`,{headers: "Content-Type: application/json"},{withCredentials: true})
       console.log(response.data);
    }
  return (
    <div className="card border-[1px] cursor-pointer hover:border-blue-300 border-slate-300 md:w-2/5 my-3 max-h-max drop-shadow ">
                                    <p className='w-full bg-blue-500 text-white pb-2 pl-2 text-left font-lg rounded-b-xl'>{book?.name} ({format(book?.created_at)})</p>
                                    
                                    <div className="detail flex gap-3 p-2 justify-between">
                                        
                                        <img src={book?.img} className='w-1/6' alt="" />
                                        
                                        <Link to={'/detail'} state={book}>
                                        <div className='gap-3 flex flex-col'>
                                            <p className='text-sm font-bold'>{book?.name}</p>
                                            <div className='text-sm items-center gap-2 flex'>
                                                <FontAwesomeIcon icon={faUser}/>
                                                    {book?.author}
                                                </div>
                                            <div className='text-sm gap-2 flex items-center'>
                                                <FontAwesomeIcon icon={faCircleInfo}/>
                                                {book?.NumberOfDownloads} downloaded</div>
                                        </div>
                                        </Link>
                                        {
                                            user?.favourites.includes(book._id) ?
                                            <div onClick={()=>handleClick()}>
                                                <FontAwesomeIcon icon={FullStar}/>
                                            </div>
                                             :
                                             <div onClick={()=>handleClick()}>
                                                <FontAwesomeIcon icon={EmptyStar} /> 
                                             </div>
                                            
                                        }
                                        
                                    </div>
                                    
                            </div>
  )
}

export default Card
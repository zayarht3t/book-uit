import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({book}) => {
  return (
    <Link to={'/detail'} state={book}>
     <div className="item cursor-pointer min-w-[154px] 0 min-h-full border-2 hover:border-lime-600 flex flex-col p-2 bg-white text-center rounded">
                        <div className="image">
                            <img src={book.img} alt="" style={{width: "142px",height: "200px"}} className='rounded'/>
                        </div>
                        <p className='text-sm mt-1 font-bold'>{book.name}</p>
                        <p className='text-sm text-blue-500'>{book.isPrimium ? "premium" : "free"}</p>
                    </div>
    </Link>
   
  )
}

export default Item
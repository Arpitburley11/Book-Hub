import React from 'react'
import { Link } from 'react-router-dom';
import {BsInfoCircle} from 'react-icons/bs'
import { MdOutlineDelete} from 'react-icons/md'
import {BiAtom} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';


export default function BookSingleCard(props) {
  // const navigate = useNavigate();
  // const openDesc = ()=>{
  //   navigate('/books/details/:title')
  // }
  return (
    <div className='container flex justify-center align-center py-1 ' >
        <div className=" card max-w-sm rounded-3xl overflow-hidden shadow-lg hover:bg-gray-300 ">
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-1">{props.index}. {props.book.title}</div>
                <span className='text-gray-500 mb-4'>{props.book.author}</span>
                <p className="text-gray-700 text-base py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/books/details/${props.book._id}`}><BsInfoCircle/></Link></span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/books/delete/${props.book._id}`}><MdOutlineDelete/></Link></span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/books/edit/${props.book._id}`}><BiAtom/></Link></span>
            </div>
        </div>
    </div>
  )
}

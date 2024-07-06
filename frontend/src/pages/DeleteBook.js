import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export default function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {id}  = useParams();
  const {enqueueSnackbar} = useSnackbar()

  const handleDeleteBook = ()=>{
    setLoading(true)
    axios
    .delete(`http://localhost:5000/books/${id}`)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book Deleted Successfully! ",{variant:'success'})
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      // alert("Book Not Found")
      enqueueSnackbar("Error ",{variant: 'error'})
      console.log(error)
    })
  }
  return (
    <div className=''>
      <h1 className='my-4 text-3xl'>Delete Book</h1>
      {loading?<Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className="text-2xl">Are you sure you want to delete the book</h3>
        <button className="w-full p-4 m-8 text-white bg-red-800" onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}
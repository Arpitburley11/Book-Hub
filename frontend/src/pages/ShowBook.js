import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


export default function ShowBook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [id]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        <BackButton />
        <h1 className='my-4 text-3xl font-bold text-center text-indigo-700'>{book.title}</h1>

        {loading ? (
          <Spinner />
        ) : (
          <div className='flex flex-col w-full p-4 border border-gray-300 rounded-xl'>
            <div className='my-2'>
              <span className='mr-4 text-xl text-gray-600'>Id:</span>
              <span className='text-gray-800'>{book._id}</span>
            </div>
            <div className='my-2'>
              <span className='mr-4 text-xl text-gray-600'>Title:</span>
              <span className='text-gray-800'>{book.title}</span>
            </div>
            <div className='my-2'>
              <span className='mr-4 text-xl text-gray-600'>Author:</span>
              <span className='text-gray-800'>{book.author}</span>
            </div>
            <div className='my-2'>
              <span className='mr-4 text-xl text-gray-600'>Publish Year:</span>
              <span className='text-gray-800'>{book.publishYear}</span>
            </div>
            <div className='my-2'>
              <span className='mr-4 text-xl text-gray-600'>Created Time:</span>
              <span className='text-gray-800'>{new Date(book.createdAt).toLocaleString()}</span>
            </div>
            <div className='my-2'>
              <span className='mr-4 text-xl text-gray-600'>Updated Time:</span>
              <span className='text-gray-800'>{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


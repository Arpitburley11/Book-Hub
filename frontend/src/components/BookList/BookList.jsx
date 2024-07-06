import './BookList.css';
import Book from './Book';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5000/books')
            .then((res) => {
                setBooks(res.data.data);
                console.log(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    return (
        <div className="bookList">
            <div className='book-cont'>
                {books.map((book, index) => {
                    return (
                        <>
                            <div className='flex book-item flex-column flex-sb' key={index}>
                                <div className='book-item-img'>
                                    <img src={book.cover_img} alt="cover" />
                                </div>
                                <div className='text-center book-item-info'>
                                    <Link to={`/book/${book.id}`} {...book}>
                                        <div className='book-item-info-item title fw-7 fs-18'>
                                            <span>{book.title}</span>
                                        </div>
                                    </Link>

                                    <div className='book-item-info-item author fs-15'>
                                        <span className='text-capitalize fw-7'>Author: </span>
                                        <span>{book.author}</span>
                                    </div>

                                    <div className='book-item-info-item edition-count fs-15'>
                                        <span className='text-capitalize fw-7'>Total Editions: </span>
                                        <span>{book.edition_count}</span>   
                                    </div>

                                    <div className='book-item-info-item publish-year fs-15'>
                                        <span className='text-capitalize fw-7'>First Publish Year: </span>
                                        <span>{book.publishYear}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

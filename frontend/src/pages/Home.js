import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner.js';
import BookSingleCard from '../components/BookSingleCard.js';
import Header from '../components/Header/Header.jsx'
import BookList from '../components/BookList/BookList.jsx';


export default function Home() {
  return (
    <>
      <Header />
      <BookList />
    </>
  )
}


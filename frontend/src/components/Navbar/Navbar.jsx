import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className=' navbar'>
      <div className="flex items-center justify-between py-3 text-lg border-b border-gray-300 ">
        <div className="flex items-center nav-name">
          <div className="nn-logo"></div>
          <div className="flex flex-row items-center">
            <img className='w-20 ml-8' src="/icon.jpg" alt="logo" />
            <span className='p-4 text-4xl'>BookHub</span>
          </div>
        </div>
        <div className="flex gap-10 nav-items">
          <Link to='/books' className='border-b border-gray-300'>Books</Link>
          <Link to='/resources' className='border-b border-gray-300'>Resources</Link>
          <Link to='/ideas' className='border-b border-gray-300'>Ideas</Link>
          <Link to='/about' className='border-b border-gray-300'>About</Link>
        </div>
        <div className="flex gap-8 nav-sub">
          <Link><i className="ri-align-justify"></i>Subject</Link>
          <div className="flex nav-icon">
            <Link><i className="px-5 ri-search-line"></i></Link>
            <Link><i className="ri-heart-line"></i></Link>
          </div>
        </div>
      </div>
    </div>
    //   <nav className='navbar' id = "navbar">
    //   <div className='container flex navbar-content'>
    //     <div className='flex brand-and-toggler flex-sb'>
    //       <Link to = "/" className='flex navbar-brand'>
    //         <img src ='' alt = "site logo" />
    //         <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
    //       </Link>
    //       <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
    //         <HiOutlineMenuAlt3 size = {35} style = {{
    //           color: `${toggleMenu ? "#fff" : "#010101"}`
    //         }} />
    //       </button>
    //     </div>

    //     <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
    //       <ul className = "navbar-nav">
    //         <li className='nav-item'>
    //           <Link to = "book" className='text-white nav-link text-uppercase fs-22 fw-6 ls-1'>Home</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to = "about" className='text-white nav-link text-uppercase fs-22 fw-6 ls-1'>about</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

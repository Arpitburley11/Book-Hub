import './Search.css';
import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <div className='search'>
            <div className="search-cont">
                <form action="submit" className='s-box'>
                    <input type="text" placeholder='The Lost World ...'/>
                    <button><FaSearch className='text-purple' size={30} /></button>
                </form>
            </div>
        </div>
    )
}


import Search from '../Search/Search';
import './Header.css';

export default function Header() {
  return (
    <div className='header bg-neutral-400'>
      <div className="relative w-full h-full overflow-hidden header">
        <div className="head-img">
          <img className='w-full' src="/library-img.jpg" alt="" />
        </div>
        <div className="absolute w-1/2 head-details h-1/2 inset-y-40 inset-x-96 head-content">
          <h1 className=''>Find Your Book of Choice.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa dolor illo dolores voluptatibus provident, quis aliquam asperiores ullam, aut eos qui. Natus consequuntur impedit est quaerat inventore deleniti commodi.</p>
          <Search />
        </div>
      </div>
    </div>
  )
}
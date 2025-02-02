import { Link } from 'react-router-dom';
import logo from '../../assets/pipeline.png'
const Navbar = () => {
    return (
<div className="navbar bg-base-100 md:px-20 md:py-3">
<Link to='/'><img className='w-16' src={logo} alt="pipeline-logo" /></Link>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><Link to='/'>Home</Link></li>
         <li><Link to='work'>Work</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='team'>Team</Link></li>
        </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
      <li><Link to='work'>Work</Link></li>
      <li><Link to='services'>Services</Link></li>
      <li><Link to='team'>Team</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='contact' className="btn">Contact</Link>
  </div>
</div>
    );
};

export default Navbar;
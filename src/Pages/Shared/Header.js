import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleSignOut =()=>{
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }



  return (
    <div className="navbar bg-base-100 text-light">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'>Home</Link>
            <Link to='/serves'>Service</Link>
            
            <Link to='/blogs'>Blogs</Link>

            {user?.uid ?
              <div>
                <Link to='/myreview'>My reviews</Link>
                <Link to='/addservice'>Add service</Link>
                <Link onClick={handleSignOut} className='text-decoration-none  fw-semibold m-lg-auto  me-lg-3' to='/login'><button className="btn btn-outline btn-secondary">Log Out</button></Link>

              </div>
              :
              <div>
                <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/login'><button className="btn btn-outline btn-success">Log In</button></Link>
                <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/signin'> <button className="btn btn-outline btn-warning">Sign In</button></Link>
              </div>
            }
            
          </ul>
        </div>
        
        <Link to='/'><h1 className='text-2xl font-mono italic font-bold'>Cesar<span className='text-green-600'>Photography</span></h1></Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 ">
          <Link className='text-lg font-semibold mt-4 mr-3' to='/'>Home</Link>
          <Link className='text-lg font-semibold mt-4 mr-3' to='/serves'>Service</Link>
          <Link className='text-lg font-semibold mt-4 mr-3' to='/blogs'>Blogs</Link>
          
          {user?.uid ?
            <div>
              <Link className='text-lg font-semibold mt-3 mr-3' to='/myreview'>My reviews</Link>
              <Link className='text-lg font-semibold mt-3 mr-3' to='/addservice'>Add service</Link>
              <Link onClick={handleSignOut} className='text-decoration-none  fw-semibold m-lg-auto  me-lg-3' to='/login'><button className="btn btn-outline btn-secondary">Log Out</button></Link>

            </div>
            :
            <div>
              <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/login'><button className="btn btn-outline btn-success">Log In</button></Link>
              <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/signin'> <button className="btn btn-outline btn-warning">Sign In</button></Link>
            </div>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
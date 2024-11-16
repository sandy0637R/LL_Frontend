import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
        <div className='nav-main'>
            <div className='nav-logo'>Logo</div>
            <div className='navgators'>
                <ul className='nav-ul'>
                    <Link to="/" className='link'>
                      <li className='nav-li'>Home</li>
                    </Link>
                    <Link to="/property" className='link'>
                      <li className='nav-li'>Properties</li>
                    </Link>
                    <Link to="/create" className='link'>
                      <li className='nav-li'>Create</li>
                    </Link>
                    <Link to="/documents" className='link'>
                      <li className='nav-li'>Documents</li>
                    </Link>
                    <Link to="/maintainence" className='link'>
                      <li className='nav-li'>Maintainence</li>
                    </Link>
                    <Link to="/login" className='link'>
                      <li className='nav-li'>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar

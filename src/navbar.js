import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <div className='navbar'>
        <div className='navbar-center'>
            <h1>Markdown Converter</h1>
                <div className='navbar-links'>
                    <Link  to='/'> Home </Link>
                    <Link to='/about'> About </Link>
                </div>
        </div>
    </div>
    )
}

export default Navbar

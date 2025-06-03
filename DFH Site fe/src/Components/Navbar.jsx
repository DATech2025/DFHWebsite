import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='float-end bg-secondary ' style={{ width: '100%', backgroundColor:'', paddingTop:'10px', paddingRight:'20px' }}>
                <ul className='d-flex float-end list-unstyled'>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/">Home</Link></li>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/about">About</Link></li>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/events">Events</Link></li>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/life-stories">Life Stories</Link></li>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/gallery">Gallery</Link></li>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/testimonials">Testimonials</Link></li>
                    <li className='m-2'><Link className='text-decoration-none text-reset unstyled-link' to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
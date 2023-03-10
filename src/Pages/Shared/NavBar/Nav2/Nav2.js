import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import newYear from '../../../../assets/new_year.png'

const Nav2 = () => {
    return (
        <div className='bg-gradient-to-r from-blue-400 to-teal-500 xl:flex items-center gap-28 justify-between hidden'>

            <div>
                <img src={newYear} className="hidden xl:block xl:h-[120px]" alt="" srcset="" />
            </div>

            <div className='flex gap-10 items-center justify-center'>
                <Link to='/' className='text-4xl text-white font-semibold'><FaHome /></Link>
                <Link to='/doctors' className='text-lg text-white font-semibold hover:bg-blue-500 p-4'>Doctors</Link>
                <Link to='/specialities' className='text-lg text-white font-semibold hover:bg-blue-500 p-4'>Specialities</Link>
                <Link to='/gallery' className='text-lg text-white font-semibold hover:bg-blue-500 p-4'>Gallery</Link>
                <Link to='/plan' className='text-lg text-white font-semibold hover:bg-blue-500 p-4'>Plan Your Visit</Link>
            </div>

            <div>
                <img src="https://pngfreepic.com/wp-content/uploads/2021/10/offer-48c.png?v=1671298213" className='hidden xl:block xl:h-[120px]' alt="" srcset="" />
            </div>
        </div>
    );
};

export default Nav2;
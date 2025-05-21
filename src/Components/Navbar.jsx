import React from 'react'
import Topi from '../assets/Tani.svg';
import Home from '../assets/Home.svg';
import Kelas from '../assets/Play.svg';
import Tutorial from '../assets/Tutorial.svg';
import Buku from '../assets/Buku.svg';
import Discord from '../assets/DiscordPhoto.svg';

function Navbar() {
    return (
        <div className='bg-teal-600 w-full p-2'>
            <div className='flex items-center max-w-7xl mx-auto gap-7'>
                <div className='flex items-center'>
                    <img src={Topi} alt="" className='w-12 h-12' />
                </div>

                <ul className='flex gap-6 items-center'>
                    <li className='text-white text-md font-semibold flex items-center gap-2'>
                        <img src={Home} alt="" className='w-5 h-5' /> Home
                    </li>
                    <li className='text-white text-md font-semibold flex items-center gap-2'>
                        <img src={Kelas} alt="" className='w-5 h-5' /> Kelas
                    </li>
                    <li className='text-white text-md font-semibold flex items-center gap-2'>
                        <img src={Tutorial} alt="" className='w-5 h-5' /> Tutorial
                    </li>
                    <li className='text-white text-md font-semibold flex items-center gap-2'>
                        <img src={Buku} alt="" className='w-5 h-5' /> Buku
                    </li>
                    <li className='text-white text-md font-semibold flex items-center gap-2'>
                        <img src={Discord} alt="" className='w-5 h-5' /> Discord
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

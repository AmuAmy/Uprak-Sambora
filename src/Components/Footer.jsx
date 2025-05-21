import React from 'react';
import potobawah from '../assets/FooterPetani.svg';

function Bawah(){
    return(

        <footer className='bg-slate-800 text-white py-10'>
            <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-20'>
                <div className='md:col-span-2'>
                    <img src={potobawah} alt="" className='w-40 md=w-52'/>
                    <p className='mt-4 text-md text-white'>
                    tempat belajar budidaya kode (coding) <br />
                    dengan tutorial yang gampang dipahami
                    </p>
                </div>

                <div>
                    <h3 className='font-semibold mb-3'>Belajar</h3>
                    <ul className='mb-2 text-sm text-slate-300'>
                        <li>Artikel</li>
                        <li>Tutorial</li>
                        <li>Buku</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-semibold mb-3'>Popular Tutorial</h3>
                    <ul className='mb-2 text-sm text-slate-300'>
                        <li>Tutorial Bahasa C</li>
                        <li>Tutorial Javascript</li>
                        <li>Tutorial Java</li>
                        <li>Tutorial PHP</li>
                        <li>Tutorial Python</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-semibold mb-3 '>Social Media</h3>
                    <ul className='mb-2 text-sm text-slate-300'>
                        <li>Facebook Page</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube Channel</li>
                        <li>Telegram Channel</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-semibold mb-3'>Petani Kode</h3>
                    <ul className='mb-2 text-sm text-slate-300'>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>
        </footer>

    );
};

export default Bawah;
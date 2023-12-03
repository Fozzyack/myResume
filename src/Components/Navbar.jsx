import React, { useState } from 'react'
import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import NavMenuMobile from './NavMenuMobile';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const setOpen = () => {
        setOpenMenu(true);
    }
    const setClose = () => {
        setOpenMenu(false);
    }


    const links = [
        {
            href: 'contacts',
            title: 'Contact'
        },
        {
            href: 'aboutme',
            title: 'About'
        },
        {
            href: 'projects',
            title: 'Projects'
        },
        {
            href: 'testimonials',
            title: 'Testimonials'
        }
    ]
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95'>
            <div className='flex flex-wrap items-center justify-between mx-auto  px-4'>
                <Link className='text-white text-sm md:text-4xl font-semibold'>[ PROFESSIONAL PROCRASTINATOR ]</Link>
                <div className='mobile-menu block md:hidden px-3 py-3'>
                    {
                        openMenu ? (
                            <button onClick={() => setClose()} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => setOpen()} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md: w-auto'>

                    <ul className='flex p-4 md:mt-0 sm:flex-row md:space-x-8 mt-10'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            {openMenu ? <NavMenuMobile linklist={links}/> : null}            

        </nav>
    )
}

export default Navbar
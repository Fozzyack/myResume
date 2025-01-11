import React, { useState } from 'react'
import NavLink from './NavLink';
import NavMenuMobile from './NavMenuMobile';
import logo from '../assets/noice.png'
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
            href: 'aboutme',
            title: 'About',
            image: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
            </svg>
        },
        {
            href: 'projects',
            title: 'Projects',
            image: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4" />
            </svg>
        },
        {
            href: 'contacts',
            title: 'Contact',
            image: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
          </svg>
        },
    ]

    const scrollToReference = (e, elementReference) => {
        e.preventDefault();
        document.getElementById(elementReference).scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-95'>
            <div className='flex flex-wrap items-center justify-between mx-auto  px-4 py-2'>
                <button className='text-white gap-4 text-sm md:text-4xl font-semibold flex flex-row items-center' onClick={(e) => { scrollToReference(e, 'main') }}>
                    <img src={logo} alt='logo' className='w-[90px]' />
                    <p className='hidden lg:block'> Frasier Sundra</p>
                </button>
                <div className='mobile-menu block lg:hidden px-3 py-3'>
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
                <div className='menu hidden lg:block md: w-auto'>

                    <ul className='flex p-4 md:mt-0 sm:flex-row md:space-x-8 mt-10'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} image={link.image} />
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            {openMenu ? <NavMenuMobile linklist={links} /> : null}

        </nav>
    )
}

export default Navbar

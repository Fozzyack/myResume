import React from 'react'
import NavLink from './NavLink'

const NavMenuMobile = ({ linklist }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                linklist.map((link, index) => (
                    <li  key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export default NavMenuMobile
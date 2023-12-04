import { Link } from "react-router-dom";
const NavLink = ({href, title, image}) => {

    const scrollToReference = (e, elementReference) => {
        e.preventDefault();
        document.getElementById(elementReference).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <Link className='block flex flex-row gap-3 py-1 pl-3 pr-4 text-[#31CB00] text-md md:p-0 hover:text-blue-500 font-bold' onClick={(e) => {scrollToReference(e, href)}}>
            {title} {image}
        </Link>
    )
}

export default NavLink;
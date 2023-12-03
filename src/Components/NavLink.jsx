import { Link } from "react-router-dom";
const NavLink = ({href, title}) => {
    return (
        <Link className='block py-1 pl-3 pr-4 text-[#31CB00] sm:text-xl md:p-0 hover:text-blue-500' to={`#${href}`}>
            {title}
        </Link>
    )
}

export default NavLink;
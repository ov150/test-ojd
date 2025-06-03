import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <li>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
        </li>
        </>
    )
}

export default Navbar;
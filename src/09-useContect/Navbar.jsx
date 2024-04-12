import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/login">login</Link>
        </>
    );
};

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </nav>
            <Outlet></Outlet>
        </>
    );
};
export default Layout;
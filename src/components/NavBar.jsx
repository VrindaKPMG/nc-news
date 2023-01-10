import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar">
            <span>All Topics</span>
            <span>    |     </span>
            <Link to="/articles">All Articles</Link>
            
        </nav>
    );
};

export default NavBar;

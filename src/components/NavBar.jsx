import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/topics">All Topics</Link>
            <span>    |     </span>
            <Link to="/articles">All Articles</Link>
            
        </nav>
    );
};

export default NavBar;

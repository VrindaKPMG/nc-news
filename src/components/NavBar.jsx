import {Link} from 'react-router-dom'
import Articles from './Articles';
import { Route, Routes } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h2>All Topics</h2>
            <Link to="/articles">All Articles</Link>
            
        </nav>
    );
};

export default NavBar;

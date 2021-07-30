import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My own blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{color: 'white', backgroundColor: 'red'}}>New blog</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;
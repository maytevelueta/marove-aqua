import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className='navbar-container'>
        <nav className="navbar">
            <a href="/" className="logo">
            <img src="./assets/logo.png" alt="logo" style={{
                width: "150px"
            }}/>
            </a>
            <div className="nav-menu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;
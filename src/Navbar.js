import logo from "./assets/logo.png";

const Navbar = () => {
    return ( 
        <div className='navbar-container'>
        <nav className="navbar">
            <a href="/" className="logo">
            <img src={logo} alt="logo" style={{
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
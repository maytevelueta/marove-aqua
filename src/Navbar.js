
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/" className="logo">
            <img src="./assets/logo.png" alt="logo" style={{
                width: "150px"
            }}/>
            </a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Gallery</a>
                <a href="/">Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
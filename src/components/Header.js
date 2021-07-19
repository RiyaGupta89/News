import "./Header.css";

function Header() {
    return(
        <header className="header">
        <div className="header-container">
            <div className="logo">
                <h1>NewsHub.</h1>
            </div>
            <div className="icon-container">
                    <i class="fab fa-2x fa-github"></i>
            </div>
            </div>
        </header>
    );
}

export default Header;
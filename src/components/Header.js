import "./Header.css";

function Header() {
    return(
        <header className="header">
        <div className="header-container">
            <div className="logo">
                <h1>NewsHub.</h1>
            </div>
            <div>
                <input type="text" />
                <button>Search</button>
            </div>
            </div>
        </header>
    );
}

export default Header;
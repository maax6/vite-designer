import './sass/App.scss'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen)
    }

    function closeMenu() {
        setMenuOpen(false)
    }
    return (
        <div className="App">
            <header className="header">
                <h1 className="header__logo">This Interior</h1>
                <nav className="header__nav">
                    <ul className="header__nav__list">
                        <li className="header__nav__list__link">
                            <a href="/Home" className="header__nav__list__link__item">
                                Home
                            </a>
                        </li>
                        <li className="header__nav__list__link">
                            <a href="/Collection" className="header__nav__list__link__item">
                                Collection
                            </a>
                        </li>
                        <li className="header__nav__list__link">
                            <a href="/About" className="header__nav__list__link__item">
                                About
                            </a>
                        </li>
                        <li className="header__nav__list__link">
                            <a href="/Collection" className="header__nav__list__link__item">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="header__burger">
                    <span className="header__burger__line"></span>
                </button>
            </header>
            <main className="main"></main>
            <footer className="footer"></footer>
        </div>
    )
}

export default App

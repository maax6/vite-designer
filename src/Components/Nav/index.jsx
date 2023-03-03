import { useState } from 'react'

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen)
    }

    function closeMenu() {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="App">
            <header className="head">
                <h1 className="head__logo">This Interior</h1>
                <ul className={`head__nav ${menuOpen ? 'active' : ''}`}>
                    <li className="head__nav__link">
                        <a href="/Home" className="head__nav__link__item">
                            Home
                        </a>
                    </li>
                    <li className="head__nav__link">
                        <a href="/Collection" className="head__nav__link__item">
                            Collection
                        </a>
                    </li>
                    <li className="head__nav__link">
                        <a href="/About" className="head__nav__link__item">
                            About
                        </a>
                    </li>
                    <li className="head__nav__link">
                        <a href="/Collection" className="head__nav__link__item">
                            Contact
                        </a>
                    </li>
                </ul>
                <div
                    className={`head__burger ${menuOpen ? "open" : ""}`}
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span className="head__burger__line"></span>
                    {/* <span className="head__burger__line"></span>
                    <span className="head__burger__line"></span> */}
                </div>
            </header>
            <main className="main"></main>
            <footer className="footer"></footer>
        </div>
    )
}

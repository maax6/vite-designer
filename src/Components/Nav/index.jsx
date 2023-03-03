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
                <ul className={`head__nav ${ menuOpen ? "head__nav__active" : ""}`}>
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
                    className="head__menuIcon"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span className={`head__menuIcon__burger ${ menuOpen ? "head__menuIcon__burger__active" : ""}`}
                    ></span>
                    {/* <span className="head__menuIcon__burger"></span>
                    <span className="head__menuIcon__burger"></span> */}
                </div>
            </header>
            <main className="main"></main>
            <footer className="footer"></footer>
        </div>
    )
}

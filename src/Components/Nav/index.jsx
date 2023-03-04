import { useState } from 'react'

export function Nav() {
    const [Open, setOpen] = useState(false)
    const [activePage, setActivePage] = useState('')

    function toggleMenu() {
        setOpen((prevOpen) => !prevOpen)
    }

    function handlePageClick(pageName, event) {
        event.preventDefault();
        setActivePage(pageName)
    }

    // function closeMenu() {
    //     setOpen(!Open)
    // }
    return (
        <div className="App">
            <header className="head">
                <h1 className="head__logo">This Interior</h1>
                <ul className={`head__nav ${Open ? 'head__nav--active' : ''}`}>
                    <li
                        className={`head__nav__link ${
                            activePage == 'Home' ? 'head__nav__link--active' : ''
                        }`}
                    >
                        <a
                            href="/Home"
                            className="head__nav__link__item"
                            onClick={() => setActivePage('Home')}
                        >
                            {' '}
                            Home
                        </a>
                    </li>
                    <li
                        className={`head__nav__link ${
                            activePage == 'Collection' ? 'head__nav__link__active' : ''
                        }`}
                    >
                        <a
                            href="/Collection"
                            className="head__nav__link__item"
                            onClick={() => setActivePage('Collection')}
                        >
                            Collection
                        </a>
                    </li>
                    <li
                        className={`head__nav__link ${
                            activePage === 'About' ? 'head__nav__link--active' : ''
                        }`}
                    >
                        <a
                            href="/About"
                            className="head__nav__link__item"
                            onClick={() => setActivePage('About')}
                        >
                            About
                        </a>
                    </li>
                    <li
                        className={`head__nav__link ${
                            activePage === 'Contact' ? 'head__nav__link--active' : ''
                        }`}
                    >
                        <a
                            href="/Contact"
                            className="head__nav__link__item"
                            onClick={() => setActivePage('Contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="head__menuIcon" aria-expanded={Open} onClick={toggleMenu}>
                    <span
                        className={`head__menuIcon__burger ${
                            Open ? 'head__menuIcon__burger--open' : ''
                        }`}
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

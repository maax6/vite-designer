import { useState } from 'react'

export function Nav() {
    const [Open, setOpen] = useState(false)
    const [activePage, setActivePage] = useState('')

    function toggleMenu() {
        setOpen((prevOpen) => !prevOpen)
    }

    function handlePageClick(pageName, event) {
        
        setActivePage(pageName)
    }

    return (
        <>
            <header className="head">
                <h1 className="head__logo">This Interior</h1>
                <ul className={`head__nav ${Open ? 'head__nav--active' : ''}`}>
                    <li
                        className={`head__nav__link ${
                            activePage === 'Home' ? 'head__nav__link--active' : ''
                        }`}
                    >
                        <a
                            href="/Home"
                            className="head__nav__link__item"
                            onClick={(event) => handlePageClick('Home', event)}
                        >
                            {' '}
                            Home
                        </a>
                    </li>
                    <li
                        className={`head__nav__link ${
                            activePage === 'Collection' ? 'head__nav__link--active' : ''
                        }`}
                    >
                        <a
                            href="/Collection"
                            className="head__nav__link__item"
                            onClick={(event) => handlePageClick('Collection', event)}
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
                            onClick={(event) => handlePageClick('About', event)}
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
                            onClick={(event) => handlePageClick('Contact', event)}
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
                </div>
            </header>
        </>
    )
}

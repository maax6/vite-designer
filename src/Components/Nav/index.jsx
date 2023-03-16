import './_nav.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
    const [Open, setOpen] = useState(false)
    const [activePage, setActivePage] = useState('')

    function toggleMenu() {
        setOpen((prevOpen) => !prevOpen)
    }

    function handlePageClick(pageName) {
        setActivePage(pageName)
    }
    function handleLinkClick(pageName) {
        handlePageClick(pageName)
        toggleMenu()
    }

    return (
        <>
            <header className="head">
                <h1 className="head__logo">This Interior</h1>
                <ul className={`head__nav ${Open ? 'head__nav--active' : ''}`}>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Home' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/"
                            className="head__nav__item__link"
                            onClick={() => handleLinkClick('Home')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Collection' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/Collection"
                            className="head__nav__item__link"
                            onClick={() => handleLinkClick('Collection')}
                        >
                            Collection
                        </NavLink>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'About' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/About"
                            className="head__nav__item__link"
                            onClick={() => handleLinkClick('About')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Contact' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/Contact"
                            className="head__nav__item__link"
                            onClick={() => handleLinkClick('Contact')}
                        >
                            Contact
                        </NavLink>
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

import './_nav.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [activePage, setActivePage] = useState('')

    function toggleMenu() {
        setIsOpen((prevOpen) => !prevOpen)
    }

    function handlePageClick(pageName, event) {
        event.preventDefault()
        setActivePage(pageName)
    }

    return (
        <>
            <header className="head">
                <h1 className="head__logo">This Interior</h1>
                <ul className={`head__nav ${isOpen ? 'head__nav--active' : ''}`}>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Home' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <a
                            href="/Home"
                            className="head__nav__item__link"
                            onClick={(event) => handlePageClick('Home', event)}
                        >
                            Home
                        </a>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Collection' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <a
                            href="/Collection"
                            className="head__nav__item__link"
                            onClick={(event) => handlePageClick('Collection', event)}
                        >
                            Collection
                        </a>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'About' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <a
                            href="/About"
                            className="head__nav__item__link"
                            onClick={(event) => handlePageClick('About', event)}
                        >
                            About
                        </a>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Contact' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <a
                            href="/Contact"
                            className="head__nav__item__link"
                            onClick={(event) => handlePageClick('Contact', event)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="head__menuIcon" aria-expanded={isOpen} onClick={toggleMenu}>
                    <span
                        className={`head__menuIcon__burger ${
                            isOpen ? 'head__menuIcon__burger--open' : ''
                        }`}
                    ></span>
                </div>
            </header>
        </>
    )
}

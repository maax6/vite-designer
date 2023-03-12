	import './_nav.scss'
	import { useState } from 'react'
	import { NavLink } from 'react-router-dom'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(prevOpen => !prevOpen)
  }

  return (
    <>
      <header className="head">
        <h1 className="head__logo">This Interior</h1>
        <ul className={`head__nav ${isOpen ? 'head__nav--active' : ''}`}>
          <li className="head__nav__item">
            <NavLink
              to="/Home"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="head__nav__item">
            <NavLink
              to="/Collection"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </NavLink>
          </li>
          <li className="head__nav__item">
            <NavLink
              to="/About"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="head__nav__item">
            <NavLink
              to="/Contact"
<<<<<<< HEAD
=======
              activeClassName="head__nav__item__link--active"
>>>>>>> main
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={`head__menuIcon ${isOpen ? 'head__menuIcon--open' : ''}`}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="head__menuIcon__burger"></span>
        </div>
      </header>
    </>
  ) 
}

<<<<<<< HEAD
		
=======
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
								to="/Home"
								className="head__nav__item__link"
								onClick={() => handlePageClick('Home')}
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
								onClick={() => handlePageClick('Collection')}
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
								onClick={() => handlePageClick('About')}
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
								onClick={() => handlePageClick('Contact')}
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
>>>>>>> main

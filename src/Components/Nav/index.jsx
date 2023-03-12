	import './_nav.scss'
	import { useState } from 'react'

	export function Nav() {
		const [Open, setOpen] = useState(false)
		const [activePage, setActivePage] = useState('')

		function toggleMenu() {
			setOpen((prevOpen) => !prevOpen)
		}

		function handlePageClick(pageName) {
			setActivePage(pageName);
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
							<a
								href="/Home"
								className="head__nav__item__link"
								onClick={() => handlePageClick('Home')}
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
								onClick={() => handlePageClick('Collection')}
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
								onClick={() => handlePageClick('About')}
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
								onClick={() => handlePageClick('Contact')}
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

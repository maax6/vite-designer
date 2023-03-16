import './_welcome.scss'
import { MdArrowRightAlt } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { NavLink } from 'react-router-dom'
import interior from '../../img/interior.png'

export function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__presentation">
                <h1 className="welcome__presentation__title">Modern Interior</h1>
                <div className="welcome__presentation__text">
                    A full-Service residential & commercial interior design and staging company
                    offering professional organizing & eco-services.
                </div>
                <NavLink className="welcome__link" to="/About">
                    Read More
                    <IconContext.Provider value={{ className: 'welcome__arrow' }}>
                        <MdArrowRightAlt />
                    </IconContext.Provider>
                </NavLink>
            </div>
            <div className="welcome__portfolio">
                <div className="welcome__portfolio__imgContainer">
                    <img
                        className="welcome__portfolio__img"
                        src={interior}
                        alt="designed room photo"
                    />
                    <div className="welcome__card"></div>
                </div>
            </div>
        </div>
    )
}

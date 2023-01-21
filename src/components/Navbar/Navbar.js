import { NavLink } from 'react-router-dom';
import cls from './Navbar.module.css'

const setActive = ({isActive}) => isActive ? cls.active : ''

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div>
                <NavLink to="/profile"  className={ setActive } >Profile</NavLink>
            </div>
            <div>
                 <NavLink to="/dialogs"  className={ setActive} >Message</NavLink> 
            </div>
            {/* <div>
                 <NavLink to="/" className={ ({isActive}) => isActive ? cls.active : ''}>News</NavLink> 
            </div>
            <div>
                 <NavLink to="/" className={ ({isActive}) => isActive ? cls.active : ''}>Misic</NavLink> 
            </div>
            <div>
                 <NavLink to="/" className={ ({isActive}) => isActive ? cls.active : ''}>Settings</NavLink> 
            </div> */}
        </nav>
    );
};

export default Navbar;


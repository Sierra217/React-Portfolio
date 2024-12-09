import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/"end className={({isActive}) => (isActive ? 'active' :'')}>Home</NavLink></li>
                <li><NavLink to="/portfolio"className={({isActive}) => (isActive ? 'active' :'')}>Portfolio</NavLink></li>
                <li><NavLink to="/contact"className={({isActive}) => (isActive ? 'active' :'')}>Contact</NavLink></li>
                <li><NavLink to="/resume"className={({isActive}) => (isActive ? 'active' :'')}>Resume</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navigation;
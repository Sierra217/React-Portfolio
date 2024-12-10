import Navigation from './Navigation';
import selfie from "../assets/profile-picture.jpg"

const Header = () => {
    return (
        <header>
            <h1>Sierra Bjorlin</h1>
            <Navigation />
            <div className="header-top">
                <img src={selfie} className="profile-picture" alt="profile picture" />
            </div>
        </header>
    )
};

export default Header;
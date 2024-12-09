import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <h1>Sierra Bjorlin</h1>
            <Navigation />
            <div className="header-top">
                <img src="/src/assets/profile-picture.jpg" className="profile-picture" alt="profile picture" />
            </div>
        </header>
    )
};

export default Header;
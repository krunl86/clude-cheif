import './Header.css'
import cloudLogo from '../../assets/images/chef-claude-icon.png'
export default function Header () {
    return (
        <header className="header">
            <img src={ cloudLogo } alt="Cloud Logo" className="cloud-logo" />
            <h1>Cheif Claud</h1>
        </header>
    );
}
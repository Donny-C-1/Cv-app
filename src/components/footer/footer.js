import './footer.css';
import facebookImage from '../../images/socials/facebook-messenger.svg';
import igImage from '../../images/socials/instagram.svg';
import snapchatImage from '../../images/socials/snapchat.svg';
import pinterestImage from '../../images/socials/pinterest.svg';
import twitterImage from '../../images/socials/twitter.svg';
import linkedinImage from '../../images/socials/linkedin.svg';

function Footer(props) {
    return (
        <footer>
            <p>Find me on social media</p>
            <nav>
                <a href="https://#" title='facebook' >
                    <img src={facebookImage} alt='Facebook' width='10' height='10' />
                </a>
                <a href='https://#' title='messenger' >
                    <img src={igImage} alt='Instagram' width='10' height='10' />
                </a>
                <a href='https://#' title='instagram' >
                    <img src={snapchatImage} alt='Snap-Chat' width='10' height='10' />
                </a>
                <a href='https://#' title='pinterest' >
                    <img src={pinterestImage} alt='Pinterest' width='10' height='10' />
                </a>
                <a href='https://#' title='twitter' >
                    <img src={twitterImage} alt='Twitter' width='10' height='10' />
                </a>
                <a href='https://#' title='Linked-in' >
                    <img src={linkedinImage} alt='linkedin' width='10' height='10' />
                </a>
            </nav>
            <p>Powered By Donny C</p>
        </footer>
    )
}

export default Footer;
import './aside.css';
import avatarImage from '../../images/avatar_hat.jpg';

function Avatar(props) {
    return (
        <div className='avatar'>
            <img src={avatarImage} alt='Avatar' width={100} height={100} />
            <p>Jane Doe</p>
        </div>
    )
}

function Info(props) {
    return (
        <div className='info'>
            <ul>
                <li>Designer</li>
                <li>London, UK</li>
                <li>example@mail.com</li>
                <li>+1 355 443 98</li>
            </ul>
        </div>
    )
}

function Aside(props) {
    return (
        <aside className="cont">
            <Avatar />
            <div className='inner'>
                <Info />
            </div>
            <p>I'm aside</p>
        </aside>
    )
}

export default Aside;
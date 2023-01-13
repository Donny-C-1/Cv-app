import './aside.css';
import cvData from '../../cv.json';
import avatarImage from '../../images/avatar_hat.jpg';
import briefcase from '../../images/briefcase-variant.svg';
import home from '../../images/home.svg';
import mail from '../../images/email.svg';
import phone from '../../images/phone.svg';
import skill from '../../images/asterisk.svg';
import earth from '../../images/earth.svg';

const { skills, languages } = cvData;

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
                <li>
                    <img src={briefcase} alt='title' />
                    <span>Designer</span></li>
                <li>
                    <img src={home} alt='location' />
                    <span>London, UK</span>
                </li>
                <li>
                    <img src={mail} alt='email address' />
                    <span>example@mail.com</span>
                </li>
                <li>
                    <img src={phone} alt='Phone No' />
                    <span>+1 355 443 98</span>
                </li>
            </ul>
        </div>
    )
}

function Skills(props) {
    return (
        <div>
            <h2>
                <img src={skill} alt='skill' />
                <span>Skills</span>
            </h2>
            {skills.map((skill, index) => (
                <div className='rating' key={index}>
                    <p>{skill.name}</p>
                    <div className='level'>
                        <div style={{ width: skill.level }}>{skill.level}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Languages(props) {
    return (
        <div>
            <h2>
                <img src={earth} alt='languages' />
                <span>Languages</span>
            </h2>
            {languages.map((language, index) => (
                <div className='rating' key={index}>
                    <p>{language.name}</p>
                    <div className='level'>
                        <div style={{ width: language.level }}>{language.degree}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Aside(props) {
    return (
        <div>
            <aside className="cont">
                <Avatar />
                <div className='inner'>
                    <Info />
                    <hr />
                    <Skills />
                    <br />
                    <br />
                    <Languages />
                    <br />
                </div>
            </aside>
        </div>
    )
}

export default Aside;
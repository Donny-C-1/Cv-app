// import { Component } from "react";
import './aside.css';
import defaultAvatar from '../../images/avatar_hat.jpg';
import briefcase from '../../images/briefcase-variant.svg';
import home from '../../images/home.svg';
import mail from '../../images/email.svg';
import phone from '../../images/phone.svg';
import skill from '../../images/asterisk.svg';
import earth from '../../images/earth.svg';
// import edit from '../../images/pencil-outline.svg';

function Aside(props) {
    return (
        <div>
            <aside className="cont">
                <Avatar fname={props.info.fname} lname={props.info.lname} image={props.info.image} />
                <div className='inner'>
                    <Info info={props.info} />
                    <hr />
                    <Skills skills={props.skills} />
                    <br />
                    <br />
                    <Languages languages={props.languages} />
                    <br />
                </div>
            </aside>
        </div>
    )
}

function Avatar(props) {
        return (
            <div className='avatar'>
                <img src={props.image ?? defaultAvatar} alt='Avatar' width={100} height={100} />
                <div className="name" >
                    <h1>
                        <span>{props.lname}</span>
                        <span>{props.fname}</span>
                    </h1>
                </div>
            </div>
        )
}

function Info(props) {
    return (
        <div className="info">
            <ul>
                <li>
                    <img src={briefcase} alt='title' />
                    <span>{props.info.title}</span></li>
                <li>
                    <img src={home} alt='location' />
                    <span>{props.info.address}</span>
                </li>
                <li>
                    <img src={mail} alt='email-address' />
                    <span>{props.info.email}</span>
                </li>
                <li>
                    <img src={phone} alt='Phone No' />
                    <span>{props.info.phone}</span>
                </li>
            </ul>
        </div>
    )
}

function Skills(props) {
    return (
        <div className="skills group">
            <h2>
                <img src={skill} alt='skill' />
                <span>Skills</span>
            </h2>
            {props.skills.map((skill, index) => (
                <div className='rating' key={index}>
                    <p>{skill.name}</p>
                    <div className='level'>
                        <div style={{ width: `${skill.level}%` }}>{`${skill.level}%`}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Languages(props) {
    return (
        <div className="languages group">
            <h2>
                <img src={earth} alt='languages' />
                <span>Languages</span>
            </h2>
            {props.languages.map((language, index) => (
                <div className='rating' key={index}>
                    <p>{language.name}</p>
                    <div className='level'>
                        <div style={{ width: `${language.level}%` }}>{language.degree}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Aside;
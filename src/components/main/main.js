import './main.css';
import calendar from '../../images/calendar-month.svg';
import briefcase from '../../images/briefcase1.svg';
import certificate from '../../images/certificate.svg';

function Main(props) {
    return (
        <main>
            <section className="cont">
                <h2>
                    <img src={briefcase} alt='work experience' />
                    <span>Work Experience</span>
                </h2>
                {props.exp.map((experience, index) => (
                    <article key={index}>
                        <h3 className='job-title'>{experience['job-title']} / {experience['company-name']}</h3>
                        <div className='time-period'>
                            <img src={calendar} alt='calendar' />
                            <span className='date'>{(new Date(experience.start).toLocaleString('default', { month: 'short', year: 'numeric'}))} -</span>
                            {experience.end === null ? <span className='status'>Current</span> : <span>{new Date(experience.end).toLocaleString('default', { month: 'short', year: 'numeric'})}</span>}
                        </div>
                        <p>{experience.comments}</p>
                        {index !== props.exp.length -1 ? <hr /> : <br />}
                    </article>
                ))
                }
            </section>
            <br />
            <section className='cont'>
                <h2>
                    <img src={certificate} alt='education' />
                    <span>Education</span>
                </h2>
                {props.education.map((edu, index) => (
                    <article key={index}>
                        <h3>{edu.institution}</h3>
                        <div className='time-period'>
                            <img src={calendar} alt='calendar' />
                            <span className='date'>{(new Date(edu.start)).toLocaleString('default', { month: 'short', year: 'numeric' })} </span>
                            <span>{edu.end === null ? "" : "  - " + (new Date(edu.end)).toLocaleString('default', { month: 'short', year: 'numeric'})}</span>
                        </div>
                        <p>{edu.degree}</p>
                        {index !== props.education.length -1 ? <hr /> : <br />}
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Main;
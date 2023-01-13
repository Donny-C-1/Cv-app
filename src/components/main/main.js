import './main.css';
import cvData from '../../cv.json';
import calendar from '../../images/calendar-month.svg';
import briefcase from '../../images/briefcase1.svg';
import certificate from '../../images/certificate.svg';

const { "work-experience": exp, "education": ed } = cvData

function Main() {
    return (
        <main>
            <section className="cont">
                <h2>
                    <img src={briefcase} alt='work experience' />
                    <span>Work Experience</span>
                </h2>
                {exp.map((experience, index) => (
                    <article key={index}>
                        <h3 className='job-title'>{experience['job-title']} / {experience.location}</h3>
                        <div className='time-period'>
                            <img src={calendar} alt='calendar' />
                            <span className='date'>{experience.start} -</span>
                            {experience.end === null ? <span className='status'>Current</span> : <span>{experience.end}</span>}
                        </div>
                        <p>Lorem ipsum sit amet di tolum gea, git na ageh du fileom brught na ebig de sit. Il ve ju anem le du'it ve boujei ge thet.</p>
                        {index !== exp.length -1 ? <hr /> : <br />}
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
                {ed.map((education, index) => (
                    <article key={index}>
                        <h3>{education.institution}</h3>
                        <div className='time-period'>
                            <img src={calendar} alt='calendar' />
                            <span className='date'>{education.start} </span>
                            <span>{education.end === null ? "" : "  - " + education.end}</span>
                        </div>
                        <p>{education.degree}</p>
                        {index !== ed.length -1 ? <hr /> : <br />}
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Main;
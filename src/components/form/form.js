import { Component } from 'react';
import './form.css';

function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => cb(...args), delay);
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level1: '30'
        };
        // this.add = this.add.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.infoInputHandler = this.infoInputHandler.bind(this);
        this.skillHandler = this.skillHandler.bind(this);
        this.langHandler = this.langHandler.bind(this);
        this.workExpHandler = this.workExpHandler.bind(this);
        this.eduHandler = this.eduHandler.bind(this);
        this.removeInfoType = this.removeInfoType.bind(this);
        this.updateWithInput = debounce(this.props.updateInfo, 500);
        this.updateSkill = debounce(this.props.updateSkill, 500);
        this.updateLanguage = debounce(this.props.updateLanguage, 500);
        this.updateWorkExperience = debounce(this.props.updateWorkExperience, 500);
        this.updateEducation = debounce(this.props.updateEdu, 500);
        this.handleRangeChange = debounce((e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }, 250)
    }

    changeImage(e) {
        const { currentTarget: target } = e;
        const [file] = target.files;

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                console.log(target.value);
                this.updateWithInput(target.name, reader.result);
                this.props.updateInfo('imageName', file.name);
            })

            reader.readAsDataURL(file);
        }
    }

    infoInputHandler(e) {
        const { currentTarget: target } = e;
        this.updateWithInput(target.name, target.value);
    }
    skillHandler(e) {
        console.log('skill change');
        const { currentTarget: target } = e;
        this.updateSkill(target.dataset.id, target.name.replace('skill-', ''), target.value);
    }
    langHandler(e) {
        const { currentTarget: target } = e;
        this.updateLanguage(target.dataset.id, target.name.replace('lang-', ''), target.value);
    }
    workExpHandler(e) {
        const { currentTarget: target } = e;
        this.updateWorkExperience(target.dataset.id, target.name, target.value);
    }
    eduHandler(e) {
        const { currentTarget: target } = e;
        this.updateEducation(target.dataset.id, target.name, target.value);
    }

    removeInfoType(e) {
        const { currentTarget: target } = e;
        this.props.remove(target.dataset.id, target.dataset.type);
    }

    render() {
        return (
            <form id='form'>
                <div>
                    <section>
                        <div className='section-head'>
                            <h2>Personal Information</h2>
                        </div>
                        <input type='text' name='fname' placeholder='First Name' onInput={this.infoInputHandler} defaultValue={this.props.info.fname} />
                        <input type='text' name='lname' placeholder='Last Name' onInput={this.infoInputHandler} defaultValue={this.props.info.lname} />
                        <input type='text' name='title' placeholder='Title' onInput={this.infoInputHandler} defaultValue={this.props.info.title} />
                        <label className='file' htmlFor="avatar-image-input">
                            <span className='button'>Select Image</span>
                            <span className='file-name'>{this.props.info.imageName}</span>
                            <input type='file' id="avatar-image-input" name='image' placeholder='Add a picture' onChange={this.changeImage} />
                        </label>
                        <input type='text' name='address' placeholder='Address' onInput={this.infoInputHandler} defaultValue={this.props.info.address} />
                        <input type='email' name='email' placeholder='Email' onInput={this.infoInputHandler} defaultValue={this.props.info.email} />
                        <input type='text' name='phone' placeholder='Phone no' onInput={this.infoInputHandler} defaultValue={this.props.info.phone} />
                    </section>

                    <section>
                        <div className='section-head'>
                            <h2>Skills</h2>
                            <button type='button' onClick={() => this.props.add('skills')}>Add</button>
                        </div>
                        {
                            this.props.skills.map((skill, index) => {
                                return (
                                    <Skill key={skill.id} delete={this.removeInfoType} skill={skill} skillHandler={this.skillHandler} />
                                )
                            })
                        }
                    </section>

                    <section>
                        <div className='section-head'>
                            <h2>Languages</h2>
                            <button type='button' onClick={() => this.props.add('languages')}>Add</button>
                        </div>
                        {
                            this.props.languages.map((lang, index) => (
                                <Language key={lang.id} delete={this.removeInfoType} lang={lang} langHandler={this.langHandler} />
                            ))
                        }
                    </section>

                </div>
                <div>
                    <section>
                        <div className='section-head'>
                            <h2>Work Experience</h2>
                            <button type="button" onClick={() => this.props.add('work-experience')}>Add</button>
                        </div>
                        {
                            this.props['work-experience'].map((exp, index) => (
                                <WorkExp key={exp.id} exp={exp} workExpHandler={this.workExpHandler} delete={this.removeInfoType} />
                            ))
                        }
                    </section>

                    <section>
                        <div className="section-head">
                            <h2>Education</h2>
                            <button type="button" onClick={() => this.props.add('education')}>Add</button>
                        </div>
                        {
                            this.props.education.map(edu => (
                                <Education key={edu.id} edu={edu} eduHandler={this.eduHandler} delete={this.removeInfoType} />
                            ))
                        }
                    </section>
                </div>
            </form>
        )
    }
}

function Skill(props) {
    return (
        <div className='skill'>
            <input type='text' name='skill-name' placeholder='skill' data-id={props.skill.id} defaultValue={props.skill.name} onInput={props.skillHandler} />
            <div className='range'>
                <input type='range' className='slider' name='skill-level' data-id={props.skill.id} min='1' max='100' step='1' defaultValue={props.skill.level} onInput={props.skillHandler} />
                <output>{`${props.skill.level || 50}%`}</output>
            </div>
            <button className='delete' type='button' data-id={props.skill.id} data-type='skills' onClick={props.delete} >Delete</button>
        </div>
    )
}

function Language(props) {
    return (
        <div className='language'>
            <input type='text' name='lang-name' placeholder='language' data-id={props.lang.id} defaultValue={props.lang.name} onInput={props.langHandler} />
            <div className='range'>
                <input type='range' className='slider' name='lang-level' data-id={props.lang.id} min='1' max='100' step='1' defaultValue={props.lang.level} onInput={props.langHandler} />
                <output>{`${props.lang.level || 50}%`}</output>
            </div>
            <button className='delete' type='button' data-id={props.lang.id} data-type='languages' onClick={props.delete} >Delete</button>
        </div>
    )
}

function WorkExp(props) {
    return (
        <div className='work-experience'>
            <input type='text' name='company-name' placeholder='Company Name' defaultValue={props.exp['company-name']} data-id={props.exp.id} onInput={props.workExpHandler} />
            <input type='text' name='job-title' placeholder='job-title' defaultValue={props.exp['job-title']} data-id={props.exp.id} onInput={props.workExpHandler} />
            <input type='text' name='comment' placeholder='Comments or Experiences' defaultValue={props.exp.comments} data-id={props.exp.id} onInput={props.workExpHandler} />
            <div className='date'>
                <label>Start: </label>
                <input type='date' defaultValue={props.exp.start} name='start' data-id={props.exp.id} onInput={props.workExpHandler} />
            </div>
            <br />
            <div className='date'>
                <label>End: </label>
                <input type='date' defaultValue={props.exp.end} name='end' data-id={props.exp.id} onInput={props.workExpHandler} />
            </div>
            <br />
            <button className='delete' type='button' data-id={props.exp.id} data-type='work-experience' onClick={props.delete}>Delete</button>
        </div>
    );
}

function Education(props) {
    return (
        <div className='education' key={props.edu.id}>
            <input type='text' name='institution' placeholder='institution' defaultValue={props.edu.institution} data-id={props.edu.id} onInput={props.eduHandler} />
            <input type='text' name='degree' placeholder='degree' defaultValue={props.edu.degree} data-id={props.edu.id} onInput={props.eduHandler} />
            <div className='date'>
                <label>Start: </label>
                <input type='date' defaultValue={props.edu.start} name='start' data-id={props.edu.id} onInput={props.eduHandler} />
            </div>
            <br />
            <div className='date'>
                <label>End: </label>
                <input type='date' defaultValue={props.edu.end} name='end' data-id={props.edu.id} onInput={props.eduHandler} />
            </div>
            <br />
            <button className='delete' type='button' data-id={props.edu.id} data-type='education' onClick={props.delete}>Delete</button>
        </div>
    );
}

export default Form;
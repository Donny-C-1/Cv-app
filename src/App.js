// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import cvData from './cv.json';
import defaultAvatar from './images/avatar.jpg';
import uniqid from 'uniqid';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Header from './components/header/header';
import Cv from './components/cv/cv';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: 'edit',
            info: {
                image: defaultAvatar,
            },
            skills: [{
                id: uniqid()
            }],
            languages: [{
                id: uniqid()
            }],
            'work-experience': [{
                id: uniqid()
            }],
            education: [{
                id: uniqid()
            }]
        };
        this.add = this.add.bind(this);
        this.displayEdit = this.displayEdit.bind(this);
        this.displayPreview = this.displayPreview.bind(this);
        this.displayTemplate = this.displayTemplate.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.updateSkill = this.updateSkill.bind(this);
        this.updateLanguage = this.updateLanguage.bind(this);
        this.updateWorkExperience = this.updateWorkExperience.bind(this);
        this.updateEducation = this.updateEducation.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(infoType) {
        this.setState(prevState => ({
            [infoType]: prevState[infoType].concat([{ id: uniqid()}])
        }))
    }

    displayEdit() {
        this.setState({
            viewMode: 'edit'
        })
    }

    displayPreview() {
        this.setState({
            viewMode: 'preview'
        })
    }

    displayTemplate() {
        this.setState({
            viewMode: 'template'
        })
    }

    updateInfo(property, value) {
        this.setState(state => ({
            info: {
                ...state.info,
                [property]: value
            }
        }));
    }

    updateSkill(id, property, skillName) {
        this.setState(prevState => ({
            skills: prevState.skills.map(skill => skill.id === id ? { ...skill, [property]: skillName } : skill)
        }))
    }

    updateLanguage(id, property, value) {
        let degree;
        if (property === 'level') {
            switch (Math.ceil(Number(value) / 30)) {
                case 1:
                    degree = 'learning';
                    break;
                case 2:
                    degree = 'adept';
                    break;
                case 3:
                    degree = 'fluent';
                    break;
                default:
                    degree = 'fluent';
                    break;
            }
        }
        this.setState(prevState => ({
            languages: prevState.languages.map(lang => lang.id === id ? { ...lang, [property]: value, degree: degree || lang.degree } : lang)
        }))
    }

    updateWorkExperience(id, property, value) {
        this.setState(prevState => ({
            'work-experience': prevState['work-experience'].map(exp => exp.id === id ? { ...exp, [property]: value } : exp)
        }))
    }

    updateEducation(id, property, value) {
        this.setState(prevState => ({
            education: prevState.education.map(edu => edu.id === id ? { ...edu, [property]: value } : edu)
        }))
    }

    remove(id, infoType) {
        this.setState(prevState => ({
            [infoType]: prevState[infoType].filter(type => type.id !== id)
        }));
    }

    render() {
        let Body;
        if (this.state.viewMode === 'preview') {
            Body = (
                <Cv
                    info={this.state.info}
                    skills={this.state.skills}
                    education={this.state.education}
                    languages={this.state.languages}
                    exp={this.state['work-experience']}
                />
            );
        } else if (this.state.viewMode === 'edit') {
            Body = (
                <Form
                    updateInfo={this.updateInfo}
                    updateSkill={this.updateSkill}
                    updateLanguage={this.updateLanguage}
                    updateWorkExperience={this.updateWorkExperience}
                    updateEdu={this.updateEducation}
                    add={this.add}
                    remove={this.remove}
                    info={this.state.info}
                    skills={this.state.skills}
                    languages={this.state.languages}
                    education={this.state.education}
                    work-experience={this.state['work-experience']}
                />
            );
        } else {
            Body = (
                <Cv
                    info={cvData.info}
                    skills={cvData.skills}
                    education={cvData.education}
                    languages={cvData.languages}
                    exp={cvData['work-experience']}
                />
            );
        }

        return (
            <div id='app'>
                <Header editFunc={this.displayEdit} previewFunc={this.displayPreview} tempFunc={this.displayTemplate} viewMode={this.state.viewMode} />
                {Body}
                <Footer />
            </div>
        );
    }
}

export default App;

import { Component } from "react";
import Aside from '../aside/aside';
import Main from '../main/main';

class Cv extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
  
    render() {
      return (
        <div className='cv-preview print'>
            <Aside 
            info={this.props.info}
            skills={this.props.skills}
            languages={this.props.languages}
             />
            <Main 
            exp={this.props.exp}
            education={this.props.education}
            />
        </div>
      )
    }
  }

  export default Cv;
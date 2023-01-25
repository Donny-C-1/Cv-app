import './header.css';
import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header id='header'>
                <h1>CV Creator</h1>
                <div>
                    <button onClick={this.props.editFunc} className={this.props.viewMode === 'edit' ? 'active' : ""}>Edit Mode</button>
                    <button onClick={this.props.previewFunc} className={this.props.viewMode === 'preview' ? 'active' : ""}>Preview Mode</button>
                    <button onClick={this.props.tempFunc} className={this.props.viewMode === 'template' ? 'active' : ""}>Template</button>
                    <button className='right' onClick={() => {this.props.previewFunc(); setTimeout(window.print, 500);}}>Print</button>
                </div>
            </header>
        )
    }
}

export default Header;
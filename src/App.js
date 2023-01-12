// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import uniqid from 'uniqid';
import Aside from './components/aside/aside';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div id='app'>
        <div className='content'>
          <Aside />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

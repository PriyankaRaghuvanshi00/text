import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Router, Routes } from 'react-router';
import Page from './page';
import { useNavigate } from 'react-router';

// https://serene-retreat-01440.herokuapp.com/
class App extends Component {
  state = {
    message: "hellow",
    result: ''
  }
  componentDidMount() {
    const xml = new XMLHttpRequest();
    xml.open('get', 'https://serene-retreat-01440.herokuapp.com');
    xml.send();
    xml.addEventListener('load', () => {
      const newmsg = (JSON.parse(xml.responseText).message);
      this.setState({ message: newmsg });
    })
  }
  render() {
    const propchange = (prp) => {
      let x = (JSON.parse(prp).is_success);
      this.setState({ result: x })
    }
    return <div>
      <h1>{this.state.message}</h1>
      <div>{'result: ' + this.state.result}
      </div>
      <Routes>
        {/* <Route path='/' element={<> */}
        {/* </> */}
        {/* }{...this.props}> </Route> */}
        <Route path='/bfhl' element={<Page func={propchange}{...this.props} />}> </Route>
      </Routes>
    </div >
  }
}



export default App;

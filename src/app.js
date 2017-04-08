import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';

class Main extends Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <h1 id="hw">Hello World!</h1>
    );
  }
  
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';

class Main extends Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
  
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);
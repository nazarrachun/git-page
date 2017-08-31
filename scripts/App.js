import React, { Component } from 'react';
import { css } from 'aphrodite';

class App extends React.Component {
	constructor() {
  	super();
 		 this.state = {
       items:[]
     };
  }

  componentDidMount(){
  	fetch(`http://jsonplaceholder.typicode.com/posts`)
 		.then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
  	return(
    	<ul>
          {this.state.items.length ?
          	this.state.items.map(item => <li key = {item.id}>{item.body}</li>)
            : <li>Loading...</li>
          }
      </ul>
   )
  }
}
export default App;

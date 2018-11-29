import React, { Component } from 'react';
import './App.css';
import ComicBookContainer from './ComicBookContainer/ComicBookContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      real_name: "",
      aliases: "",
      description: "",
      id: "",
      first_appeared_in_issue: "",
    }
  }
  render() {
    return (
      <div>
        <ComicBookContainer name={this.state.name} aliases={this.state.aliases} description={this.state.description} id={this.state.id} powers={this.state.powers}/>
      </div>
    );
  }
}

export default App;

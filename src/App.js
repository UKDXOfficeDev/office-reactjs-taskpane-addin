import React, { Component } from 'react'; 
import { NICE, SUPER_NICE } from './colors';
import { ShareCountControl } from './ShareCountControl.jsx';

export class App extends Component {
  render() {

    return (
      <div>
        <ShareCountControl />
      </div>
    );
  }
}

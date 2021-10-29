import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state, props)=>({
      show: !state.show
    }));
  }
  
  render() {
    // Toggle icon (gear?)
    // Settings modal:
      // Title
      // Game mode
      // Reset Game
      // Close Button
    return (<p>None</p>);
  }
}

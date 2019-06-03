import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newValue = this.props.value -1 
      debugger 
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
        </div>

      ) 
  }

}

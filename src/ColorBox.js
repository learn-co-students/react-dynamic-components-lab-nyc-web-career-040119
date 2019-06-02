import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opa = this.props.opacity

    return (
      <div className="color-box" style={{opacity: opa}}>
        {opa >= 0.2 ? <ColorBox opacity={opa - 0.1} /> : ""}
      </div>
    )
  }
}

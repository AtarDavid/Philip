import React, { Component } from 'react';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }
  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    let position = this.props.position;
    return (
      <span className="tooltip" onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div className="tooltip-message">&#129345;</div>
          </div>
        )}
        <span className="tooltip-trigger" onMouseOver={this.showTooltip}>
          {this.props.children}
        </span>
      </span>
    );
  }
}

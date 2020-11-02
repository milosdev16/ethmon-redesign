import React from "react"

require("./BottomMenuItem.scss");


class BottomMenuItem extends React.Component {
  render() {
    return (
      <div className="bottommenu-icon" style={{left: this.props.left}}>
        <div className="bottom-icon">
          <img src={this.props.src} />
        </div>
        <div className="bottom-text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default BottomMenuItem;

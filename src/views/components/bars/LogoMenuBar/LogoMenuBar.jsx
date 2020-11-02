import React from "react"

require("./LogoMenuBar.scss");

class LogoMenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ddMenuShow: false,
    };
  }

  ddMenuShowToggle = () => {
    this.setState({
      ddMenuShow: !this.state.ddMenuShow
    })
  }

  render() {
    return (
      <div className="logomenu">
        <div className="logo">
          <a href="#">
          <img src={require('../../../../shared/img/logo/logo_text.png')} />
          </a>
        </div>
        <div className="dropdown">
          <a href="#" onClick={this.ddMenuShowToggle} >
            <img className="icon_emont" src={require('../../../../shared/img/logo/icon_emont.png')} />
          </a>
          <ul className={`dropdown-menu ${this.state.ddMenuShow ? 'show' : ''}`}>
            <li className="dropdown-item">What is Ethermon</li>
            <li className="dropdown-item">Getting Started</li>
            <li className="dropdown-item">Player's Guide</li>
            <li className="dropdown-item">Monster Dex</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LogoMenuBar;

import React from "react"

require("./SideMenuBar.scss");


class SideMenuBar extends React.Component {
  onMouseOverHanlder = (active) => {
    this.props.onActive(active)
  }

  render() {
    return (
      <div className="sidebarmenu">
        <ul>
          <li className={`menu-item ${this.props.active === "Adventure" ? "active" : ""}`} onMouseOver={() => this.onMouseOverHanlder("Adventure")}>
            <a href="#" className="menu-link">
              <span className="menu-text">Adventure</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <span className="menu-text"><strike>
                  Tournament
                </strike></span>
            </a>
          </li>
          <li className={`menu-item ${this.props.active === "Battle" ? "active" : ""}`} onMouseOver={() => this.onMouseOverHanlder("Battle")}>
            <a href="#" className="menu-link">
              <span className="menu-text">Battle Ladder</span>
            </a>
          </li>
          <li className={`menu-item ${this.props.active === "Market" ? "active" : ""}`} onMouseOver={() => this.onMouseOverHanlder("Market")}>
            <a href="#" className="menu-link">
              <span className="menu-text">Market</span>
            </a>
          </li>
          <li className={`menu-item ${this.props.active === "OfficialStore" ? "active" : ""}`} onMouseOver={() => this.onMouseOverHanlder("OfficialStore")}>
            <a href="#" className="menu-link">
              <span className="menu-text">Store</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideMenuBar;

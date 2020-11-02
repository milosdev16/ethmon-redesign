import React from "react"
require("./BottomMenuBar.scss");

class BottomMenuBar extends React.Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <li>
            Privacy Policy
          </li>
          <li>
            Terms Of Sale
          </li>
          <li>
            Contact Us
          </li>
          <li>
            Credit
          </li>
        </ul>
        <ul>
          <li>
            Wiki
          </li>
          <li>
            Github
          </li>
          <li>
            FAQ
          </li>
          <li>
            Contracts
          </li>
        </ul>
      </div>
    );
  }
}

export default BottomMenuBar;

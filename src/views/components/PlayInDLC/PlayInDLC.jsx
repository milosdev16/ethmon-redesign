import React from "react"
require("./PlayInDLC.scss");


class PlayInDLC extends React.Component {
  render() {
    return (
      <div className="play-in-dlc">
        <a href="" >
          <span>
          Play In DLC
          </span>
          <img src={require('../../../shared/img/logo/logo_mon.png')} />
        </a>
      </div>
    );
  }
}

export default PlayInDLC;

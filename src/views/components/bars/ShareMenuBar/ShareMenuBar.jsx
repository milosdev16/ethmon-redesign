import React from "react"

require("./ShareMenuBar.scss");


class ShareMenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shareShow: false,
      languageShow: false,
    };
  }
  
  toggleshareShow = () => {
    this.setState({ shareShow: !this.state.shareShow });
  }

  togglelanguageShow = () => {
    this.setState({ languageShow: !this.state.languageShow });
  }

  render() {
    return (
      <div className="sharemenu">
        <div className="share-menu">
          <a className="share-icon" onClick={this.toggleshareShow}>
            <img src={require('../../../../shared/img/icons/share.png')} />
          </a>
          <ul className={`share-sub-menu ${this.state.shareShow ? 'show' : ''}`}>
            <li className="icon">
              <img src={require('../../../../shared/img/socialMedia/discord.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/socialMedia/twitter.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/socialMedia/insta.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/socialMedia/medium.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/socialMedia/telegram.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/socialMedia/youtube.png')} />
            </li>
          </ul>
        </div>
        <div className="language-menu">
          <a className="language-icon" onClick={this.togglelanguageShow}>
            <img src={require('../../../../shared/img/icons/world.png')} />
          </a>
          <ul className={`language-sub-menu ${this.state.languageShow ? 'show' : ''}`}>
            <li className="icon">
              <img src={require('../../../../shared/img/flags/united-kingdom.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/flags/south-korea.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/flags/japan.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/flags/china.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/flags/vietnam.png')} />
            </li>
            <li className="icon">
              <img src={require('../../../../shared/img/flags/germany.png')} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default ShareMenuBar;

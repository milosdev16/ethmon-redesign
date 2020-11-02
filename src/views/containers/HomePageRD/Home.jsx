/* eslint-disable import/first */
import React, { Suspense, useState } from "react"
import { Canvas } from 'react-three-fiber'

import { Switch, Route, withRouter } from 'react-router-dom'

import BottomMenuBar from '../../components/bars/BottomMenuBar/BottomMenuBar.jsx'
import LogoMenuBar from '../../components/bars/LogoMenuBar/LogoMenuBar.jsx'
import SideMenuBar from '../../components/bars/SideMenuBar/SideMenuBar.jsx'
import ShareMenuBar from '../../components/bars/ShareMenuBar/ShareMenuBar.jsx'
import BottomMenuItem from '../../components/BottomMenuItem/BottomMenuItem.jsx'
import PlayInDLC from '../../components/PlayInDLC/PlayInDLC.jsx'
import Loader from '../../components/Loader/Loader.jsx'
import CVScene from '../../components/canvas/CVScene/CVScene.jsx'

require("./Home.scss");

import { imageLoader } from './ImageLoader/ImageLoader.jsx'
import { homeData } from './homeData.js'
import { forwardContext } from '../../components/canvas/forwardContext.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onActiveHandler = (active) => {
    this.setState({ active: active }, () => {
    console.log(this.state.active)
    })
  }

  onClickHandler = (active) => {
    console.log("click", active)
  }

  render() {
    const { camera, images, screen } = homeData;
    const edit_screen = [0, 0]

    return (
      <div className="content">
        <LogoMenuBar />
        <SideMenuBar active={this.state.active} onActive={this.onActiveHandler} />
        <ShareMenuBar />
        <BottomMenuBar />
        <BottomMenuItem text="My Collection" src={require('../../../shared/img/icons/icon_mymon_regular.png')} left='35%' />
        <BottomMenuItem text="Daily Quests" src={require('../../../shared/img/icons/icon_quest_regular.png')} left='50%' />
        <BottomMenuItem text="Leaderboard" src={require('../../../shared/img/icons/icon_leaderboard_regular.png')} left='65%' />
        <PlayInDLC />
        <Canvas concurrent shadowMap camera={camera}>
          <color attach="background" args={['#000']} />
          <Suspense fallback={<Loader />}>
            <CVScene data={images} imageLoader={imageLoader} screen={edit_screen} active={this.state.active} onActive={this.onActiveHandler} onClick={this.onClickHandler} />
          </Suspense>
          <ambientLight intensity={0.4} />
        </Canvas>
      </div>
    );
  }
}

export default Home;
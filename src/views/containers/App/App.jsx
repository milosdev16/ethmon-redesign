import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeRD from "../HomePageRD/Home.jsx"

require("./App.scss");

class App extends React.Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={HomeRD}/>
        </Switch>
      </main>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';

import Dashboards from '../Dashboards';


class App extends Component {
  render() {
    return (
       <BrowserRouter basename={'/'}>
        <div>
            <Switch>
             <Route path="/" component={Dashboards}/>
             <Route exact path="/" render={() => (
               <Redirect to="/"/>
             )}/>


           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

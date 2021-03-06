import React from 'react';
import Navigation from '../navigation/index'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/index';
import Landing from '../landing/index';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Route exact path='/' component={Landing}/>
          <Route path='/dashboard' component={Dashboard}/>
        </div>
        </BrowserRouter>
      </div>
    );
  }

};

export default App;
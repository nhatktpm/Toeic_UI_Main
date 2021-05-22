import AdminFeature from './features/Admin/index';
import UserFeature from './features/User/index';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterFeature from './features/Counter';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" component={UserFeature} exact />
        {/* <Route path="/user" component={UserFeature}  /> */}
        <Route path="/admin" component={AdminFeature} />
        <Route path="/count" component={CounterFeature} />
        <Route path="/list-part" component={CounterFeature} />
      </Switch>

    </div>
  );
}

export default App;

import AdminFeature from './features/Admin/index';
import UserFeature from './features/User/index';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterFeature from './features/Counter';
import ExerciseUser from 'features/ExerciseUser';
import ListPartUser from 'features/ListPartUser';
import ListTopicUser from 'features/ListTopicUser';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" component={UserFeature} exact />
        
        <Route path="/user" component={UserFeature}  />
        <Route path="/admin" component={AdminFeature} />
        <Route path="/count" component={CounterFeature} />

        <Route path="/list-part" component={ListPartUser} />
        <Route path="/list-topic/:idTopic" component={ListTopicUser} />
        <Route path="/exercise" component={ExerciseUser} />
      </Switch>

    </div>
  );
}

export default App;

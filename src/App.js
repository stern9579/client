import React from 'react';
import Main from './views/Main';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import ShowProduct from './components/ShowProduct';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/product/:id/edit">
            <Update />
          </Route>
          <Route exact path="/product/:id">
            <ShowProduct />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import EntriesIndex from './components/EntriesIndex'
import EntriesShow from './components/EntriesShow'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';

import promise from 'redux-promise'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={store(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/entries/:id" component={EntriesShow} />
          <Route path="/" component={EntriesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

import React from 'react'
import ReactDom from 'react-dom'
import { Router, IndexRoute, Route } from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'

import { InitialPage } from './market-app/index'
import { SomePage } from './market-app/somepage'


const history = createBrowserHistory()
class AppMarket extends React.Component {
  render = () => (
    <Router history={history}>
      <Route path="/" component={InitialPage}>
      </Route>
    </Router>
  )
}

ReactDom.render(<AppMarket />, document.getElementById('app'))
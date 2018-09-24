import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { hot } from 'react-hot-loader'

const renderApp = (Component) => {
  render(
    <Router>
      <Component />
    </Router>,
    document.getElementById('root')
  )
  hot(module)(<Component />)
}

renderApp(Routes)

if (module.hot) {
  module.hot.accept('app/routes', () => {
    const newRoutes = require('app/routes').default;
    renderApp(newRoutes)
  })
}

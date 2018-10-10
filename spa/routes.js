import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeDisplay } from 'spa/home'

export default () => {
  return (
    <Switch>
      <Route exact path={'/'} render={HomeDisplay} />
      <Route path={'*'} render={(router) => {
        window.location.href = router.location.pathname
        return null
      }} />
    </Switch>
  )
}

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeDisplay } from 'spa/home'
import { ComponentsDisplay } from 'spa/components'
import { ModalDisplay } from 'spa/modal'
import { TooltipDisplay } from 'spa/tooltip'

export default () => {
  return (
    <Switch>
      <Route exact path={'/'} render={HomeDisplay} />
      <Route exact path={'/components'} render={ComponentsDisplay} />
      <Route exact path={'/components/modal'} render={ModalDisplay} />
      <Route exact path={'/components/tooltip'} render={TooltipDisplay} />
      <Route path={'*'} render={(router) => {
        window.location.href = router.location.pathname
        return null
      }} />
    </Switch>
  )
}

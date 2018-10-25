import React from 'react'
import { ComponentLayout } from 'spa/layout'
import Tooltip from './tooltip'

const display = () => {
  return (
    <ComponentLayout>
      <Tooltip />
    </ComponentLayout>
  )
}

export { display as TooltipDisplay }

export { Tooltip }

export default Tooltip

import React from 'react'
import { ComponentLayout } from 'spa/layout'
import Components from './components'

const display = () => {
  return (
    <ComponentLayout>
      <Components />
    </ComponentLayout>
  )
}

export { display as ComponentsDisplay }

export { Components }

export default Components

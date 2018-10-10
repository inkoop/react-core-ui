import React from 'react'
import { Layout } from 'spa/layout'
import Home from './home'

const display = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export { display as HomeDisplay }

export { Home }

export default Home

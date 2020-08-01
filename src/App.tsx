import React from 'react'

import { FieldList, RocketList } from 'components'
import { GlobalStyle } from 'components/common'

const App = () => {
  return (
    <>
      <main>
        <h1>SpaceX Rockets</h1>
        <FieldList />
        <RocketList />
      </main>
      <GlobalStyle />
    </>
  )
}

export default App

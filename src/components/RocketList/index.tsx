import React from 'react'

import styled from 'styled-components'
import { useRockets } from 'hooks'
import Rocket from './Rocket'

const RocketList = () => {
  const { rockets } = useRockets()

  console.log(rockets.data)

  return (
    <Grid>
      {rockets.data?.map?.(rocket => (
        <Rocket key={rocket.id} {...rocket} />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
`

export default RocketList

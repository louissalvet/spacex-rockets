import React, { FC, memo } from 'react'
import styled from 'styled-components'

interface Props {
  id: string
  [key: string]: any
}
const Rocket: FC<Props> = ({ id, ...rest }) => {
  return (
    <Wrapper>
      <img
        src="https://img.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg?size=338&ext=jpg"
        alt="Rocket"
      />
      <div>
        <h3>ID {id}</h3>
        {Object.entries(rest).map(([field, value]) => (
          <p key={field}>
            <strong>{field}</strong> {value}
          </p>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #263238;
  img {
    object-fit: cover;
    width: 100%;
  }
  div {
    padding: 16px;
  }
`

export default memo(Rocket)

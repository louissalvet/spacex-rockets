import React, { useEffect } from 'react'
import styled from 'styled-components'

import Field from './Field'
import { useFields } from 'hooks'

const FieldList = () => {
  const { fields, fetchFields } = useFields()

  useEffect(() => {
    fetchFields()
  }, [fetchFields])

  return (
    <Wrapper>
      {Object.keys(fields.data).map(field => (
        <Field key={field}>{field}</Field>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  list-style: none;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  & > :not(:last-child) {
    margin-right: 16px;
  }
`

export default FieldList

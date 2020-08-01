import React, { FC, memo } from 'react'
import styled from 'styled-components'

import { useFields } from 'hooks'

interface Props {
  children: string
}
const Field: FC<Props> = ({ children: fieldName }) => {
  const { fields, toggleField } = useFields()

  return (
    <>
      <Label checked={fields.data[fieldName]} htmlFor={fieldName}>
        {fieldName}
      </Label>
      <Checkbox
        id={fieldName}
        onChange={() => toggleField(fieldName)}
        checked={fields.data[fieldName]}
      />
    </>
  )
}

const Label = styled.label<{ checked: boolean }>`
  padding: 16px;
  opacity: ${({ checked }) => (checked ? '1' : '.25')};
  color: #fff;
  border-radius: 5px;
  background-color: #455a64;
  transition: opacity 0.25s;
  cursor: pointer;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

export default memo(Field)

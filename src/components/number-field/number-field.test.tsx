import { render, screen } from '@testing-library/react'

import { NumberField } from '.'

it('should have accessible error', () => {
  const label = 'my-field'
  const errorMessage = 'something wrong'

  render(
    <NumberField
      label={label}
      errorMessage={errorMessage}
      value={0}
      onChange={() => {}}
      id="id"
    />
  )

  const input = screen.getByLabelText(label)
  expect(input).toBeInvalid()
  expect(input).toHaveAccessibleDescription(errorMessage)
})

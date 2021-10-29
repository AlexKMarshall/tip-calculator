import { render, screen } from '@testing-library/react'

import { NumberInput } from '.'
import userEvent from '@testing-library/user-event'

it('should have accessible error', () => {
  const label = 'my-field'
  const errorMessage = 'something wrong'

  render(
    <NumberInput
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

import { render, screen } from '@testing-library/react'

import { TipCalculator } from './tip-calulator'
import userEvent from '@testing-library/user-event'

it('should calculate a tip', () => {
  render(<TipCalculator />)
  const bill = 75
  const tipPercent = 5
  const people = 2

  const expectedTipPerPerson = (bill * tipPercent) / 100 / 2
  const expectedTotalPerPerson = (bill + expectedTipPerPerson * people) / people

  userEvent.type(screen.getByLabelText(/bill/i), bill.toString())
  userEvent.click(screen.getByLabelText(`${tipPercent}%`))
  userEvent.type(screen.getByLabelText(/people/i), people.toString())
  userEvent.tab()

  expect(
    screen.getByRole('status', { name: /tip amount \/ person/i })
  ).toHaveValue(`$${expectedTipPerPerson.toFixed(2)}`)

  expect(screen.getByRole('status', { name: /total \/ person/i })).toHaveValue(
    `$${expectedTotalPerPerson.toFixed(2)}`
  )
})

it('should calculate a custom tip', () => {
  render(<TipCalculator />)
  const bill = 75
  const customTipPercent = 17
  const people = 2

  const expectedTipPerPerson = (bill * customTipPercent) / 100 / 2
  const expectedTotalPerPerson = (bill + expectedTipPerPerson * people) / people

  userEvent.type(screen.getByLabelText(/bill/i), bill.toString())
  userEvent.type(
    screen.getByLabelText(/custom tip amount/i),
    customTipPercent.toString()
  )
  userEvent.type(screen.getByLabelText(/people/i), people.toString())
  userEvent.tab()

  expect(
    screen.getByRole('status', { name: /tip amount \/ person/i })
  ).toHaveValue(`$${expectedTipPerPerson.toFixed(2)}`)

  expect(screen.getByRole('status', { name: /total \/ person/i })).toHaveValue(
    `$${expectedTotalPerPerson.toFixed(2)}`
  )
})
it('should not calculate when values are invalid', () => {
  render(<TipCalculator />)

  const billField = screen.getByLabelText(/bill/i)
  userEvent.type(billField, '0')
  expect(billField).toBeValid()
  // should only validate after first blur
  userEvent.tab()
  expect(billField).toBeInvalid()
  userEvent.type(billField, '5')
  // should re-validate without having to blur
  expect(billField).toBeValid()

  // We haven't filled in other fields, so it shouldn't calculate the totals
  expect(
    screen.getByRole('status', { name: /tip amount \/ person/i })
  ).toHaveValue(`$${(0).toFixed(2)}`)
  expect(screen.getByRole('status', { name: /total \/ person/i })).toHaveValue(
    `$${(0).toFixed(2)}`
  )

  const peopleField = screen.getByLabelText(/people/i)
  userEvent.type(peopleField, '0')
  expect(peopleField).toBeValid()
  // should only validate after first blur
  userEvent.tab()
  expect(peopleField).toBeInvalid()
  userEvent.type(peopleField, '5')
  // should re-validate without having to blur
  expect(peopleField).toBeValid()
})

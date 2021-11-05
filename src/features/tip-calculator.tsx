import {
  Box,
  Button,
  Center,
  Cluster,
  Cover,
  Fieldset,
  Grid,
  Heading,
  HiddenVisually,
  NumberField,
  NumberInput,
  RadioButton,
  Stack,
  Switcher,
  Text,
} from 'src/components'

import { Dollar } from 'src/components/icons/dollar'
import { Person } from 'src/components/icons/person'
import { heading } from './tip-calculator.css'
import { useReducer } from 'react'

const presetTips = [5, 10, 15, 25, 50] as const

type FormValues = {
  bill: number
  people: number
  presetTip: typeof presetTips[number] | null
  customTip: number | null
}

type FormValidators = {
  [k in keyof FormValues]?: (val: unknown) => boolean
}

type FormValidity = {
  [k in keyof FormValues]?:
    | { status: 'error'; message?: string }
    | { status: 'valid' }
}

type FormDirty = {
  [k in keyof FormValues]?: { status: 'dirty' }
}

type FormState = {
  values: FormValues
  validity: FormValidity
  dirty: FormDirty
}

const isPositive = (value: unknown) => typeof value === 'number' && value > 0
const isNonNegative = (value: unknown) =>
  typeof value === 'number' && value >= 0

const formValidators: FormValidators = {
  bill: isPositive,
  people: isPositive,
  customTip: (val) => val === null || isNonNegative(val),
}

const initialFormState: FormState = {
  values: {
    bill: 0,
    people: 0,
    presetTip: 15,
    customTip: null,
  },
  validity: {},
  dirty: {},
}

type FormAction<T extends keyof FormState['values']> =
  | {
      type: 'updateField'
      target: T
      value: FormState['values'][T]
    }
  | { type: 'deselectTip'; target: 'presetTip' | 'customTip' }
  | { type: 'reset' }
  | { type: 'validateField'; target: T }
  | { type: 'dirtyField'; target: T }

function formReducer<T extends keyof FormState['values']>(
  state: FormState,
  action: FormAction<T>
): FormState {
  switch (action.type) {
    case 'updateField': {
      const newValue = Number.isNaN(action.value) ? 0 : action.value
      const updatedState = {
        ...state,
        values: { ...state.values, [action.target]: newValue },
      }

      if (state.dirty[action.target]) {
        return formReducer(updatedState, {
          type: 'validateField',
          target: action.target,
        })
      }
      return updatedState
    }
    case 'validateField': {
      const validator = formValidators[action.target]
      if (validator) {
        const currentValue = state.values[action.target]
        const isValid = validator(currentValue)
        return {
          ...state,
          validity: {
            ...state.validity,
            [action.target]: { status: isValid ? 'valid' : 'error' },
          },
        }
      }
      return state
    }
    case 'dirtyField': {
      return {
        ...state,
        dirty: { ...state.dirty, [action.target]: { status: 'dirty' } },
      }
    }
    case 'deselectTip': {
      return formReducer(state, {
        type: 'updateField',
        target: action.target,
        value: null,
      })
    }
    case 'reset': {
      return initialFormState
    }
  }
}

function formatCurrency(value: number) {
  const { minimumFractionDigits, maximumFractionDigits } =
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).resolvedOptions()
  return value.toLocaleString('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  })
}

type Props = {}
export function TipCalculator(props: Props): JSX.Element {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const {
    values: { bill, presetTip, people, customTip },
    validity,
  } = formState

  const appliedTip = presetTip ?? customTip ?? 0

  const isFormValid =
    validity.bill?.status === 'valid' &&
    validity.people?.status === 'valid' &&
    validity.customTip?.status !== 'error'

  const tipPerPerson = isFormValid ? (bill * (appliedTip / 100)) / people : 0
  const totalPerPerson = isFormValid
    ? (bill * (1 + appliedTip / 100)) / people
    : 0

  return (
    <Center component="main" gutter="xl">
      <Cover space="l">
        <Heading level="3" component="h1" textAlign="center">
          <HiddenVisually>Splitter</HiddenVisually>
          <span className={heading} aria-hidden>
            Spli
            <br />
            tter
          </span>
        </Heading>
        <Box
          background="card"
          borderTopRadius="xl"
          borderBottomRadius={{ s: 'xl' }}
        >
          <Switcher component="form">
            <Box>
              <Stack space="m">
                <NumberField
                  label="Bill"
                  id="bill"
                  errorMessage={
                    validity.bill?.status === 'error'
                      ? 'Invalid field'
                      : undefined
                  }
                  value={bill}
                  min="0"
                  onChange={(value) => {
                    dispatch({
                      type: 'updateField',
                      target: 'bill',
                      value,
                    })
                  }}
                  onBlur={() => {
                    dispatch({ type: 'validateField', target: 'bill' })
                    dispatch({ type: 'dirtyField', target: 'bill' })
                  }}
                  icon={<Dollar />}
                  formatter={formatCurrency}
                />
                <Fieldset label="Select Tip %" id="tip">
                  <Grid>
                    {presetTips.map((tipOption) => (
                      <RadioButton
                        key={tipOption}
                        id={`${tipOption}`}
                        value={tipOption}
                        name="tip-percent"
                        onChange={() => {
                          dispatch({ type: 'deselectTip', target: 'customTip' })
                          dispatch({
                            type: 'updateField',
                            target: 'presetTip',
                            value: tipOption,
                          })
                        }}
                        checked={tipOption === presetTip}
                        label={`${tipOption}%`}
                      />
                    ))}
                    <NumberInput
                      id="customTip"
                      min={0}
                      value={customTip}
                      onChange={(value) => {
                        dispatch({
                          type: 'updateField',
                          target: 'customTip',
                          value,
                        })
                      }}
                      onBlur={() => {
                        dispatch({ type: 'validateField', target: 'customTip' })
                        dispatch({ type: 'dirtyField', target: 'customTip' })
                      }}
                      onFocus={() =>
                        dispatch({ type: 'deselectTip', target: 'presetTip' })
                      }
                      placeholder="Custom"
                    />
                  </Grid>
                </Fieldset>
                <NumberField
                  label="Number of People"
                  id="people"
                  errorMessage={
                    validity.people?.status === 'error'
                      ? 'Invalid field'
                      : undefined
                  }
                  value={people}
                  onChange={(value) => {
                    dispatch({
                      type: 'updateField',
                      target: 'people',
                      value,
                    })
                  }}
                  onBlur={() => {
                    dispatch({ type: 'validateField', target: 'people' })
                    dispatch({ type: 'dirtyField', target: 'people' })
                  }}
                  icon={<Person />}
                />
              </Stack>
            </Box>

            <Box
              padding={{ all: 'm', s: 'l' }}
              background="accent"
              borderRadius="l"
              display="grid"
            >
              <Stack split>
                <Cluster justify="space-between" space="s">
                  <Stack component="label" space="2xs" htmlFor="tip-amount">
                    <Text weight="strong">Tip Amount</Text>
                    <Text weight="strong" size="xs" tone="secondary">
                      / person
                    </Text>
                  </Stack>
                  <Text
                    size="xl"
                    weight="strong"
                    component="output"
                    id="tip-amount"
                    tone="brand"
                  >
                    ${tipPerPerson.toFixed(2)}
                  </Text>
                </Cluster>
                <Cluster justify="space-between" space="s">
                  <Stack component="label" htmlFor="total-amount" space="2xs">
                    <Text weight="strong">Total</Text>
                    <Text size="xs" weight="strong" tone="secondary">
                      / person
                    </Text>
                  </Stack>
                  <Text
                    size="xl"
                    weight="strong"
                    component="output"
                    id="total-amount"
                    tone="brand"
                  >
                    ${totalPerPerson.toFixed(2)}
                  </Text>
                </Cluster>
                <Button
                  type="reset"
                  onClick={() => dispatch({ type: 'reset' })}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Switcher>
        </Box>
      </Cover>
    </Center>
  )
}

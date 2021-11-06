import * as z from 'zod'

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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const presetTips = [5, 10, 15, 25, 50] as const

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

type FormData = {
  bill: number
  customTip: number | null
  tip: number | null
  people: number
}

const formSchema = z.object({
  bill: z.number().min(1, "can't be zero"),
  customTip: z.number().nullable(),
  tip: z.number().min(0).nullable(),
  people: z.number().min(1, "can't be zero"),
})

export function TipCalculator(): JSX.Element {
  const { control, watch, formState, setValue, reset } = useForm<FormData>({
    defaultValues: {
      bill: 0,
      tip: 15,
      customTip: null,
      people: 0,
    },
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })
  const { isDirty, isValid, errors } = formState
  const { bill, people, tip, customTip } = watch()

  const appliedTip = tip ?? customTip ?? 0

  const tipPerPerson = isValid ? (bill * (appliedTip / 100)) / people : 0
  const totalPerPerson = isValid ? (bill * (1 + appliedTip / 100)) / people : 0

  return (
    <Center component="main" gutter={{ s: 'xl' }}>
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
                  name="bill"
                  label="Bill"
                  id="bill"
                  control={control}
                  errorMessage={errors.bill?.message}
                  min="0"
                  icon={<Dollar />}
                  formatter={formatCurrency}
                />
                <Fieldset label="Select Tip %" id="tip">
                  <Grid>
                    {presetTips.map((tipOption) => (
                      <RadioButton
                        name="tip"
                        control={control}
                        key={tipOption}
                        id={`${tipOption}`}
                        value={tipOption}
                        onChange={() => {
                          setValue('customTip', null)
                        }}
                        label={`${tipOption}%`}
                      />
                    ))}
                    <NumberInput
                      id="customTip"
                      min={0}
                      name="customTip"
                      control={control}
                      onChange={() => {
                        setValue('tip', null)
                      }}
                      placeholder="Custom"
                    />
                  </Grid>
                </Fieldset>
                <NumberField
                  label="Number of People"
                  id="people"
                  name="people"
                  control={control}
                  errorMessage={errors.people?.message}
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
                    htmlFor="bill tip people"
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
                    htmlFor="bill tip people"
                    id="total-amount"
                    tone="brand"
                  >
                    ${totalPerPerson.toFixed(2)}
                  </Text>
                </Cluster>
                <Button
                  type="reset"
                  onClick={() => reset()}
                  disabled={!isDirty}
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

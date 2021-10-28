import { useState } from 'react'

type Props = {}
export function TipCalculator(props: Props): JSX.Element {
  const [billField, setBillField] = useState({ value: 0 })
  const [peopleField, setPeopleField] = useState({ value: 0 })
  const predefinedTips = [5, 10, 15, 25, 50] as const
  const [selectedTip, setSelectedTip] = useState<
    typeof predefinedTips[number] | null
  >(15)
  const [customTipField, setCustomTipField] = useState({ value: 0 })

  const tip = selectedTip ?? customTipField.value

  const isFormValid = billField.value > 0 && peopleField.value > 0 && tip >= 0

  const tipPerPerson = isFormValid
    ? (billField.value * (tip / 100)) / peopleField.value
    : 0
  const totalPerPerson = isFormValid
    ? (billField.value * (1 + tip / 100)) / peopleField.value
    : 0

  return (
    <main>
      <h1>Splitter</h1>
      <form>
        <label>
          Bill
          <input
            type="number"
            value={billField.value}
            onChange={(e) => {
              setBillField((field) => ({
                ...field,
                value: e.target.valueAsNumber,
              }))
            }}
          />
        </label>
        <fieldset>
          <legend>Select Tip %</legend>
          {predefinedTips.map((tip) => (
            <label key={tip}>
              <input
                type="radio"
                value={tip}
                name="tip-percent"
                onChange={() => {
                  setCustomTipField({ value: 0 })
                  setSelectedTip(tip)
                }}
                checked={tip === selectedTip}
              />
              {tip}%
            </label>
          ))}
          <label>
            Custom Tip Amount
            <input
              type="number"
              value={customTipField.value}
              onFocus={() => setSelectedTip(null)}
              onChange={(e) => {
                setCustomTipField((field) => ({
                  ...field,
                  value: e.target.valueAsNumber,
                }))
              }}
            />
          </label>
        </fieldset>
        <label>
          Number of People
          <input
            type="number"
            value={peopleField.value}
            onChange={(e) => {
              setPeopleField((field) => ({
                ...field,
                value: e.target.valueAsNumber,
              }))
            }}
          />
        </label>
        <label>
          Tip Amount / person
          <output>{tipPerPerson.toFixed(2)}</output>
        </label>
        <label>
          Total / person
          <output>{totalPerPerson.toFixed(2)}</output>
        </label>
        <button type="reset">Reset</button>
      </form>
    </main>
  )
}

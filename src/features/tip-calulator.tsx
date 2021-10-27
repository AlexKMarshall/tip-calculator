type Props = {}
export function TipCalculator(props: Props): JSX.Element {
  return (
    <main>
      <h1>Spillter</h1>
      <form>
        <label>
          Bill
          <input type="number" inputMode="decimal" />
        </label>
        <fieldset>
          <legend>Select Tip %</legend>
          <label>
            <input type="radio" value="5" name="tip-percent" />
            5%
          </label>
          <label>
            <input type="radio" value="10" name="tip-percent" />
            10%
          </label>
          <label>
            <input type="radio" value="15" name="tip-percent" />
            15%
          </label>
          <label>
            <input type="radio" value="25" name="tip-percent" />
            25%
          </label>
          <label>
            <input type="radio" value="50" name="tip-percent" />
            50%
          </label>
          <label>
            <input type="radio" value="custom" name="tip-percent" />
            Custom Tip
          </label>
          <label>
            Custom Tip Amount
            <input type="number" />
          </label>
        </fieldset>
        <label>
          Number of People
          <input type="number" />
        </label>
        <label>
          Tip Amount / person
          <output></output>
        </label>
        <label>
          Total / person
          <output></output>
        </label>
      </form>
    </main>
  )
}

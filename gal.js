import alfy from 'alfy'
import {MeterUnit} from './converter.js'
import ganOutput from './ganOutput.js'

const main = (input) => {
  // const decimal = parseInt(input)
  if (isNaN(input)) {
    return
  }

  const output = [
    ganOutput.toMeterUnit(input, MeterUnit.GAL, MeterUnit.CCF),
    ganOutput.toMeterUnit(input, MeterUnit.GAL, MeterUnit.M3),
  ]
  alfy.output(output)
}

main(alfy.input)

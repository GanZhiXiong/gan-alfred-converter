import alfy from 'alfy'
import {MeterUnit} from './converter.js'
import ganOutput from './ganOutput.js'

const main = (input) => {
  // const decimal = parseInt(input)
  if (isNaN(input)) {
    return
  }

  const output = [
    ganOutput.toMeterUnit(input, MeterUnit.M3, MeterUnit.L),
    ganOutput.toMeterUnit(input, MeterUnit.M3, MeterUnit.GAL),
    ganOutput.toMeterUnit(input, MeterUnit.M3, MeterUnit.CCF),
  ]
  alfy.output(output)
}

main(alfy.input)

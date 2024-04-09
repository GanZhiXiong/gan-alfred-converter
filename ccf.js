import alfy from 'alfy'
import {MeterUnit} from './converter.js'
import ganOutput from './ganOutput.js'

const main = (input) => {
  // const decimal = parseInt(input)
  if (isNaN(input)) {
    return
  }

  const output = [
    ganOutput.toMeterUnit(input, MeterUnit.CCF, MeterUnit.GAL),
    ganOutput.toMeterUnit(input, MeterUnit.CCF, MeterUnit.M3),
    ganOutput.toMeterUnit(input, MeterUnit.CCF, MeterUnit.L),
  ]
  alfy.output(output)
}

main(alfy.input)

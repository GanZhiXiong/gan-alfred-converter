import alfy from 'alfy'
import {MeterUnit, TemperatureUnit} from './converter.js'
import ganOutput from './ganOutput.js'

const main = (input) => {
  // const decimal = parseInt(input)
  if (isNaN(input)) {
    return
  }

  const output = [
    ganOutput.toTempUnit(input, TemperatureUnit.CELSIUS, TemperatureUnit.FAHRENHEIT),
    // ganOutput.toTempUnit(input, TemperatureUnit.CELSIUS, TemperatureUnit.KELVIN),
    ganOutput.toTempUnit(input, TemperatureUnit.FAHRENHEIT, TemperatureUnit.CELSIUS),
    // ganOutput.toTempUnit(input, TemperatureUnit.FAHRENHEIT, TemperatureUnit.KELVIN),
    // ganOutput.toTempUnit(input, MeterUnit.M3, MeterUnit.CCF),
  ]
  alfy.output(output)
}

main(alfy.input)

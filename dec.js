import alfy from 'alfy'
import ganOutput from './ganOutput.js'

const main = (input) => {
    const decimal = parseInt(input)
    if (isNaN(decimal)) {
        return
    }

    const output = [
        ganOutput.toBin(decimal),
        ganOutput.toOct(decimal),
        ganOutput.toHex(decimal),
    ]
    alfy.output(output)
}

main(alfy.input)

// dec.js

import alfy from 'alfy'
import ganOutput from './ganOutput.js'

const main = (input) => {
    const decimal = parseInt(input, 16)
    if (isNaN(decimal)) {
        return
    }

    const output = [
        ganOutput.toBin(decimal),
        ganOutput.toOct(decimal),
        ganOutput.toDec(input, 16),
    ]
    alfy.output(output)
}

main(alfy.input)

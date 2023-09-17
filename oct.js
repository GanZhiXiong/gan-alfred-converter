// dec.js

import alfy from 'alfy'
import ganOutput from './ganOutput.js'

const main = (input) => {
    const decimal = parseInt(input, 8)
    if (isNaN(decimal)) {
        return
    }

    const output = [
        ganOutput.toBin(decimal),
        ganOutput.toDec(input, 8),
        ganOutput.toHex(decimal),
    ]
    alfy.output(output)
}

main(alfy.input)

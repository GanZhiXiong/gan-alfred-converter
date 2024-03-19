// converter.js

import _ from 'lodash'

export const MeterUnit = {
    GAL: 0,
    CCF: 1,
    M3: 2,
}

export const chunkRight = (arr, size) => {
    const rm = arr.length % size
    return rm
        ? [[arr.slice(0, rm)], ..._.chunk(arr.slice(rm), size)]
        : _.chunk(arr, size)
}

const converter = {
    meterUnit: (number, {fromMeterUnit = MeterUnit.GAL, toMeterUnit = MeterUnit.GAL} = {}) => {
        const galToCcf = 0.1336808
        const galToCubicMeter = 0.0037854
        const ccfToGal = 7.4805072
        const ccfToCubicMeter = 0.0283168
        const cubicMeterToGal = 264.1720524
        const cubicMeterToCcf = 35.3147248

        let conversionFactor = 1

        switch (fromMeterUnit) {
            case MeterUnit.GAL:
                switch (toMeterUnit) {
                    case MeterUnit.CCF:
                        conversionFactor = galToCcf
                        break
                    case MeterUnit.M3:
                        conversionFactor = galToCubicMeter
                        break
                    default:
                        break
                }
                break
            case MeterUnit.CCF:
                switch (toMeterUnit) {
                    case MeterUnit.GAL:
                        conversionFactor = ccfToGal
                        break
                    case MeterUnit.M3:
                        conversionFactor = ccfToCubicMeter
                        break
                    default:
                        break
                }
                break
            case MeterUnit.M3:
                switch (toMeterUnit) {
                    case MeterUnit.GAL:
                        conversionFactor = cubicMeterToGal
                        break
                    case MeterUnit.CCF:
                        conversionFactor = cubicMeterToCcf
                        break
                    default:
                        break
                }
                break
        }

        number *= conversionFactor
        return number
        return Math.trunc(number * 1000) / 1000
    },

    toBinary: (number) => {
        return _.chain(chunkRight(number.toString(2), 8))
            .map((chunk) => {
                return chunk.join('').padStart(8, '0')
            })
            .join(' ')
            .value()
    },

    toHex: (number) => {
        return _.chain(chunkRight(number.toString(16), 2))
            .map((chunk) => {
                return chunk.join('').padStart(2, '0').toUpperCase()
            })
            .join(' ')
            .value()
    },

    toOct: (number) => {
        return number.toString(8)
    },

    toDec: (number, radix) => {
        return parseInt(number, radix)
    },
}

export default converter
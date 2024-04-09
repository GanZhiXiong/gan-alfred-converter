// converter.js

import _ from 'lodash'

export const MeterUnit = {
    GAL: 0,
    CCF: 1,
    M3: 2,
    L: 3,
}

export const TemperatureUnit = {
    CELSIUS: 'Celsius',
    FAHRENHEIT: 'Fahrenheit',
    KELVIN: 'Kelvin'
};

export const chunkRight = (arr, size) => {
    const rm = arr.length % size
    return rm
        ? [[arr.slice(0, rm)], ..._.chunk(arr.slice(rm), size)]
        : _.chunk(arr, size)
}

const converter = {
    temp: (value, fromUnit, toUnit) => {
        if (fromUnit === toUnit) {
            return value;
        }

        switch (fromUnit) {
            case TemperatureUnit.CELSIUS:
                switch (toUnit) {
                    case TemperatureUnit.FAHRENHEIT:
                        return (value * 9 / 5) + 32;
                    case TemperatureUnit.KELVIN:
                        return value + 273.15;
                }
                break;

            case TemperatureUnit.FAHRENHEIT:
                switch (toUnit) {
                    case TemperatureUnit.CELSIUS:
                        return (value - 32) * 5 / 9;
                    case TemperatureUnit.KELVIN:
                        return (value + 459.67) * 5 / 9;
                }
                break;

            case TemperatureUnit.KELVIN:
                switch (toUnit) {
                    case TemperatureUnit.CELSIUS:
                        return value - 273.15;
                    case TemperatureUnit.FAHRENHEIT:
                        return (value * 9 / 5) - 459.67;
                }
                break;

            default:
                throw new Error('Invalid temperature units');
        }
    },

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
                        conversionFactor = galToCcf / 100
                        break
                    case MeterUnit.M3:
                        conversionFactor = galToCubicMeter
                        break
                    case MeterUnit.L:
                        conversionFactor = galToCubicMeter * 1000
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
                    case MeterUnit.L:
                        conversionFactor = ccfToCubicMeter * 1000
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
                        conversionFactor = cubicMeterToCcf / 100
                        break
                    case MeterUnit.L:
                        conversionFactor = 1000
                        break
                    default:
                        break
                }
                break
            case MeterUnit.L:
                switch (toMeterUnit) {
                    case MeterUnit.GAL:
                        conversionFactor = cubicMeterToGal / 1000
                        break
                    case MeterUnit.CCF:
                        conversionFactor = cubicMeterToCcf / 1000 / 100
                        break
                    case MeterUnit.M3:
                        conversionFactor = 1 / 1000
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
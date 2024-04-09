import converter, {MeterUnit, TemperatureUnit} from './converter.js'

const ganOutput = {
    toMeterUnit: (value, fromMeterUnit, toMeterUnit) => {
        let result = converter.meterUnit(value, {fromMeterUnit: fromMeterUnit, toMeterUnit: toMeterUnit})
        return ganOutput.meterUnit(toMeterUnit, result)
    },

    meterUnit: (meterUnit, value) => {
        switch (meterUnit) {
            case MeterUnit.GAL:
                return {
                    title: value,
                    subtitle: 'GAL',
                    uid: 'gal',
                    arg: value,
                    icon: {
                        path: 'icons/gal.png',
                    },
                }
            case MeterUnit.CCF:
                return {
                    title: value,
                    subtitle: 'CCF',
                    uid: 'ccf',
                    arg: value,
                    icon: {
                        path: 'icons/ccf.png',
                    },
                }
            case MeterUnit.M3:
                return {
                    title: value,
                    subtitle: 'M3',
                    uid: 'm3',
                    arg: value,
                    icon: {
                        path: 'icons/m3.png',
                    },
                }
            case MeterUnit.L:
                return {
                    title: value,
                    subtitle: 'L',
                    uid: 'l',
                    arg: value,
                    icon: {
                        path: 'icons/ccf1.png',
                    },
                }
        }
    },

    toTempUnit: (value, fromUnit, toUnit) => {
        let result = converter.temp(value, fromUnit, toUnit)
        return ganOutput.tempUnit(toUnit, result)
    },

    tempUnit: (unit, value) => {
        switch (unit) {
            case TemperatureUnit.CELSIUS:
                return {
                    title: value,
                    subtitle: 'ºC',
                    uid: 'c',
                    arg: value,
                    // icon: {
                    //     path: 'icons/gal.png',
                    // },
                }
            case TemperatureUnit.FAHRENHEIT:
                return {
                    title: value,
                    subtitle: 'ºF',
                    uid: 'f',
                    arg: value,
                    // icon: {
                    //     path: 'icons/ccf.png',
                    // },
                }
            case TemperatureUnit.KELVIN:
                return {
                    title: value,
                    subtitle: 'K',
                    uid: 'k',
                    arg: value,
                    // icon: {
                    //     path: 'icons/m3.png',
                    // },
                }
        }
    },

    toBin: (number) => {
        let result = converter.toBinary(number)
        return {
            title: result,
            subtitle: 'Binary',
            uid: 'binary',
            arg: result,
            icon: {
                path: 'icons/bin.png',
            },
        }
    },
    toOct: (number) => {
        let result = converter.toOct(number)
        return {
            title: result,
            subtitle: 'Octal',
            uid: 'octal',
            arg: result,
            icon: {
                path: 'icons/oct.png',
            },
        }
    },
    toDec: (number, radix) => {
        let result = converter.toDec(number, radix)
        return {
            title: result,
            subtitle: 'Decimal',
            uid: 'decimal',
            arg: result,
            icon: {
                path: 'icons/dec.png',
            },
        }
    },
    toHex: (number) => {
        let result = converter.toHex(number)
        return {
            title: result,
            subtitle: 'Hexadecimal',
            uid: 'hexadecimal',
            arg: result,
            icon: {
                path: 'icons/hex.png',
            },
        }
    }
}

export default ganOutput
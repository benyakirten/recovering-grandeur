import {
    separateRGB,
    getCSSHexString,
    getRGBAStringFromHex,
    getAverageOffset,
    getColorOffset,
    getHexForIteration,
    getHexDigits,
    subtractHexes,
    getDecimalFromHex,
    getHexFromDecimal
} from "../../../src/utils/hexAndDecimals";


describe("hexAndDecimals", () => {
    it("separateRGB returns an object with keys r g b given known CSS hex strings", () => {
        const colors = [
            {
                color: "#000",
                result: { r: "00", g: "00", b: "00" }
            },
            {
                color: "#123456",
                result: { r: "12", g: "34", b: "56" }
            },
            {
                color: "#a1b2c3",
                result: { r: "a1", g: "b2", b: "c3" }
            }
        ];
        for (let i = 0; i < colors.length; i++) {
            const { color, result } = colors[i];
            expect(separateRGB(color)).toEqual(result);
        }
    });

    it("separateRGB returns an error if the hex string is malformed or not a string", () => {
        const badInputs = [
            "abcdef",
            "#hhh",
            [],
            {}
        ];
        for (let i = 0; i < badInputs.length; i++) {
            expect(() => separateRGB(badInputs[i])).toThrow(TypeError);
        }
    });

    it("getCSSHexString creates a string from an object with rgb values", () => {
        const colors = [
            {
                color: {
                    r: "aa",
                    g: "bb",
                    b: "cc"
                },
                expected: "#aabbcc"
            },
            {
                color: {
                    r: "a1",
                    g: "b2",
                    b: "c3"
                },
                expected: "#a1b2c3"
            }
        ];
        for (let i = 0; i < colors.length; i++) {
            const { color, expected } = colors[i];
            expect(getCSSHexString(color)).toEqual(expected);
        }
    });

    it("getCSSHexString will raise an error if the object doesn't have string RGB keys with values of length 2 that are parts of hex strings", () => {
        const colors = [
            { color: [] },
            { color: { r: "aa", g: "bb", b: "hh" }},
            { color: { r: "aa", g: "hh", b: "cc" }},
            { color: { r: "hh", g: "bb", b: "cc" }},
            { color: { r: "aaa", g: "bb", b: "cc" }},
            { color: { r: "aa", g: "bbb", b: "cc" }},
            { color: { r: "aa", g: "bb", b: "ccc" }},
            { color: { r: [], g: "bb", b: "cc" }},
            { color: { r: "aa", g: [], b: "cc" }},
            { color: { r: "aa", g: "bb", b: [] }}
        ];
        for (let i = 0; i < colors.length; i++) {
            const { color } = colors[i];
            expect(() => getCSSHexString(color)).toThrow(TypeError);
        }
    });

    it("getRGBAStringFromHex will create a CSS-valid rgba string given hex string and an opacity", () => {
        const colors = [
            { hex: "#000", opacity: 0.5, expected: "rgba(0, 0, 0, 0.5)" },
            { hex: "#abc", opacity: 1, expected: "rgba(170, 187, 204, 1)" },
            { hex: "#123456", opacity: 0, expected: "rgba(18, 52, 86, 0)" }
        ]
        for (let i = 0; i < colors.length; i++) {
            const { hex, opacity, expected } = colors[i];
            expect(getRGBAStringFromHex(hex, opacity)).toEqual(expected);
        }
    });

    it("getRGBAStringFromHex will throw a TypeError if opacity isn't a number or > 1 or < 0", () => {
        expect(() => getRGBAStringFromHex("#000", [])).toThrow(TypeError);
        expect(() => getRGBAStringFromHex("#000", -1)).toThrow(TypeError);
        expect(() => getRGBAStringFromHex("#000", 1.5)).toThrow(TypeError);
    });

    it("getAverageOffset will return a whole, decimal number for three colors that's the average delta to get from one color to the other over a number of iterations", () => {
        const objs = [
            {
                startColor: { r: "0", g: "0", b: "0" },
                endColor: { r: "37", g: "37", b: "37" },
                iterations: 5,
                expected: {
                    r: 11,
                    g: 11,
                    b: 11
                }
            },
            {
                startColor: { r: "12", g: "34", b: "55" },
                endColor: { r: "36", g: "9c", b: "ff" },
                iterations: 3,
                expected: {
                    r: 12,
                    g: 34,
                    b: 56
                }
            },
            {
                startColor: { r: "37", g: "37", b: "37" },
                endColor: { r: "0", g: "0", b: "0" },
                iterations: 5,
                expected: {
                    r: -11,
                    g: -11,
                    b: -11
                }
            }
        ];
        for (let i = 0; i < objs.length; i++) {
            const { startColor, endColor, iterations, expected } = objs[i];
            expect(getAverageOffset(startColor, endColor, iterations)).toEqual(expected);
        }
    });

    it("getAverageOffset will throw a TypeError if iterations is not a whole number", () => {
        const startColor = { r: "0", g: "0", b: "0" };
        const endColor =  { r: "37", g: "37", b: "37" };
        expect(() => getAverageOffset(startColor, endColor, 1.2)).toThrow(TypeError);
        expect(() => getAverageOffset(startColor, endColor, [])).toThrow(TypeError);
    });

    it("getColorOffset will return a whole, decimal number that's the average delta to get from one color to the other over a number of iterations", () => {
        const colors = [
            {
                startValue: "0",
                endValue: "37",
                iterations: 5,
                expected: 11
            },
            {
                startValue: "34",
                endValue: "9c",
                iterations: 3,
                expected: 34
            },
            {
                startValue: "37",
                endValue: "0",
                iterations: 5,
                expected: -11
            }
        ];

        for (let i = 0; i < colors.length; i++) {
            const { startValue, endValue, iterations, expected } = colors[i];
            expect(getColorOffset(startValue, endValue, iterations)).toEqual(expected);
        }
    });

    it("getColorOffset will throw a TypeError if the number iterations isn't an integer", () => {
        const values = [
            { start: "00", end: "ff", iter: [] },
            { start: "00", end: "ff", iter: 5.5 }
        ];
        for (let i = 0; i < values.length; i++) {
            const { start, end, iter } = values[i];
            expect(() => getColorOffset(start, end, iter)).toThrow(TypeError);
        }
    });

    it("getHexForIteration will return known hex strings given known values", () => {
        const values = [
            {
                offset: {
                    r: -3,
                    g: 1,
                    b: 1
                },
                iter: 30,
                initial: {
                    r: "cd",
                    g: "5c",
                    b: "5c"
                },
                expected: "#ff3e3e"
            },
            {
                offset: {
                    r: 1,
                    g: 2,
                    b: 3
                },
                iter: 7,
                initial: {
                    r: "1a",
                    g: "2b",
                    b: "3c"
                },
                expected: "#131d27"
            }
        ];
        for (let i = 0; i < values.length; i++) {
            const { offset, iter, initial, expected } = values[i];
            expect(getHexForIteration(iter, offset, initial)).toEqual(expected);
        }
    });

    it("getHexForIteration will throw a type error if the iteration count isn't an integer", () => {
        const values = [
            {
                offset: {
                    r: "10",
                    g: "10",
                    b: "10"
                },
                iter: [],
                initial: {
                    r: "00",
                    g: "00",
                    b: "00"
                }
            },
            {
                offset: {
                    r: "10",
                    g: "10",
                    b: "10"
                },
                iter: 1.2,
                initial: {
                    r: "00",
                    g: "00",
                    b: "00"
                }
            }
        ];
        for (let i = 0; i < values.length; i++) {
            const { offset, iter, initial } = values[i];
            expect(() => getHexForIteration(iter, offset, initial)).toThrow(TypeError);
        }
    });

    it("getHexDigits will give known results for known values", () => {
        const values = [
            {
                offset: -15,
                iter: 3,
                color: "ab",
                expected: "d8"
            },
            {
                offset: 3,
                iter: 10,
                color: "aa",
                expected: "8c"
            }
        ];

        for (let i = 0; i < values.length; i++) {
            const { offset, iter, color, expected } = values[i];
            expect(getHexDigits(offset, iter, color)).toEqual(expected);
        }
    });
    
    it("getHexDigits will throw a TypeError if iter is not an integer", () => {
        const values = [
            {
                offset: -15,
                iter: [],
                color: "ab"
            },
            {
                offset: 3,
                iter: 5.6,
                color: "aa"
            }
        ];

        for (let i = 0; i < values.length; i++) {
            const { offset, iter, color } = values[i];
            expect(() => getHexDigits(offset, iter, color)).toThrow(TypeError);
        }
    });

    it("subtractHexes will return known results for known values", () => {
        const values = [
            {
                original: "aa",
                delta: "77",
                multiplier: 1,
                expected: "33"
            },
            {
                original: "f0",
                delta: "80",
                multiplier: 1.5,
                expected: "30"
            }
        ];
        for (let i = 0; i < values.length; i++) {
            const { original, delta, multiplier, expected } = values[i];
            expect(subtractHexes(original, delta, multiplier)).toEqual(expected);
        }
    });

    it("subtractHexes will throw a TypeError if the multiplier isn't a number or the numbers can't be parsed as hexadecimals", () => {
        const values = [
            {
                original: "aa",
                delta: "77",
                multiplier: []
            },
            {
                original: "hh",
                delta: "80",
                multiplier: 1
            },
            {
                original: "33",
                delta: "hh",
                multiplier: 1
            }
        ];
        for (let i = 0; i < values.length; i++) {
            const { original, delta, multiplier } = values[i];
            expect(() => subtractHexes(original, delta, multiplier)).toThrow(TypeError);
        }
    });

    it("getDecimalFromHex should return known results for known values", () => {
        const values = [
            { hex: "aa", decimal: 170 },
            { hex: "abcdef", decimal: 11259375 },
            { hex: "0", decimal: 0 }
        ];
        for (let i = 0; i < values.length; i++) {
            const { hex, decimal } = values[i];
            expect(getDecimalFromHex(hex)).toEqual(decimal);
        }
    });

    it("getDecimalFromHex will throw an error if the parameter can't be parsed as a hex", () => {
        const values = [
            [],
            NaN,
            null,
            undefined,
            {},
            "hhhhh"
        ];
        for (let i = 0; i < values.length; i++) {
            expect(() => getDecimalFromHex(values[i])).toThrow(Error);
        }
    });

    it("getHexFromDecimal will give known results for known values", () => {
        const values = [
            { decimal: 0, hex: "0" },
            { decimal: 11259375, hex: "abcdef" },
            { decimal: 255, hex: "ff" }
        ];
        for (let i = 0; i < values.length; i++) {
            const { decimal, hex } = values[i];
            expect(getHexFromDecimal(decimal)).toEqual(hex);
        }
    });

    it("getHexFromDecimal will throw an error if the parameter is not a number", () => {
        expect(() => getHexFromDecimal([])).toThrow(TypeError);
        expect(() => getHexFromDecimal("hello")).toThrow(TypeError);
    });
 });
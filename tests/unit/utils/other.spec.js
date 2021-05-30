import {
    betweenMinAndMax,
    getRandomNumberBetweenMinAndMax,
    getRandomItemFromArray,
    getRandomValueFromObject,
    getRandomKeyFromObject,
    shuffleSmallArray
} from "../../../src/utils/other";

describe("other", () => {
    it("betweenMinAndMax gives known output for known values", () => {
        const values = [
            {
                current: 0,
                change: 50,
                min: 0,
                max: 100,
                result: 50,
            },
            {
                current: 28,
                change: 300,
                min: 0,
                max: 100,
                result: 100,
            },
            {
                current: 0,
                change: -100,
                min: 0,
                max: 10,
                result: 0,
            },
        ];

        for (let i = 0; i < values.length; i++) {
            const { current, change, min, max, result } = values[i];
            const value = betweenMinAndMax(current, change, min, max);
            expect(value).toEqual(result);
        }
    });

    it("betweenMinAndMax throws an error if the min is greater than the max", () => {
        expect(() => betweenMinAndMax(0, 0, 100, 0)).toThrow(Error);
    });

    it("getRandomNumberBetweenMinAndMax returns a valid result for known data", () => {
        const values = [
            {
                min: 0,
                max: 100
            },
            {
                min: 150,
                max: 300
            },
            {
                min: 0,
                max: 1
            }
        ];
        for (let i = 0; i < values.length; i++) {
            const { min, max } = values[i];
            const result = getRandomNumberBetweenMinAndMax(min, max);
            expect(result).toBeLessThanOrEqual(max);
            expect(result).toBeGreaterThanOrEqual(min);
        }
    });

    it("getRandomNumberBetweenMinAndMax throws an error if the min is greater than the max", () => {
        expect(() => getRandomNumberBetweenMinAndMax(100, 0)).toThrow(Error);
    });

    it("getRandomNumberBetweenMinAndMax throws an error if min or max is not a number", () => {
        expect(() => getRandomNumberBetweenMinAndMax([], 0)).toThrow(Error);
        expect(() => getRandomNumberBetweenMinAndMax(0, [])).toThrow(Error);
        expect(() => getRandomNumberBetweenMinAndMax([], [])).toThrow(Error);
    });

    it("getRandomItemFromArray returns an item from an array", () => {
        const arrays = [
            [1, 2, 3, 4, 5],
            ["A", "B", "C", "D", "E"],
            [
                {
                    name: "Dan"
                },
                {
                    name: "Fredrick"
                }
            ]
        ];
        for (let i = 0; i < arrays.length; i++) {
            const arr = arrays[i];
            expect(arr).toContain(getRandomItemFromArray(arr));
        }
    });

    it("getRandomItemFromArray throws errors if the parameter is not an array of at least length 1", () => {
        expect(() => getRandomItemFromArray({})).toThrow(TypeError);
        expect(() => getRandomItemFromArray([])).toThrow(Error);
    });

    it("getRandomValueFromObject returns a random value from an object", () => {
        const objs = [
            {
                name: "Andrew",
                altName: "Brian",
                age: 1,
                id: 2,
                pets: 3
            },
            {
                time: new Date().toISOString(),
                x: 1,
                y: 2,
                delta: 3
            }
        ];
        for (let i = 0; i < objs.length; i++) {
            const obj = objs[i];
            const value = getRandomValueFromObject(obj)
            expect(Object.values(obj)).toContain(value);
        }
    });

    it("getRandomValueFromObject throws an error if the parameter does not have at least 1 key/object pair", () => {
        expect(() => getRandomValueFromObject({})).toThrow(Error);
    });

    it("getRandomKeyFromObject returns a random value from an object", () => {
        const objs = [
            {
                name: "Andrew",
                altName: "Brian",
                age: 1,
                id: 2,
                pets: 3
            },
            {
                time: new Date().toISOString(),
                x: 1,
                y: 2,
                delta: 3
            }
        ];
        for (let i = 0; i < objs.length; i++) {
            const obj = objs[i];
            const key = getRandomKeyFromObject(obj);
            expect(Object.keys(obj)).toContain(key);
        }
    });

    it("getRandomKeyFromObject throws an error if the parameter does not have at least 1 key/object pair", () => {
        expect(() => getRandomKeyFromObject({})).toThrow(Error);
    });

    it("shuffleSmallArray makes two arrays, equal prior, unequal after invocation on one array", () => {
        const firstArray = [1, 2, 3, 4];
        const secondArray = [1, 2, 3, 4];

        expect(firstArray).toEqual(secondArray);

        // Shuffle arrays, allowing for it to shuffle multiple times
        // because a random shuffle can leave the array exactly the same
        for (let i = 0; i < 100; i++) {
            // If the arrays are equal after 100 repetitions, then the
            // function is obviously not working - or it's an EXTREMELY unlikely occurrence
            // Just run the test again. It'll never happen again
            if (!firstArray.every((val, idx) => val === secondArray[idx])) {
                break;
            }
            shuffleSmallArray(firstArray);
        }
        expect(firstArray).not.toEqual(secondArray);
    });
});

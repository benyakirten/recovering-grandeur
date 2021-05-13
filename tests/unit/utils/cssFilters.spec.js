import {
    constructFilterProperty,
    constructFilterString,
} from "../../../src/utils/cssFilters";

describe("cssFilters", () => {
    const individualFilter = new RegExp(
        /^(blur|brightness|contrast|hue-rotate|invert|saturate)\(\d+(\w+|%)\)$/
    );
    const filterString = new RegExp(
        /^((blur|brightness|contrast|hue-rotate|invert|saturate)\(\d+(\w+|%)\)\s*)+$/
    );
    it("constructFilterProperty returns a fully constructed CSS filter property", () => {
        // 100 iterations should be enough to get every property from the filterEnum
        for (let i = 0; i < 100; i++) {
            const filterProperty = constructFilterProperty();
            expect(filterProperty).toMatch(individualFilter);
        }
    });

    it("constructFilterString returns a series of filter properties", () => {
        expect(constructFilterString(5)).toMatch(filterString);
    });

    it("constructFilterString throws a TypeError if the parameter is not a number", () => {
        expect(() => constructFilterString([])).toThrow(TypeError);
    })
});

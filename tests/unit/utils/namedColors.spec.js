import {
    getHexFromNamedColor,
    namedColorsAndHexes
} from "../../../src/utils/namedColors";
import {
    getRandomKeyFromObject
} from "../../../src/utils/other";

describe("namedColors", () => {
    it("getHexFromNamedColor will return a hex from a named color", () => {
        for (let i = 0; i < 100; i++) {
            const color = getRandomKeyFromObject(namedColorsAndHexes);
            expect(getHexFromNamedColor(color)).toEqual(namedColorsAndHexes[color]);
        }
    });

    it("getHexfromNamedColor will return the parameter if it begins with #", () => {
        expect(getHexFromNamedColor("#")).toBe("#");
    })
 });

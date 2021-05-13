import { JSDOM } from "jsdom";
import { createCanvas } from "canvas";

import {
    getCanvasDimensions,
    getAbsoluteCorners,
    getRelativeCorners,
    getNearestCornerPosition,
    clearCanvas
} from "../../../src/utils/canvasFunctions.js";

describe("canvasFunctions", () => {
    let dom;
    let domCanvas;

    const coords = [
        {
            top: 30,
            left: 30,
            height: 30,
            width: 30,
            mouseCoords: [
                { x: 30, y: 30, relX: 0, relY: 0 },
                { x: 60, y: 30, relX: 30, relY: 0 },
                { x: 60, y: 60, relX: 30, relY: 30 },
                { x: 30, y: 60, relX: 0, relY: 30 }
            ]
        },
        {
            top: 0,
            left: 0,
            height: 300,
            width: 100,
            mouseCoords: [
                { x: 0, y: 0, relX: 0, relY: 0 },
                { x: 100, y: 0, relX: 100, relY: 0 },
                { x: 100, y: 300, relX: 100, relY: 300 },
                { x: 0, y: 300, relX: 0, relY: 300 }
            ]
        },
        {
            top: 100,
            left: 150,
            height: 400,
            width: 350,
            mouseCoords: [
                { x: 150, y: 100, relX: 0, relY: 0 },
                { x: 500, y: 100, relX: 350, relY: 0 },
                { x: 500, y: 500, relX: 350, relY: 400 },
                { x: 150, y: 500, relX: 0, relY: 400 }
            ]
        },
        {
            top: 20,
            left: 30,
            height: 50,
            width: 40,
            mouseCoords: [
                { x: 30, y: 20, relX: 0, relY: 0 },
                { x: 70, y: 20, relX: 40, relY: 0 },
                { x: 70, y: 70, relX: 40, relY: 50 },
                { x: 30, y: 70, relX: 0, relY: 50 }
            ]
        },
    ];

    beforeEach(() => {
        dom = new JSDOM("<canvas></canvas>");
        domCanvas = dom.window.document.querySelector("canvas");
    });

    it("getCanvasDimensions returns the canvas dimensions", () => {
        for (let i = 0; i < coords.length; i++) {
            const { top, left, width, height } = coords[i];

            domCanvas.getBoundingClientRect = jest.fn(() => ({
                top,
                left,
                width,
                height
            }));

            expect(getCanvasDimensions(domCanvas)).toEqual({
                top,
                left,
                width,
                height,
            });
        }
    });

    it("getCanvasDimensions raises a TypeError if it cannot call getBoundingClientRect on parameters", () => {
        expect(() => getCanvasDimensions({})).toThrow(TypeError);
    });

    it("given known data, getAbsoluteCorners gets expected results", () => {
        for (let i = 0; i < coords.length; i++) {
            const { top, left, width, height } = coords[i];

            domCanvas.getBoundingClientRect = jest.fn(() => ({
                top,
                left,
                width,
                height
            }));

            expect(getAbsoluteCorners(domCanvas)).toEqual([
                { x: left, y: top },
                { x: left + width, y: top },
                { x: left + width, y: top + height },
                { x: left, y: top + height }
            ]);
        }
    });

    it("getAbsoluteCorners raises a TypeError if it cannot call getBoundingClientRect on parameters", () => {
        expect(() => getAbsoluteCorners({})).toThrow(TypeError);
    });

    it("given known data, getRelativeCorners gets expected results", () => {
        for (let i = 0; i < coords.length; i++) {
            const { width, height } = coords[i];

            domCanvas.width = width;
            domCanvas.height = height;

            expect(getRelativeCorners(domCanvas)).toEqual([
                { x: 0, y: 0 },
                { x: width, y: 0 },
                { x: width, y: height },
                { x: 0, y: height },
            ]);
        }
    });

    it("getRelativeCorners raises a TypeError if its parameter doesn't have a width and height property", () => {
        expect(() => getRelativeCorners({})).toThrow(TypeError);
    });

    it("given known data, getNearestCornerPosition gets expected results", () => {
        for (let i = 0; i < coords.length; i++) {
            const { top, left, width, height, mouseCoords } = coords[i];

            domCanvas.getBoundingClientRect = jest.fn(() => ({
                top,
                left,
                width,
                height
            }));

            domCanvas.width = width;
            domCanvas.height = height;

            for (let j = 0; j < mouseCoords.length; j++) {
                const { x, y, relX, relY } = mouseCoords[j];
                expect(getNearestCornerPosition(domCanvas, x, y)).toEqual({ x: relX, y: relY });
            }
        }
    });

    it("getNearestCornerPosition throws errors if passed incompatible data", () => {
        const goodCanvas = createCanvas(100, 100);
        expect(() => getNearestCornerPosition(goodCanvas, 25, [])).toThrow(TypeError);
        expect(() => getNearestCornerPosition(goodCanvas, [], 25)).toThrow(TypeError);
        expect(() => getNearestCornerPosition({}, 25, 25)).toThrow(TypeError);
    });

    it("the canvas produces different data URLs when drawn on and when clearCanvas is called", () => {
        const mockCanvas = createCanvas(100, 100)
        const startUrl = mockCanvas.toDataURL();

        mockCanvas.getBoundingClientRect = jest.fn(() => ({
            top: 0,
            left: 0,
            width: 100,
            height: 100
        }));

        const ctx = mockCanvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.stroke();
        const drawnUrl = mockCanvas.toDataURL();
        
        clearCanvas(mockCanvas);
        const endUrl = mockCanvas.toDataURL();

        expect(startUrl).toEqual(endUrl);
        expect(drawnUrl).not.toEqual(endUrl);
    });

    it("clearCanvas throws an error if the canvas does not have a getContext property", () => {
        expect(() => clearCanvas({})).toThrow(TypeError);
    })
});

import { JSDOM } from "jsdom";

import HeaderCanvasController from "../../../src/utils/HeaderCanvasController";

describe("headerCanvasController", () => {
    let dom;
    let domCanvas;
    let CanvasController;

    beforeEach(() => {
        dom = new JSDOM("<canvas />");
        domCanvas = dom.window.document.querySelector("canvas");
        domCanvas.getBoundingClientRect = jest.fn(() => ({
            top: 50,
            left: 100,
            height: 200,
            width: 150,
        }));
        CanvasController = new HeaderCanvasController(domCanvas)
    });
    
    it("HeaderCanvasController will get the dimensions of the canvas it's instantiated with", () => {
        expect(CanvasController.top).toBe(50);
        expect(CanvasController.left).toBe(100);
        expect(CanvasController.width).toBe(150);
        expect(CanvasController.height).toBe(200);
        expect(CanvasController.canvas).toBe(domCanvas);
    });

    it("HeaderCanvasController will throw an error if instantiated with something that doesn't have a getBoundingClientRect method", () => {
        expect(() => new HeaderCanvasController()).toThrow(TypeError);
        expect(() => new HeaderCanvasController([])).toThrow(TypeError);
    })

    it("HeaderCanvasController will get the known nearest corners position for known values", () => {
        const mouseCoords = [
            { x: 100, y: 50, relX: 0, relY: 0 },
            { x: 250, y: 50, relX: 300, relY: 0 },
            { x: 250, y: 250, relX: 300, relY: 150 },
            { x: 100, y: 250, relX: 0, relY: 150 }
        ];
        for (let i = 0; i < mouseCoords.length; i++) {
            const { x, y, relX, relY } = mouseCoords[i];
            expect(CanvasController.getNearestCornerPosition(x, y)).toEqual({ x: relX, y: relY });
        }
    });
});
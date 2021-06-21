import { shallowMount } from "@vue/test-utils";

import { gameStateEnum, gameOutcomeEnum } from "../../../src/utils/enums";
import { namedColorsAndHexes } from "../../../src/utils/namedColors.js";

import TheGame from "../../../src/components/special/TheGame/TheGame.vue";

describe("TheGame.vue", () => {
    let mountedWrapper;
    let wrapper;
    const NAMED_COLOR_HEXES = Object.values(namedColorsAndHexes);

    beforeEach(() => {
        wrapper = shallowMount(TheGame);
    });

    it("usedColors will return a set even if cards is an empty array", () => {
        expect(wrapper.componentVM.usedColors).toBeInstanceOf(Set);
        wrapper.setData({ cards: [] });
        expect(wrapper.componentVM.usedColors).toBeInstanceOf(Set)
    });

    it("availableColors will return all colors not used by cards", () => {
        let usedColors, unusedColors;
        function calibrateVariables() {
            usedColors = wrapper.componentVM.cards.map(c => c.color);
            unusedColors = NAMED_COLOR_HEXES.filter(c => !usedColors.includes(c));
        }
        calibrateVariables();
        expect(wrapper.componentVM.availableColors).toEqual(unusedColors);
        
        for (let i = 0; i < 100; i++) {
            wrapper.setData({ cardTotal: Math.floor(Math.random() * 40) + 10 });
            calibrateVariables();
            expect(wrapper.componentVM.availableColors).toEqual(unusedColors);
        }
    });
    
    it("guessesLeft will return max guesses minus guess count", () => {
        let maxGuesses = wrapper.componentVM.maxGuesses,
            guessCount = wrapper.componentVM.guessCount;
        expect(wrapper.componentVM.guessesLeft).toEqual(maxGuesses - guessCount);

        for (let i = 0; i < 100; i++) {
            maxGuesses = Math.floor(Math.random() * 50);
            guessCount = Math.floor(Math.random() * 50);
            wrapper.setData({ maxGuesses, guessCount });
            expect(wrapper.componentVM.guessesLeft).toEqual(maxGuesses - guessCount);
        }
    });

    it("game state computed properties will return the correct values based on their name", () => {
        wrapper.setData({ gameState: gameStateEnum.started });
        expect(wrapper.componentVM.gameOngoing).toBe(true);
        expect(wrapper.componentVM.gameStarted).toBe(true);
        expect(wrapper.componentVM.gameCanBePausedOrEnded).toBe(true);

        wrapper.setData({ gameState: gameStateEnum.paused });
        expect(wrapper.componentVM.gameOngoing).toBe(true);
        expect(wrapper.componentVM.gameStarted).toBe(false);
        expect(wrapper.componentVM.gameCanBePausedOrEnded).toBe(true);
        
        wrapper.setData({ gameState: gameStateEnum.ended });
        expect(wrapper.componentVM.gameOngoing).toBe(false);
        expect(wrapper.componentVM.gameStarted).toBe(false);
        expect(wrapper.componentVM.gameCanBePausedOrEnded).toBe(false);
    });

    it("game outcome computed properties will return the correct values based on their name", () => {
        wrapper.setData({ gameOutcome: gameOutcomeEnum.undecided });
        expect(wrapper.componentVM.gameWonOrLost).toBe(false);
        expect(wrapper.componentVM.gameWon).toBe(false);
        expect(wrapper.componentVM.gameLost).toBe(false);

        wrapper.setData({ gameOutcome: gameOutcomeEnum.victory });
        expect(wrapper.componentVM.gameWonOrLost).toBe(true);
        expect(wrapper.componentVM.gameWon).toBe(true);
        expect(wrapper.componentVM.gameLost).toBe(false);
        
        wrapper.setData({ gameOutcome: gameOutcomeEnum.defeat });
        expect(wrapper.componentVM.gameWonOrLost).toBe(true);
        expect(wrapper.componentVM.gameWon).toBe(false);
        expect(wrapper.componentVM.gameLost).toBe(true);
    });
});
import { shallowMount } from "@vue/test-utils";
import HoverModal from "../../../../src/components/general/HoverModal.vue";

describe("HoverModal.vue", () => {
    let wrapper;
    // To make window.matchMedia work
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

    beforeEach(() => {
        wrapper = shallowMount(HoverModal);
    });

    it("creates the dialog if the mouse hovers over the span", async () => {
        await wrapper.find(".container__span").trigger("mouseenter");
        expect(wrapper.find(".container__modal").exists()).toBe(true);
    });

    it("does not create the dialog if the mouse doesn't over the span", () => {
        expect(wrapper.find(".container__modal").exists()).toBe(false);
    });

    it("creates the dialog if the mouse hovers over the span and then removes it if the mouse leaves", async () => {
        expect(wrapper.find(".container__modal").exists()).toBe(false);

        await wrapper.find(".container__span").trigger("mouseenter");
        expect(wrapper.find(".container__modal").exists()).toBe(true);

        await wrapper.find(".container__span").trigger("mouseleave");
        expect(wrapper.find(".container__modal").exists()).toBe(false);
    });
});

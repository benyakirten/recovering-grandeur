import { shallowMount } from "@vue/test-utils";
import ColorPicker from "../../../../src/components/inputs/ColorPicker.vue";

describe("ColorPicker.vue", () => {
    let wrapper;
    let textInput;
    let colorInput;

    beforeEach(() => {
        wrapper = shallowMount(ColorPicker, { props: { color: "#abcdef" } });
        textInput = wrapper.find(".picker__text-input");
        colorInput = wrapper.find(".picker__color-input");
    })

    it("the text input and the color input have the same value", () => {
        expect(textInput.element.value).toEqual(colorInput.element.value);
    });

    it("emits the new color value on either input or pressing enter on the text input", async () => {
        const input1 = "#123456"
        const input2 = "#654321";
        const input3 = "#fedcba";

        textInput.element.value = input1;
        await textInput.trigger("input");

        textInput.element.value = input2;
        await textInput.trigger("keyup", {
            key: "enter"
        });

        colorInput.element.value = input3;
        await colorInput.trigger("input");

        expect(wrapper.emitted()["emit-color"].length).toBe(3);
        expect(wrapper.emitted()["emit-color"][0]).toEqual([input1]);
        expect(wrapper.emitted()["emit-color"][1]).toEqual([input2]);
        expect(wrapper.emitted()["emit-color"][2]).toEqual([input3]);
    });

    it("validates the color prop to be # and a 3 or 6 digit hex string", () => {
        const { validator } = ColorPicker.props.color;
        expect(validator("#abcdef")).toBe(true);
        expect(validator("#ccc")).toBe(true);
        expect(validator("abcdef")).toBe(false);
        expect(validator("")).toBe(false);
        expect(validator([])).toBe(false);
    });
});
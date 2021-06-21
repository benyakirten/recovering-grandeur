import { shallowMount } from "@vue/test-utils";
import RangeSlider from "../../../../src/components/inputs/RangeSlider.vue";

describe("RangeSlider.vue", () => {
    let wrapper;
    let numberInput;
    let rangeInput;
    const min = 0;
    const max = 150;
    const variable = 50;
    const step = 5;

    beforeEach(() => {
        wrapper = shallowMount(RangeSlider, {
            props: {
                min,
                max,
                variable,
                step,
                name: "test"
            },
        });
        numberInput = wrapper.find(".range-input__number-input");
        rangeInput = wrapper.find(".range-input__range");
    });

    it("will initialize the value of the number and range inputs as the value of variable as a string", () => {
        expect(numberInput.element.value).toEqual(variable.toString());
        expect(rangeInput.element.value).toEqual(variable.toString());
    });

    it("the number input and the range input have the same value", () => {
        expect(numberInput.element.value).toEqual(rangeInput.element.value);
    });

    it("emits the new number value on either input or pressing enter on the number input", async () => {
        const input1 = 10;
        const input2 = 20;
        const input3 = 30;

        numberInput.element.value = input1;
        await numberInput.trigger("input");

        numberInput.element.value = input2;
        await numberInput.trigger("keydown", {
            key: "Enter"
        });

        rangeInput.element.value = input3;
        await rangeInput.trigger("input");

        expect(wrapper.emitted()["emit-number"].length).toBe(3);
        expect(wrapper.emitted()["emit-number"][0]).toEqual([input1]);
        expect(wrapper.emitted()["emit-number"][1]).toEqual([input2]);
        expect(wrapper.emitted()["emit-number"][2]).toEqual([input3]);
    });

    it("emits the appropriate value on the correct ARIA inputs", async () => {
        await numberInput.trigger("keydown", { key: "ArrowRight" });
        await numberInput.trigger("keydown", { key: "ArrowUp" });
        await numberInput.trigger("keydown", { key: "ArrowLeft" });
        await numberInput.trigger("keydown", { key: "ArrowDown" });
        await numberInput.trigger("keydown", { key: "Home" });
        await numberInput.trigger("keydown", { key: "End" });
        await numberInput.trigger("keydown", { key: "PageUp" });
        await numberInput.trigger("keydown", { key: "PageDown" });

        expect(wrapper.emitted()["emit-number"].length).toBe(8);
        expect(wrapper.emitted()["emit-number"][0]).toEqual([variable + step]);
        expect(wrapper.emitted()["emit-number"][1]).toEqual([variable + step]);
        expect(wrapper.emitted()["emit-number"][2]).toEqual([variable - step]);
        expect(wrapper.emitted()["emit-number"][3]).toEqual([variable - step]);
        expect(wrapper.emitted()["emit-number"][4]).toEqual([min]);
        expect(wrapper.emitted()["emit-number"][5]).toEqual([max]);
        expect(wrapper.emitted()["emit-number"][6]).toEqual([variable + step * 10]);
        expect(wrapper.emitted()["emit-number"][7]).toEqual([variable - step * 10]);
    });

    it("doesn't emit the number on range input enter if it's less than the min, more than the max or not divisible by the step", async () => {
        rangeInput.element.value = 200;
        await rangeInput.trigger("input");
        expect(wrapper.emitted()["emit-number"]).toBeUndefined();

        rangeInput.element.value = -100;
        await rangeInput.trigger("input");
        expect(wrapper.emitted()["emit-number"]).toBeUndefined();

        rangeInput.element.value = 50.5;
        await rangeInput.trigger("input");
        expect(wrapper.emitted()["emit-number"]).toBeUndefined();
    });
});

import { shallowMount } from "@vue/test-utils";
import RangeSlider from "../../../../src/components/inputs/RangeSlider.vue";

describe("RangeSlider.vue", () => {
    let wrapper;
    let numberInput;
    let rangeInput;

    beforeEach(() => {
        wrapper = shallowMount(RangeSlider, {
            props: {
                min: 0,
                max: 100,
                variable: 50,
                step: 10,
            },
        });
        numberInput = wrapper.find(".range-input__number-input");
        rangeInput = wrapper.find(".range-input__range");
    });

    it("the number input and the range input have the same value", () => {
        expect(numberInput.element.value).toEqual(rangeInput.element.value);
    });

    it("emits the new number value on either input or pressing enter on the number input", async () => {
        const input1 = 10
        const input2 = 20;
        const input3 = 30

        numberInput.element.value = input1;
        await numberInput.trigger("input");

        numberInput.element.value = input2;
        await numberInput.trigger("keyup", {
            key: "enter"
        });

        rangeInput.element.value = input3;
        await rangeInput.trigger("input");

        expect(wrapper.emitted()["emit-number"].length).toBe(3);
        expect(wrapper.emitted()["emit-number"][0]).toEqual([input1]);
        expect(wrapper.emitted()["emit-number"][1]).toEqual([input2]);
        expect(wrapper.emitted()["emit-number"][2]).toEqual([input3]);
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

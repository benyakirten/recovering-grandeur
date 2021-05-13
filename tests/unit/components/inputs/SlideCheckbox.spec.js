import { shallowMount } from "@vue/test-utils";
import SlideCheckbox from "../../../../src/components/inputs/SlideCheckbox.vue";

describe("SlideCheckbox.vue", () => {
    let wrapper;
    let input;
    let label;

    beforeEach(() => {
        wrapper = shallowMount(SlideCheckbox, { props: { property: true } });
        input = wrapper.find(".input-container__checkbox");
        label = wrapper.find(".input-container__label");
    });

    it("emits toggle-checked if the label is clicked", async () => {
        const { randomId } = wrapper.componentVM;
        await label.trigger("click");
        expect(wrapper.emitted()["toggle-checked"].length).toBe(1);
        expect(wrapper.emitted()["toggle-checked"][0]).toEqual([randomId]);
    });

    it("the input's checked property is equal to the property prop", () => {
        expect(input.element.checked).toEqual(wrapper.componentVM.property);

        const wrapperTwo = shallowMount(SlideCheckbox, {
            props: { property: true },
        });
        expect(
            wrapperTwo.find(".input-container__checkbox").element.checked
        ).toEqual(wrapperTwo.componentVM.property);
    });
});

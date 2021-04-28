import { shallowMount } from "@vue/test-utils";
import HoverModal from "../../../../src/components/general/HoverModal.vue";

describe("HoverModal.vue", () => {
  it("exists", () => {
    expect(shallowMount(HoverModal).exists()).toBe(true);
  });
  it("does not show the modal when the hover item isn't hovered", () => {
    const wrapper = shallowMount(HoverModal);
    const modal = wrapper.find(".container__modal");
    expect(modal.exists()).toBe(false);
  })
  // it("shows the modal when the hover item is hovered", async () => {
  //   const wrapper = shallowMount(HoverModal);
  //   const hoverable = wrapper.find(".container__span");
  //   await hoverable.trigger("mouseover");
  //   const modal = wrapper.find(".container__modal");
  //   expect(modal.exists()).toBe(true);
  // });
  // it("hides the modal when the mouse hovers then leaves the hover item", async () => {
  //   const wrapper = shallowMount(HoverModal);
  //   const hoverable = wrapper.find(".container__span");
  //   const modal = wrapper.find(".container__modal");
  //   await hoverable.trigger("mouseover");
  //   await hoverable.trigger("mouseleave");
  //   expect(modal.exists()).toBe(false);
  // })
});

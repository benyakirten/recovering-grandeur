import { shallowMount } from "@vue/test-utils";
import BaseFoldout from "../../../../src/components/ui/BaseFoldout.vue";

describe("BaseFoldout.vue", () => {
    it("creates the foldout if showContent and enableContent are true", () => {
        const props = {
            showContent: true,
            enableContent: true
        };
        const wrapper = shallowMount(BaseFoldout, { props });
        expect(BaseFoldout.computed.showDropdownContent.call(props)).toBe(true);
        expect(wrapper.find(".content").exists()).toBe(true);
    });

    it("doesn't the foldout if showContent is false, even if the top bar is clicked", async () => {
        const props = {
            showContent: false,
            enableContent: true
        };
        const wrapper = shallowMount(BaseFoldout, { props });
        expect(BaseFoldout.computed.showDropdownContent.call(props)).toBe(false);
        expect(wrapper.find(".content").exists()).toBe(false);

        await wrapper.find(".top-bar").trigger("click");
        expect(wrapper.find(".content").exists()).toBe(false);
    });

    it("doesn't the foldout if enableContent is false, even if the top bar is clicked", async () => {
        const props = {
            showContent: true,
            enableContent: false
        };
        const wrapper = shallowMount(BaseFoldout, { props });
        expect(BaseFoldout.computed.showDropdownContent.call(props)).toBe(false);
        expect(wrapper.find(".content").exists()).toBe(false);

        await wrapper.find(".top-bar").trigger("click");
        expect(wrapper.find(".content").exists()).toBe(false);
    });

    it("emits broadcast-click if enableContent is true and the top bar is clicked", async () => {
        const props = {
            showContent: false,
            enableContent: true
        };
        const wrapper = shallowMount(BaseFoldout, { props });
        await wrapper.find(".top-bar").trigger("click");
        expect(wrapper.emitted()["broadcast-click"][0]).toEqual([wrapper.componentVM.name]);
    });

    it("doesn't emit broadcast-click if enableContent is false and the top bar is clicked", async () => {
        const props = {
            showContent: true,
            enableContent: false,
            name: Math.random().toString()
        };
        const wrapper = shallowMount(BaseFoldout, { props });
        await wrapper.find(".top-bar").trigger("click");
        expect(wrapper.emitted()["broadcast-click"]).toBeUndefined();
    });
});
import { shallowMount } from "@vue/test-utils";
import DragAndDropLists from "../../../../src/components/inputs/DragAndDropLists.vue";

describe("placeholder", () => {
    let wrapper;
    let leftList;
    let rightList;
    let items;
    const simpleArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const leftListItems = simpleArray.slice(0, Math.floor(simpleArray.length / 2));
    const rightListItems = simpleArray.slice(Math.floor(simpleArray.length / 2));

    beforeEach(() => {
        wrapper = shallowMount(DragAndDropLists, {
            props: {
                firstList: leftListItems,
                secondList: rightListItems
            }
        });
        leftList = wrapper.find("#left-list");
        rightList = wrapper.find("#right-list");
        items = wrapper.findAll(".list-container__list__item");
    });

    it("renders as many divs as there are items in the lists", () => {
        expect(items.length).toEqual(simpleArray.length);
    });

    it("emits an event with the data of an item if it is clicked", async () => {
        const triggered = [];

        for (let i = 0; i < 100; i++) {
            const idx = Math.floor(Math.random() * simpleArray.length);
            await items[idx].trigger("click");
            triggered.push({
                item: items[idx].text(),
                list: items[idx].element.parentElement.id
            });
        }
        const leftListTriggers = wrapper.emitted()['to-right-list'];
        const rightListTriggers = wrapper.emitted()['to-left-list'];
        const triggeredLeft = triggered.filter(t => t.list === 'left-list');
        const triggeredRight = triggered.filter(t => t.list === 'right-list')

        expect(leftListTriggers.length + rightListTriggers.length).toEqual(triggered.length);
        expect(leftListTriggers.length).toEqual(triggeredLeft.length);
        expect(rightListTriggers.length).toEqual(triggeredRight.length);
        
        for (let j = 0; j < leftListTriggers.length; j++) {
            expect(leftListTriggers[j][0]).toEqual(+triggeredLeft[j].item);
        }
        for (let k = 0; k < rightListTriggers.length; k++) {
            expect(rightListTriggers[k][0]).toEqual(+triggeredRight[k].item);
        }
    });
});
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "../../src/App.vue";

const localVue = createLocalVue();
localVue.use(Vuex)

describe("App.vue", () => {
  let breakpointModule;
  let breakpointActions;
  let breakpointGetters;

  let clickAnimationModule;
  let clickAnimationGetters;

  let linksModule;
  let linksActions;
  let linksGetters;

  let settingsModule;
  let settingsActions;
  let settingsGetters;

  beforeEach(() => {
    breakpointActions = {
      incrementBreakpoint: jest.fn(),
      stopClickWave: jest.fn()
    };
    breakpointGetters = {
      breakpoint: () => 90,
      makeClickWave: jest.fn()
    };
    breakpointModule = {
      actions: breakpointActions,
      getters: breakpointGetters
    };

    clickAnimationGetters = {
      clickAnimationLength: () => 500,
      clickAnimationLengthVariation: () => 100,
      clickAnimationColor: () => "#c69963",
      clickAnimationRadius: () => 10
    };
    clickAnimationModule = {
      getters: clickAnimationGetters
    };

    linksActions = {
      enlivenLinks: jest.fn()
    };
    linksGetters = {
      getEnabledTransitions: [
        { name: "slide-right", enabled: true },
        { name: "slide-left", enabled: true },
        { name: "fade", enabled: true },
        { name: "scale", enabled: true },
        { name: "mix-slide-left-fade", enabled: true }
      ]
    };
    linksModule = {
      actions: linksActions,
      getters: linksGetters
    };

    settingsActions = {
      loadAllSettings: jest.fn()
    };
    settingsGetters = {
      clickAnimationEnabled: () => true
    };
    settingsModule = {
      actions: settingsActions,
      getters: settingsGetters
    };
    
    new Vuex.Store({
      modules: {
        breakpoint: breakpointModule,
        clickAnimation: clickAnimationModule,
        links: linksModule,
        settings: settingsModule
      }
    });
  })

  it("renders", () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.exists()).toBe(true);
  });
});

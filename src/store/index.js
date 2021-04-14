import { createStore } from "vuex";

import breakpointModule from "./breakpoint";
import clickAnimationModule from "./clickAnimation";
import colorSchemeModule from "./colorScheme";
import headerCanvasModule from "./headerCanvas";
import linksModule from "./links";
import settingsModule from "./settings";

export default createStore({
  modules: {
    breakpoint: breakpointModule,
    clickAnimation: clickAnimationModule,
    colorScheme: colorSchemeModule,
    headerCanvas: headerCanvasModule,
    links: linksModule,
    settings: settingsModule
  }
});

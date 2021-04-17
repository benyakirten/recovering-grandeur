export default {
  breakpointEnabled({ breakpointEnabled }) {
    return breakpointEnabled;
  },
  clickAnimationEnabled({ clickAnimationEnabled }) {
    return clickAnimationEnabled;
  },
  headerCanvasEnabled({ headerCanvasEnabled }) {
    return headerCanvasEnabled;
  },
  headerCanvasRandomizeColorsEnabled({ headerCanvasRandomizeColorsEnabled }) {
    return headerCanvasRandomizeColorsEnabled;
  },
  whichDropdownIsOpen({ dropdownOpen }) {
    return dropdownOpen;
  },
  defaultSettings() {
    return {
      breakpointEnabled: true,
      clickAnimationEnabled: true,
      headerCanvasEnabled: true,
      headerCanvasRandomizeColorsEnabled: true,
      dropdownOpen: null
    };
  }
};

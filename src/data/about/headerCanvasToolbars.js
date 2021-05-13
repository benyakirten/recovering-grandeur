export default {
  headerCanvasToolbar: `The header canvas displays the circles when hovering over a link.
  Though its inefficiency is the point, disabling it will improve
  performance.`,
  randomizeColorsToolbar: `The header canvas radiates concentric circles in gradations from the start
  color to the end color. At the end of each flash, the beginning and end
  colors are randomized if this option is enabled.`,
  radiusDeltaToolbar: `Despite what its name may seem to indicate, radius delta controls how much
  the radius of the header canvas radiation grows (which comes at a fixed
  rate). Therefore, it changes the speed of the radiation; a greater delta
  will produce faster movement, lesser delta will do the reverse.
  Note: the rapidity of movement grows exponentially, so 1. a small change has a big impact
  and 2. a value has to be over 1 for it to work.`,
  concentricCirclesToolbar: `The amount of concentric circles indicates how thick the canvas's radiation is.`
};

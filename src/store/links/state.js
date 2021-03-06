export default () => ({
  links: [
    { link: "/", name: "Home", live: true },
    { link: "/pricing", name: "Solutions and Pricing", live: true },
    { link: "/quality", name: "Quality of Care", live: true },
    { link: "/meet-us", name: "Meet Us", live: true },
    { link: "/about", name: "About & Settings", live: true }
  ],
  hiddenLinks: [{ link: "/games", name: "Games", live: true }],
  buttonAction: null,
  anchorId: null,
  transitions: [
    { name: "slide-right", enabled: true },
    { name: "slide-left", enabled: true },
    { name: "fade", enabled: true },
    { name: "scale", enabled: true },
    { name: "mix-slide-left-fade", enabled: true }
  ]
});

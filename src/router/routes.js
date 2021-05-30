import Home from "../views/home/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      headerDefault: true
    }
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/pricing/Pricing"),
    meta: {
      title: "Solutions and Pricing",
      headerBackgroundColorDefault: "#2c2c2c",
      headerLinkColorDefault: "#7ed56f",
      headerOpacityDefault: 0.5
    }
  },
  {
    path: "/quality",
    name: "Quality",
    component: () => import("../views/quality/Quality"),
    meta: {
      title: "Quality of Care",
      headerBackgroundColorDefault: "#2c2c2c",
      headerLinkColorDefault: "#2998ff",
      headerOpacityDefault: 0.6
    }
  },
  {
    path: "/meet-us",
    name: "MeetUs",
    component: () => import("../views/meet-us/MeetUs"),
    meta: {
      title: "Meet Us",
      headerBackgroundColorDefault: "#2c2c2c",
      headerLinkColorDefault: "#ff7730",
      headerOpacityDefault: 0.4
    }
  },
  {
    path: "/about",
    name: "AboutSettings",
    component: () => import("../views/about/About.vue"),
    meta: {
      title: "About & Settings",
      headerDefault: true
    }
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/games/Games.vue"),
    meta: {
      title: "Play a game with me",
      headerDefault: true
    }
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("../views/not-found/NotFound"),
    meta: {
      title: "Page Not Found",
      headerDefault: true
    }
  }
];

export default routes;

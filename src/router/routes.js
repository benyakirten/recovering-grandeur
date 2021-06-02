import Home from "../views/home/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      description: `The website of a fictional hospital
        Recovering Grandeur that accompanies the book, Delusions of Form`,
      headerDefault: true
    }
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/pricing/Pricing"),
    meta: {
      title: "Solutions and Pricing",
      description: `A page that describes how much Recovering Grandeur
        cares about you as long as you can pay`,
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
      description: `Recovering Grandeur's former patients talk about
        the quality of their care`,
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
      description: `A few of Recovering Grandeur's workers talk about who
        they are and what they do so you can get to know them`,
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
      description: `Read about the purpose of this website and
        control most every background setting`,
      headerDefault: true
    }
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/games/Games.vue"),
    meta: {
      title: "Play a game with me",
      description: `The ghost of Recovering Grandeur wants some company. Play a game of
        memory and enjoy the time you have`,
      headerDefault: true
    }
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("../views/not-found/NotFound"),
    meta: {
      title: "Page Not Found",
      description: `404 page for links`,
      headerDefault: true
    }
  }
];

export default routes;

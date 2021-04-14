import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";
import beforeEach from "./beforeEach";
import afterEach from "./afterEach";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Loop through all middleware in before/afterEach
// and enable them
router.beforeEach((to, from, next) => {
  Object.values(beforeEach).forEach(fn => fn(to, from, next));
  next();
});

router.afterEach((to, from) => {
  Object.values(afterEach).forEach(fn => fn(to, from));
});

export default router;

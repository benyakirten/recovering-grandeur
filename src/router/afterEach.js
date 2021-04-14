const DEFAULT_TITLE = "Recovering Granduer";

// Set title of each document based on meta property
const afterEach = {
  setTitle(to) {
    document.title = `${to.meta.title || DEFAULT_TITLE}
      - Recovering Grandeur`;
  }
};

export default afterEach;

# Recovering Grandeur

## How to install/run/etc:
### Project setup
> yarn install / npm install
### Compile
> yarn serve / npm run serve
### Build
> yarn build / npm run build
### Run your unit tests
> yarn test:unit / npm run test:unit
> NOTE: Test coverage was severely limited because my version of @vue/test-utils was not able to use the createLocalVue function. Therefore, any components that used the router/store could not be tested. Tests include only a few Vue components and but all the util functions and classes written in JavaScript.
> These were the only components that made sense to write test coverage for:
> * General: HoverModal
> * Inputs: ColorPicker, DragAndDropLists, RangeSlider, SlideCheckbox (NOTE: Testing drag and drop functionality isn't easy, so DropAndDropLists isn't tested extensively)
> * UI: BaseFoldout

## What is this website?
It is written to accompany my (at this point) upcoming book, A Brief Recovery. The website provides a cursory introduction to the story of the book, but its main emphasis is on its functionality: a 'ghost' that, based on certian criteria and random chance, changes the website.

Since I learned programming, I've wanted to create somethign that could (at least loosely) be called art on the computer. I'm not talking about pretty pictures or whatever but something with meaning. It's something that I find lacking in, especially, webpages besides many other sectors of programming. I want to convey, along with the book, the theme of mental impermanence, as in the world, what we conceive of it and even our personality is hardly as permanent as we would like it to be.

## How does it work?
Superficially, this is a somewhat-shoddily made corporate website (that I made using Vue). On it (thematically because the corporate overlords are out of touch), there are a number of superfluous features. A circle expands from wherever the user clicks. The header will show waves of expanding circles when moused over. There's a hidden score called the breakpoint. These (and their properties) can all be modified from the about page--the only page relatively safe from the 'ghost'.

Otherwise, breakpoint grows over time and as pages are changed. The higher it is, the more likely for certain events to occur (possible actions are under src/utils/enums.js, how they work is in src/store/breakpoint/actions.js lines 67-224). Other actions occur inside of the components, such as the hero splash image gainin random filter properties.

## Structure of the files

Inside of the source folder, the folders are the folowing:

1. assets - Mostly SVGs, to reduce space and to be more easily manipulable.
2. components - stateless or with limited state (TheHeader.vue being the only one with a good amount of state)
3. data - various strings of text that are imported to the views
4. router - beforeEach and afterEach functions are separated into their own files. Because there isn't any authentication or any need to protect pages, there are no watches/auth guards. The pages' meta data is to configure settings on each page.
5. scss - functions, mixins and variables accessible to every file (c.f. vue.config.js). Note: if any styles are defined outside of functions/mixins/variables, they'll be prepended to EVERY component, so only include scss items that are only included on demand.
6. styles - Animations, base and global styles and scene transitions for router views are imported into app.scss, which is imported into App.vue (the src for the style section).
7. utils - various functions that can are either used multiple times in components or to simplify component logic (notably the header with its color changes)
8. views - stateful components that the routes lead to, composed of the non-stateful components. Each uses BaseLayout for its design and a BaseBackground with a HeroText as the the first item viewed.

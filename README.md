# @vticonsulting/scratch

- Nuxt 2.4.5
- Tailwind CSS 1.0.0-beta.1

# Linting / Editor Config

- JS Standard  (ES5 trailing commas, single quotes, 2 spaces)
- 

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Link to local packages

```sh
$ git clone <pkgurl>
$ cd <pkgname>
$ npm link
$ cd ../site
$ npm link <pkgname>
```


## Sarah Drasner's SVG Animations

### Tools and Tips

- Ease Visualizer

### Hot Easing Tip

Despite what their names might suggest, `.easeOut` is actually really good for entrances `.easeIn` is great for exits, and I tend to use `.easeInOut` sparingly, often for intermediary states.

_In_ and _out_ in easing refer to the beginning and end of the animation, and you want the "easy" (slower) part of the animation to be the apart that's closer to the resting state of the object (the end for entrances, the beginning for exits), with faster motion as it moves offscreen.

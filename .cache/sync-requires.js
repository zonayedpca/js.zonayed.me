const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zonayedpca/Desktop/Workspace/zonayedpca/js.zonayed.me/src/pages/404.js")))
}


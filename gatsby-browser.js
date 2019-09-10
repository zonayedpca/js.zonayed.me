/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const NProgress = require('nprogress')

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  NProgress.start()
}

exports.onRouteUpdateDelayed = () => {
  NProgress.start()
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  NProgress.done()
}

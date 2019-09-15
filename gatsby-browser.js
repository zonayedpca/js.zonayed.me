const NProgress = require('nprogress')

exports.onPreRouteUpdate = () => {
  NProgress.start()
}

exports.onRouteUpdateDelayed = () => {
  NProgress.start()
}

exports.onRouteUpdate = () => {
  NProgress.done()
}

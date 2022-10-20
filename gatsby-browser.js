const NProgress = require('nprogress')
const { fromPathTo } = require('./helpers')

exports.onPreRouteUpdate = ({ location }) => {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      if (!!registration) {
        console.log('unregistering service worker, bye bye...')
        registration.unregister()
      }
    }
  })

  const pathname = window.location.pathname

  const paths = fromPathTo()

  if (paths[pathname]) {
    console.log('reidrecting to...', paths[pathname])
    window.location.replace(paths[pathname])
  } else {
    window.location.replace(paths['/'])
  }
  NProgress.start()
}

exports.onRouteUpdateDelayed = () => {
  NProgress.start()
}

exports.onRouteUpdate = () => {
  NProgress.done()
}

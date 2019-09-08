/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const homePageTemplate = path.resolve('src/templates/HomePage.js')
  return new Promise(async (resolve, reject) => {
    try {
      //   const { data: basic } = await axios(
      //     'https://with.zonayed.me/wp-json/wp/v2/posts?tags=164&order=asc&per_page=30&fields=id,title'
      //   )
      //   const { data: advance } = await axios(
      //     'https://with.zonayed.me/wp-json/wp/v2/posts?tags=158&order=asc&per_page=30&fields=id,title'
      //   )
      //   const { data: es6 } = await axios(
      //     'https://with.zonayed.me/wp-json/wp/v2/posts?tags=150&order=asc&per_page=30&fields=id,title'
      //   )
      //   const { data: dom } = await axios(
      //     'https://with.zonayed.me/wp-json/wp/v2/posts?tags=194&order=asc&per_page=30&fields=id,title'
      //   )
      //   const { data: daily } = await axios(
      //     'https://with.zonayed.me/wp-json/wp/v2/posts?tags=168&order=asc&per_page=30&fields=id,title'
      //   )
      //   const { data: algods } = await axios(
      //     'https://with.zonayed.me/wp-json/wp/v2/posts?tags=200&order=asc&per_page=30&fields=id,title'
      //   )
      const { data: soft } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=166&order=asc&per_page=30&fields=id,title'
      )
      const data = {
        // basic,
        // advance,
        // es6,
        // dom,
        // daily,
        // algods,
        soft,
      }
      return resolve(data)
    } catch (err) {
      return reject(err)
    }
  }).then(res => {
    if (res.errors) {
      return reject('An Error Occured')
    }
    createPage({
      path: `/`,
      context: {
        data: 'Hello World!',
      },
      component: homePageTemplate,
    })
    const categories = Object.keys(res)
    console.log(categories)
  })
}

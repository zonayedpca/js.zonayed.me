/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const homePageTemplate = path.resolve('src/templates/HomePage.js')
  const topicPageTemplate = path.resolve('src/templates/TopicPage.js')
  const postPageTemplate = path.resolve('src/templates/PostPage.js')
  return new Promise(async (resolve, reject) => {
    try {
      const { data: basic } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=164&order=asc&per_page=30'
      )
      const { data: advance } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=158&order=asc&per_page=30'
      )
      const { data: es6 } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=150&order=asc&per_page=30'
      )
      const { data: dom } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=194&order=asc&per_page=30'
      )
      const { data: daily } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=168&order=asc&per_page=30'
      )
      const { data: algods } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=200&order=asc&per_page=30'
      )
      const { data: soft } = await axios(
        'https://with.zonayed.me/wp-json/wp/v2/posts?tags=166&order=asc&per_page=30'
      )
      const data = {
        basic,
        advance,
        es6,
        dom,
        daily,
        algods,
        soft,
      }
      const dataTitle = {
        basic: basic.map(item => ({
          id: item.id,
          title: item.title,
        })),
        advance: advance.map(item => ({
          id: item.id,
          title: item.title,
        })),
        es6: es6.map(item => ({
          id: item.id,
          title: item.title,
        })),
        dom: dom.map(item => ({
          id: item.id,
          title: item.title,
        })),
        daily: daily.map(item => ({
          id: item.id,
          title: item.title,
        })),
        algods: algods.map(item => ({
          id: item.id,
          title: item.title,
        })),
        soft: soft.map(item => ({
          id: item.id,
          title: item.title,
        })),
      }
      return resolve({ dataTitle, data })
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
        data: res.dataTitle,
      },
      component: homePageTemplate,
    })
    Object.keys(res.dataTitle).map(topic => {
      createPage({
        path: `/${topic}`,
        context: {
          data: res.dataTitle[topic],
        },
        component: topicPageTemplate,
      })
      res.data[topic].map(item => {
        createPage({
          path: `/${topic}/${item.id}`,
          context: {
            data: item,
            allData: res.dataTitle,
          },
          component: postPageTemplate,
        })
      })
    })
  })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios')

const BASIC = 'JavaScript-Basic'
const ADVANCE = 'javascript-advance'
const ES6 = 'ES6'
const DOM = 'javascript-dom'
const DAILY = 'JavaScript-Daily'
const ALGODS = 'JavaScript-AlgoDS'
const SOFT = 'JavaScript-Soft'

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const homePageTemplate = path.resolve('src/templates/HomePage.js')
  const topicPageTemplate = path.resolve('src/templates/TopicPage.js')
  const postPageTemplate = path.resolve('src/templates/PostPage.js')
  return new Promise(async (resolve, reject) => {
    try {
      const { data: basic } = await axios(
        `https://with.zonayed.me/api/${BASIC}/index.json`
      )
      const { data: advance } = await axios(
        `https://with.zonayed.me/api/${ADVANCE}/index.json`
      )
      const { data: es6 } = await axios(
        `https://with.zonayed.me/api/${ES6}/index.json`
      )
      const { data: dom } = await axios(
        `https://with.zonayed.me/api/${DOM}/index.json`
      )
      const { data: daily } = await axios(
        `https://with.zonayed.me/api/${DAILY}/index.json`
      )
      const { data: algods } = await axios(
        `https://with.zonayed.me/api/${ALGODS}/index.json`
      )
      const { data: soft } = await axios(
        `https://with.zonayed.me/api/${SOFT}/index.json`
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
          id: item.contentDir,
          title: item.title,
        })),
        advance: advance.map(item => ({
          id: item.contentDir,
          title: item.title,
        })),
        es6: es6.map(item => ({
          id: item.contentDir,
          title: item.title,
        })),
        dom: dom.map(item => ({
          id: item.contentDir,
          title: item.title,
        })),
        daily: daily.map(item => ({
          id: item.contentDir,
          title: item.title,
        })),
        algods: algods.map(item => ({
          id: item.contentDir,
          title: item.title,
        })),
        soft: soft.map(item => ({
          id: item.contentDir,
          title: item.title,
        })),
      }
      return resolve({ dataTitle, data })
    } catch (err) {
      return reject(err)
    }
  })
    .then(res => {
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
        res.data[topic].map((item, index) => {
          const post = `post-${index}`
          createPage({
            path: `/${topic}/${post}`,
            context: {
              id: index,
              data: item,
              allData: res.data,
            },
            component: postPageTemplate,
          })
        })
      })
    })
    .catch(err => {
      console.log(err)
    })
}

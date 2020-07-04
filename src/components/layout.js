/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Intro from './intro'
import './layout.css'
import Footer from './footer'
import Main from './main'
import Notice from './notice'

const Layout = ({ children, home, dataTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Notice />
      <Intro
        home={home}
        dataTitle={dataTitle}
        siteTitle={data.site.siteMetadata.title}
      />
      <div className="contents">
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

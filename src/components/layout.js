import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Intro from './intro'
import './layout.css'
import Footer from './footer'
import Main from './main'

const Layout = ({ children, home, dataTitle }) => {
  const [mode, setMode] = useState(false)

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
    <div data-mode={mode ? 'dark' : 'none'}>
      <Intro
        mode={mode}
        handleMode={setMode}
        home={home}
        dataTitle={dataTitle}
        siteTitle={data.site.siteMetadata.title}
      />
      <div className="contents">
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

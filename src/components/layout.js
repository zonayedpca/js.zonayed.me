/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main
          style={{
            padding: `0 100px`,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `center`,
            padding: `50px 100px`,
            backgroundColor: `#323330`,
            color: `#fff`,
          }}
        >
          <div style={{ flex: 1 }} className="foot">
            <h3>About</h3>
            <p>
              About somethig about me ehatever it is just write something when
              you think it's benefecial for you!
            </p>
          </div>
          <div style={{ flex: 1, display: `flex` }} className="foot">
            <div>
              <h4>For you</h4>
              <ul>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
              </ul>
            </div>
            <div>
              <h4>Resource</h4>
              <ul>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
              </ul>
            </div>
          </div>
          <div style={{ flex: 1 }} className="foot">
            © {new Date().getFullYear()}, Learn with Zonayed
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

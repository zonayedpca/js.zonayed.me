import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import error from '../assets/images/error.svg'

import './404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="খুঁজে পাওয়া যায়নি" />
    redirecting to <a href="https://with.zonayed.me">with.zonayed.me</a>
  </Layout>
)

export default NotFoundPage

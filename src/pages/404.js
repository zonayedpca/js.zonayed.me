import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import error from '../assets/images/error.svg'

import './404.css'

const NotFoundPage = () => (
  <div>
    redirecting to{' '}
    <a href="https://with.zonayed.me/js">
      JavaScript Series by Code with Zonayed
    </a>
  </div>
)

export default NotFoundPage

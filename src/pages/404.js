import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import error from '../assets/images/error.svg'

import './404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="খুঁজে পাওয়া যায়নি" />
    <div className="error-area">
      <div className="img">
        <img alt="page-not-found" src={error} />
      </div>
      <div className="details">
        <p>
          আপনি যে পেইজটি খুঁজছেন তা খুঁজে পাওয়া যায়নি। দয়া করে পুনরায় লিঙ্ক চেক
          করুন অথবা হোমপেজে ফিরে যান।
        </p>
      </div>
      <div className="action">
        <ul>
          <li>
            <Link className="btn btn-home" to="/">
              হোমপেজ
            </Link>
          </li>
          <li>
            <a
              className="btn btn-bug"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zonayedpca/js.zonayed.me/issues"
            >
              বাগ রিপোর্ট
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

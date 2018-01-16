import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kayla Cohn | Software Engineer"
      meta={[
        { name: 'description', content: 'Kayla Cohn Atlanta-based Software Engineer' },
        { name: 'keywords', content: 'Software Engineer. Creator. Problem Solver. Forward-Thinker.' },
      ]}
    />
    <div
      style={{
        display: 'table',
        height: '100vh',
        margin: '0 auto',
        width: '100vw',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

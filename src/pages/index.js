import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'

const IndexPage = () => (
  <div
    style={{
      background: '#f2f2f2',
      textAlign: 'center',
      display: 'table-cell',
      verticalAlign: 'middle',
      width: '100vw'
    }}
  >
    <h1>Kayla Cohn</h1>
    <h3>Atlanta-based Software Engineer</h3>
    <p>Creator. Problem Solver. Forward-Thinker.</p>
    <p>Let's connect through one of the platforms below.</p>
    <a href="https://github.com/kaylacohn"
      style={{color: '#00000091'}}
    >
      <FontAwesome.FaGithub
        size={70}
        style={{paddingRight: '1.5rem'}}
      />
    </a>
    <a href="https://www.linkedin.com/in/kaylacohn/"
      style={{color: '#00000091'}}
    >
      <FontAwesome.FaLinkedinSquare
        size={70}
        style={{paddingRight: '1.5rem'}}
      />
    </a>
    <a href="mailto:kayla.s.cohn@gmail.com"
      style={{color: '#00000091'}}
    >
      <FontAwesome.FaEnvelope
        size={70}
        style={{paddingRight: '1.5rem'}}
      />
    </a>
  </div>
)

export default IndexPage

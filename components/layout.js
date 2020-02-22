import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'sans-serif ma0 pa0'
}

const Layout = ({ title, description, children, className }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head lang='en'>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
      </Head>
      <style global jsx>
        {`
          body {
            background-color: #000;
            color: #fff;
          }

          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
          }
        `}
      </style>
      {children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Layout.defaultProps = {
  title: 'MYHOT.PICS - The hottest animated gifs on the internet',
  description: 'gif things done with a gif management system',
  className: ''
}

export default Layout

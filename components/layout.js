import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'measure center sans-serif ph2',
  header: 'lh-title fw1 f2',
  logo: 'mr2 h3 w3 v-mid',
  footer: 'lh-copy tc'
}

const Layout = ({ title, description, children, className }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <link rel='alternate' type='application/rss+xml' title='melkat.link' href='https://raindrop.io/collection/9554731/feed' />
        <style global jsx>
          {`
            body {
              font-size 0;
              margin: 0 auto;
              padding: 0;
            }
          `}
        </style>
      </Head>
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

/* globals File */
import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

const cx = {
  a: 'bg-center cover dib relative w-50 ma0 fl cv-auto'
}

const Gif = ({ url, title }) => {
  const handleClick = async e => {
    e.preventDefault()
    try {
      fetch(url, { mode: 'no-cors' })
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], `${title}.gif`, { type: blob.type })
          const data = {
            url,
            files: [file]
          }
          navigator.share(data)
        })
        .catch(err => {
          window.alert(err)
          window.location.assign(url)
        })
    } catch (err) {
      window.alert(err)
      window.location.assign(url)
    }
  }

  return (
    <a
      className={cx.a}
      href={url}
      onClick={handleClick}
      title={title}
      style={{
        backgroundImage: `url(${url})`,
        height: '0',
        paddingBottom: '33.33333%'
      }}
    />
  )
}

Gif.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default Gif

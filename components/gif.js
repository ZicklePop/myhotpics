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
    if (navigator.canShare) {
      const res = await fetch(url)
      const blob = await res.blob()
      const file = new File([blob], `${encodeURIComponent(title)}.gif`, { type: blob.type })
      const data = {
        url,
        files: [file]
      }
      if (navigator.canShare(data)) {
        await navigator.share(data)
      } else {
        window.location.assign(url)
      }
    } else {
      window.location.assign(url)
    }
  }

  return (
    <a
      className={cx.a}
      href={url}
      onClick={e => handleClick(e)}
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

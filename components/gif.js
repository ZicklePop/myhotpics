import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  a: 'bg-center cover dib relative w-third ma0 fl'
}

const Gif = ({ url, title }) => (
  <a
    className={cx.a}
    href={url}
    title={title}
    style={{
      backgroundImage: `url(${url})`,
      height: '0',
      paddingBottom: '33.33333%'
    }}
  />
)

Gif.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default Gif

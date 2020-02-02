import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  input: 'input-reset sans-serif border-box bn br0 pa2 ma0 fw1 w-100',
}

const Search = ({ defaultValue }) => (
  <form method="get" action="/">
    <style global jsx>
      {`
        input {
          font-size: 7vw;
          color: #fff;
          background-color: #242424;
        }

        @media (prefers-color-scheme: light) {
          input {
            color: #242424;
            background: #fff;
          }
        }
      `}
    </style>
    <input
      type="text"
      name="q"
      placeholder="HOT PICS"
      defaultValue={defaultValue}
      autofocus="true"
      className={cx.input}
      style={{
        appearance: 'none'
      }}
    />
  </form>
)

Search.propTypes = {
  defaultValue: PropTypes.string
}

Search.defaultProps = {
  defaultValue: ''
}

export default Search

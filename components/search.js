import { useState } from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'

const cx = {
  form: 'relative',
  input: 'input-reset sans-serif border-box bn br0 pv2 fw1 w-100 f1',
  logo: 'dib right-0 top-0 pt2 mt1 pr2 ml1 absolute'
}

const PLACEHOLDER = 'MY HOT. PICS'

const Search = ({ defaultValue }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <form
      className={cx.form}
      method='get'
      action='/'
    >
      <style global jsx>
        {`
          input {
            color: #fff;
            background-color: #000;
            padding-right env(safe-area-inset-right, 0.5rem);
            padding-left: env(safe-area-inset-left, 0.5rem);
          }
          input::placeholder {
            color: #fff;
          }
          @media (prefers-color-scheme: light) {
            input {
              color: #242424;
              background: #fff;
            }
            input::placeholder {
              color: #242424;
            }
          }
        `}
      </style>
      <label
        htmlFor='q'
        style={{
          color: 'transparent',
          fontSize: 0
        }}
      >
        Search for a gif
        <Logo className={`${cx.logo} ${isFocused ? 'o-0' : 'o-100'}`} />
      </label>
      <input
        className={cx.input}
        defaultValue={defaultValue}
        id='q'
        name='q'
        placeholder={PLACEHOLDER}
        type='text'
        style={{
          appearance: 'none'
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </form>
  )
}

Search.propTypes = {
  defaultValue: PropTypes.string
}

Search.defaultProps = {
  defaultValue: ''
}

export default Search

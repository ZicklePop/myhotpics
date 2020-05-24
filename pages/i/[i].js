import React from 'react'
import getObject from '../../scripts/get-object'
import get from 'lodash/get'
import isUndefined from 'lodash/isUndefined'

const Image = () => (<div />)

Image.getInitialProps = async function ({ res, query }) {
  const i = get(query, 'i')
  const buffer = await getObject(i)
  if (isUndefined(buffer)) {
    res.writeHead(301, {
      Location: '../random.gif'
    })
    res.end()
  }
  res.setHeader('Content-Type', 'image/gif')
  res.end(buffer)
}

export default Image

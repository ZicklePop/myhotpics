import React from 'react'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import shuffle from 'lodash/shuffle'

const API = 'https://myhot.pics/api/gifs'

const RandomGif = ({ url }) => {
  if (typeof window !== 'undefined') {
    window.location = url
  }
  return <div />
}

RandomGif.getInitialProps = async function ({ res, query }) {
  const q = get(query, 'q')
  const qs = q ? `?q=${q}` : ''
  const response = await fetch(`${API}${qs}`)
  const data = await response.json()
  let images = get(data, 'images', [])
  if (q) {
    images = shuffle(images)
  }
  const url = get(images, '[0].url')

  if (res) {
    res.writeHead(301, {
      Location: url
    })
    res.end()
  }

  return { url }
}

export default RandomGif

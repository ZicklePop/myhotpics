import React from 'react'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'

const API = 'https://myhot.pics/api/gifs'

const RandomGif = ({ url }) => {
  if (typeof window !== 'undefined') {
    window.location = url
  }
  return <div />
}

RandomGif.getInitialProps = async function ({ res }) {
  const response = await fetch(API)
  const data = await response.json()
  const url = get(data, 'images[0].url')

  if (res) {
    res.writeHead(301, {
      Location: url
    })
    res.end()
  }

  return { url }
}

export default RandomGif

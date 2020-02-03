import React from 'react'
import Gif from '../components/gif'
import Layout from '../components/layout'
import Search from '../components/search'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import useSWR from 'swr'

const API = '/api/gifs'
const fetcher = (url) => fetch(url).then(r => r.json())

const Index = ({ q }) => {
  const query = q ? `?q=${q}` : ''
  const { data } = useSWR(`${API}${query}`, fetcher)

  return (
    <Layout>
      <Search defaultValue={q} />
      {map(get(data, 'images', []), (el, i) => (
        <Gif
          key={`${i}-${el.title}`}
          {...el}
        />
      ))}
    </Layout>
  )
}

Index.getInitialProps = async function ({ query }) {
  return { q: get(query, 'q') }
}

export default Index

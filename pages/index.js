import React from 'react'
import Gif from '../components/gif'
import Layout from '../components/layout'
import Search from '../components/search'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import API from '../scripts/api'

const Index = ({ q, data }) => (
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

Index.getInitialProps = async function ({ query }) {
  const q = get(query, 'q')
  const qs = q ? `?q=${q}` : ''
  const res = await fetch(`${API}${qs}`)
  const data = await res.json()
  return { q, data }
}

export default Index

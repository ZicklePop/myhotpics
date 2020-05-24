import React from 'react'

const Index = () => (<div />)

Index.getInitialProps = async function ({ res }) {
  res.writeHead(301, {
    Location: '../random.gif'
  })
  res.end()
}

export default Index

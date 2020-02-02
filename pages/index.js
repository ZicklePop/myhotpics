import React from 'react'
import Gif from '../components/gif'
import Layout from '../components/layout'
import Search from '../components/search'
import map from 'lodash/map'

const Index = ({ query, gifs }) => {
  return (
    <Layout>
      <Search defaultValue={query} />
      {map(gifs, el => (
        <Gif
          key={el.title}
          {...el}
        />
      ))}
    </Layout>
  )
}

Index.getInitialProps = async function () {
  return {
    query: '',
    gifs: [
      {
        url: 'https://myhot.pics/Spongebob%20Patrick%20Yay%20Jump%20Joy%20Butt%20Touch.gif',
        title: 'Spongebob Patrick Yay Jump Joy Butt Touch'
      },
      {
        url: 'https://myhot.pics/Gabriel%20DropOut%20-%20Snug%20in%20a%20Blanket.gif',
        title: 'Gabriel DropOut - Snug in a Blanket'
      },
      {
        url: 'https://myhot.pics/Hinako%20Note%20-%20Kicking%20Upset%20Bed.gif',
        title: 'Hinako Note - Kicking Upset Bed'
      }
    ]
  }
}

export default Index

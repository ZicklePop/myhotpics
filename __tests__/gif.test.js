import React from 'react'
import renderer from 'react-test-renderer'
import Gif from '../components/gif'

const MOCK = {
  url: 'https://gif.myhot.pics/Chase%20Nordengren%20Nordo%20Pow.gif',
  title: 'Chase Nordengren Nordo Pow'
}

describe('component - gif', () => {
  it('should render', () => {
    const component = renderer.create(<Gif {...MOCK} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

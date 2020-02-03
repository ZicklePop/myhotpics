import Fuse from 'fuse.js'
import endsWith from 'lodash/endsWith'
import filter from 'lodash/filter'
import get from 'lodash/get'
import isNil from 'lodash/isNil'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'
import s3 from './s3'
import qs from 'querystring'
import shuffle from 'lodash/shuffle'

const CDN = 'http://my-hot-pics.s3-website-us-west-1.amazonaws.com/' // 'https://gif.myhot.pics/'
const LIMIT = 18
const SEARCH_OPTIONS = {
  keys: ['title']
}

const listObjects = async (q) => {
  const isSearch = !isNil(q)
  const params = {}
  if (!isSearch) {
    params.MaxKeys = LIMIT
  }
  const res = await s3.listObjects(params).promise()
  const content = get(res, 'Contents', [])
  const mapped = map(content, el => {
    const title = el.Key.slice(0, -4)
    return {
      url: `${CDN}${qs.escape(el.Key)}`,
      title
    }
  })
  const filtered = filter(mapped, o => (
    !endsWith(lowerCase(o.Key), '.gif')
  ))

  let results = filtered
  if (isSearch) {
    const fuse = new Fuse(filtered, SEARCH_OPTIONS)
    results = fuse.search(q)
  } else {
    results = shuffle(filtered)
  }

  return results
}

export default listObjects

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
import take from 'lodash/take'

const CDN = 'https://gif.myhot.pics/'
const LIMIT = 16
const SEARCH_OPTIONS = {
  shouldSort: true,
  keys: ['title']
}

const listObjects = async (q) => {
  const isSearch = !isNil(q)
  const res = await s3.listObjects().promise()
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
    results = shuffle(filter(filtered, o => (
      lowerCase(o.title).indexOf('nsfw') === -1
    )))
  }

  return take(results, LIMIT)
}

export default listObjects

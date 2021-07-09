import listObjects from '../../scripts/list-objects'
import get from 'lodash/get'

async function gifs (req, res) {
  const query = get(req, 'query.q')
  const images = await listObjects(query)
  const out = {
    images
  }
  res.status(200).json(out)
}

export default gifs


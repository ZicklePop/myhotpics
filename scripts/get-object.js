import s3 from './s3'
import get from 'lodash/get'

const getObject = async (Key) => {
  const obj = await s3.getObject({ Key }).promise().catch(() => {})
  try {
    return Buffer.from(get(obj, 'Body'))
  } catch {}
}

export default getObject

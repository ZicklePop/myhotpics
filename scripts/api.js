export const devPort = parseInt(process.env.PORT, 10) || 3000
export const host = process.env.NODE_ENV !== 'production' ? `http://localhost:${devPort}` : 'https://myhot.pics'
export const API = `${host}/api/gifs`
export default API

import 'whatwg-fetch'
import 'babel-polyfill'
const https = require("https")
const agent = new https.Agent({ rejectUnauthorized: false })

export const fetchy = (uri, options, refreshToken) => {
  const query = {
    agent,
    method: options.method,
    headers: {
      'Content-Type': options.contentType
    }
  }
  options.data && (
    query.body = (options.contentType === 'application/json')
      ? JSON.stringify(options.data)
      : options.data
  )
  return fetch(uri, query)
}

fetchy.post = (url, data,) => fetchy(url, {data, contentType: 'application/json', method: 'POST'})

fetchy.get = (url) => fetchy(url, {contentType: '', method: 'GET'})

fetchy.delete = (url) => fetchy(url, {contentType: '', method: 'DELETE'})

fetchy.put = (url, data) => fetchy(url, {data, contentType: 'application/json', method: 'PUT'})

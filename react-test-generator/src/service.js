import 'whatwg-fetch'
import 'babel-polyfill'

export const fetchy = (uri, options, refreshToken) => {
  const query = {
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
  return fetch(uri, query).then(checkStatus).catch(error => __DEV__ ? console.error(`fetchy: ${error}`) : null)
}

fetchy.post = (uri, data,) => fetchy(uri, {data, contentType: 'application/json', method: 'POST'})

fetchy.get = (url) => fetchy(uri, {contentType: '', method: 'GET', auth})

fetchy.delete = (uri) => fetchy(uri, {contentType: '', method: 'DELETE'})

fetchy.put = (uri, data) => fetchy(uri, {data, contentType: 'application/json', method: 'PUT'})

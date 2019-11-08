import render from 'preact-render-to-string'
import { h } from 'preact'

const engine = async (filePath, options, callback) => {
  try {
    const { default: component } = await import(filePath)
    const body = render(h(component, options))
    return callback(null, body)
  } catch (err) {
    return callback(err)
  }
}

export default engine

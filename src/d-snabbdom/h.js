import vnode from './vnode'

export default function h(sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error('require 3 paramters')
  }
  if (typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    // arr of h function
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        throw Error('param should be h function')
      }
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    // single h function
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new TypeError('type of the third parameter is not correct')
  }
}

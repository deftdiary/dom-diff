import vnode from './vnode'
import createElement from './createElement'

export default function (oldVnode, newVnode) {
  if (oldVnode.sel === '' || oldVnode.sel === undefined) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.key) {
    // ..
  } else {
    let newVnodeElm = createElement(newVnode)
    oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
  }
}

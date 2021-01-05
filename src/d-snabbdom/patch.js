import vnode from './vnode'
import createElement from './createElement'

export default function patch(oldVnode, newVnode) {
  if (oldVnode.sel === '' || oldVnode.sel === undefined) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    // 判断新旧 vnode 是否为同一个对象
    if (oldVnode === newVnode) return
    // 判断新 vnode 是否有 text 属性
    if (newVnode.text !== 'undefined' && (newVnode.children === undefined || newVnode.children.length === 0)) {
      if (newVnode.text !== oldVnode.text) {
        oldVnode.elm.innerText = newVnode.text
      }
    } else {
      // !!
      if (oldVnode.children !== undefined && oldVnode.children.length > 0) {

      } else {
        // 清除 oldVnode 的 innerText
        oldVnode.elm.innerText = ''
        // 添加 newVnode 的 children
        for (let i = 0; i < newVnode.children.length; i++) {
          let dom = createElement(newVnode.children[i])
          oldVnode.elm.appendChild(dom)
        }
      }
    }
  } else {
    let newVnodeElm = createElement(newVnode)
    if (oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}

import createElement from "./createElement"
import updateChildren from './updateChildren'

export default function patchVnode(oldVnode, newVnode) {
  // 判断新旧 vnode 是否为同一个对象
  if (oldVnode === newVnode) return
  // 判断新 vnode 是否有 text 属性
  if (
    newVnode.text !== 'undefined' &&
    (newVnode.children === undefined || newVnode.children.length === 0)
  ) {
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text
    }
  } else {
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      // 较难部分
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
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
}

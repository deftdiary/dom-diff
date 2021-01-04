export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel)
  if (vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)) {
    domNode.innerText = vnode.text
    vnode.elm = domNode
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
  }
  return vnode.elm
}

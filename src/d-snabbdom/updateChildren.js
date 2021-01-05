import patchVnode from './patchVnode'
import createElement from './createElement'

function sameVnode(a, b) {
  return a.sel === b.sel && a.key === b.key
}
export default function updateChildren(parentElm, oldCh, newCh) {
  // 旧前
  let oldStartIdx = 0
  // 新前
  let newStartIdx = 0
  // 旧后
  let oldEndIdx = oldCh.length - 1
  // 新后
  let newEndIdx = newCh.length - 1
  // 旧前节点
  let oldStartVnode = oldCh[0]
  // 旧后节点
  let oldEndVnode = oldCh[oldEndIdx]
  // 新前节点
  let newStartVnode = newCh[0]
  // 新后节点
  let newEndVnode = newCh[newEndIdx]

  // 开始 while loop
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // * 新前与旧前
    if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if(sameVnode(oldEndVnode, newEndVnode)) {
    // * 新后与旧后
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if(sameVnode(oldStartVnode, newEndVnode)) {
    // * 新后与旧前
      patchVnode(oldStartVnode, newEndVnode)
      // * 移动节点，移动新前指向的这个节点到老节点的旧后的后面
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if(sameVnode(oldEndVnode, newStartVnode)) {
    // * 新前与旧后
      patchVnode(oldEndVnode, newStartVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    }
  }
}

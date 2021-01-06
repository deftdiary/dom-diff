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
  
  let keyMap

  // 开始 while loop
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null || oldCh[oldStartIdx] === undefined) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (oldEndVnode == null || oldCh[oldEndIdx] === undefined) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (newStartVnode == null || newCh[newStartIdx] === undefined) {
      newStartVnode = newCh[++newStartIdx]
    } else if (newEndVnode == null || newCh[newEndIdx] === undefined) {
      newEndVnode = newCh[--newEndIdx]
    }
    // * 新前与旧前
    if (sameVnode(oldStartVnode, newStartVnode)) {
      console.log('新前与旧前') // df-log
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if(sameVnode(oldEndVnode, newEndVnode)) {
    // * 新后与旧后
      console.log('新后与旧后') // df-log
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if(sameVnode(oldStartVnode, newEndVnode)) {
    // * 新后与旧前
      console.log('新后与旧前') // df-log
      patchVnode(oldStartVnode, newEndVnode)
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if(sameVnode(oldEndVnode, newStartVnode)) {
    // * 新前与旧后
      console.log('新前与旧后') // df-log
      patchVnode(oldEndVnode, newStartVnode)
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      if (!keyMap) {
        keyMap = {}
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i].key
          if (key !== undefined) {
            keyMap[key] = i
          }
        }
      }
      const idxInOld = keyMap[newStartVnode.key]
      if (idxInOld === undefined) {
        parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)
      } else {
        const elmToMove = oldCh[idxInOld]
        patchVnode(elmToMove, newStartVnode)
        oldCh[idxInOld] = undefined
        parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }
  console.log(oldStartIdx, oldEndIdx) // df-log
  if (newStartIdx <= newEndIdx) {
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx])
    }
  } else if(oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      if (oldCh[i]) {
        parentElm.removeChild(oldCh[i].elm)
      }
    }
  }
}

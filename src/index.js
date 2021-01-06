import h from './d-snabbdom/h'
import patch from './d-snabbdom/patch'

const container = document.getElementById('container')
const btn = document.getElementById('btn')
const myVnode1 = h('ul', {}, [
  h('li', { key: 'a' }, 'A'),
  h('li', { key: 'b' }, 'B'),
  h('li', { key: 'c' }, 'C'),
  h('li', { key: 'd' }, 'D'),
])
const myVnode2 = h('ul', {}, [
  h('li', { key: 'd' }, 'D'),
  h('li', { key: 'x' }, 'X'),
  h('li', { key: 'c' }, 'C'),
  h('li', { key: 'a' }, 'A'),
  h('li', { key: 'q' }, 'Q'),
])

patch(container, myVnode1)
btn.onclick = function () {
  patch(myVnode1, myVnode2)
}

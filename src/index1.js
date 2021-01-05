import h from './d-snabbdom/h'
import patch from './d-snabbdom/patch'

const container = document.getElementById('container')
const btn = document.getElementById('btn')
const myVnode1 =  h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, [
    h('div', {}, [
      h('p', {}, '♠'),
      h('p', {}, '♣'),
      h('p', {}, '♥'),
      h('p', {}, '♦'),
    ])
  ]),
  h('li', {}, 'D'),
])
const myVnode2 = h('ol', {}, [
  h('li', {}, 'hello'),
  h('li', {}, 'deft'),
  h('li', {}, 'liang'),
  h('li', {}, 'python'),
])

patch(container, myVnode1)
btn.onclick = function() {
  patch(myVnode1, myVnode2)
}
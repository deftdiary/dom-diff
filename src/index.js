import h from './d-snabbdom/h'

var myVnode1 = h('div', {}, [
  h('div', {}, 'hello'),
  h('div', {}, 'hello'),
  h('div', {}, h('div', {}, 'hello'))
])
console.log(myVnode1)

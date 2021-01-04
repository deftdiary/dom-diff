import h from './d-snabbdom/h'
import patch from './d-snabbdom/patch'

const container = document.getElementById('container')
// const myVnode1 =  h('ul', {}, [
//   h('li', {}, 'A'),
//   h('li', {}, 'B'),
//   h('li', {}, 'C'),
//   h('li', {}, 'D'),
// ])
const myVnode1 = h('h3', {}, 'hello deft')

patch(container, myVnode1)
import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

const container = document.getElementById('container')
const btn = document.getElementById('btn')
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

const vnode1 = h('ul', {}, [
  h('li', { key: 'a' }, 'A'),
  h('li', { key: 'b' }, 'B'),
  h('li', { key: 'c' }, 'C'),
  h('li', { key: 'd' }, 'D')
])
const vnode2 = h('ol', {}, [
  h('li', { key: 'b' }, 'B'),
  h('li', { key: 'a' }, 'A'),
  h('li', { key: 'd' }, 'D'),
  h('li', { key: 'c' }, 'C')
])

patch(container, vnode1)

btn.onclick = function () {
  patch(vnode1, vnode2)
}

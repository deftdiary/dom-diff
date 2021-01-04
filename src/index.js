import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

// patch
var patch = init([classModule, propsModule, styleModule, eventListenersModule])

// create vnode
// var myVnode1 = h('a', { props: { href: 'http://www.baidu.com', target: '_blank' } }, '百度')
// console.log(myVnode1) // df-log
var myVnode2 = h('ul', {}, [h('li', 'monkey'), h('li', 'pig'), h('li', 'hourse')] )

// render vnode to dom
var container = document.getElementById('container')
patch(container, myVnode2)

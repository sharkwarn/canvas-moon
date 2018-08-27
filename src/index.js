import 'babel-polyfill'
import mountain from './animal/mountain'


const canvas = document.querySelector('#app')
const context = canvas.getContext('2d')
const global = {
    height: window.innerHeight,
    width: window.innerWidth
}

console.log(new mountain({}))

let arr = []
clearPaint(context)
function action () {
    return requestAnimationFrame(() => {
        clearPaint(context)
        arr.forEach(item => {
            item.render(context)
        })
        return action()
    })
}

function clearPaint (context) {
    context.beginPath();
    context.rect(0, 0, global.width, global.height)
    context.fillStyle='#f6f0e9'
    context.lineWidth=1
    context.strokeStyle = '#f6f0e9'
    context.fill();
    context.stroke()
}
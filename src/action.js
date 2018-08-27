
import mountain from './animal/mountain'
import global from './global'
import arr from './data'



function action (context) {
    return requestAnimationFrame(() => {
        clearPaint(context)
        arr.forEach(item => {
            item.render(context)
        })
        return action(context)
    })
}

function clearPaint (context) {
    context.beginPath()
    context.rect(0, 0, global.width, global.height)
    context.fillStyle='#f6f0e9'
    context.lineWidth=1
    context.strokeStyle = '#f6f0e9'
    context.fill()
    context.stroke()
}

export default action
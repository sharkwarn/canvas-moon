
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
    const color = context.createLinearGradient(0,0, 0, global.height)
    color.addColorStop(0, '#fafafa')
    color.addColorStop(0.1, '#fbfbfb')
    color.addColorStop(0.2, '#edf0ef')
    color.addColorStop(0.4, '#bbe2d7')
    color.addColorStop(1, '#bae4d8')

    context.fillStyle=color
    context.lineWidth=1
    context.strokeStyle = '#f6f0e9'
    context.fill()
    context.stroke()
}

export default action
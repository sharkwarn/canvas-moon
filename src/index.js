import 'babel-polyfill'



const Circle = require('./animal/circle.js')

const canvas = document.querySelector('#app')
const context = canvas.getContext('2d')
const global = {
    height: window.innerHeight,
    width: window.innerWidth
}

let arr = []

arr.push(new Circle({
    height: global.height,
    width: global.width,
    r: 5,
    color: '#0ff'
}))

const image = new Image()
image.onload = function () {
    context.drawImage( image, 0, 0, 300, 300);
}
image.src = './asset/a.jpg'

// action()
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
    context.fillStyle='#fff'
    context.fill();
    context.stroke()
    
}
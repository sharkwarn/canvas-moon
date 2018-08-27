import 'babel-polyfill'
import start from './action'
import global from './global'

const canvas = document.querySelector('#app')
canvas.width = global.width
canvas.height = global.height 
const ctx = canvas.getContext('2d')


start(ctx)


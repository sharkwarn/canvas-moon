import mountain from './animal/mountain'
import global from './global'


class data {
    constructor(option) {
        const { yeUrl, huaUrl, yeCount = 0, huaCount = 0, positionY = 0, baseY = 0 } = option
        this.state = {
            arr: [],
            yeCount,
            huaCount,
            yeUrl,
            huaUrl,
            positionY,
            baseY
        }
        this.next()
    }

    createId = () => {
        const arr = this.state.arr
        return arr.length - 1 + Math.floor(Math.random()*10000000)
    }

    setState = (obj = {}) => {
        const state = this.state
        this.state = {
            ...state,
            ...obj
        }
    }

    mounted = (id) => {
        const { arr } = this.state
        const newArr = arr.filter(item => item.id != id) 
        this.setState({
            arr: newArr
        })
    }

    getParams = () => {
        let ran = Math.ceil(Math.random()*9)%3,
            url,
            y

        const {
            yeCount,
            huaCount,
            yeUrl,
            huaUrl,
            positionY,
            baseY
        } = this.state

        if( ran == 0 ) {
            url = `${huaUrl}${Math.ceil(Math.random()*huaCount)}.png`
        }else{
            url = `${yeUrl}${Math.ceil(Math.random()*yeCount)}.png`
        }
        y = Math.random()*positionY + baseY
        return {
            url,
            y,
            id: this.createId(),
            next: this.next
        }
    }

    next = () => {
        const { arr } = this.state
        const target = this.getParams()
        arr.push(new mountain(target))
    }
    
    render = (context) => {
        this.state.arr.forEach(item => {
            item.render(context)
        })
    }
}

const asset1 = new data({
    yeCount: 7,
    huaCount: 8,
    yeUrl: './floor/ye-1-',
    huaUrl: './floor/hua-1-',
    positionY: global.height*1/3,
    baseY: global.height*2/3
})

const asset2 = new data({
    yeCount: 4,
    huaCount: 4,
    yeUrl: './floor/ye-2-',
    huaUrl: './floor/hua-2-',
    positionY: global.height*1/3,
    baseY: global.height*1/2
})

const arr = [
    asset2,
    asset1
]
export default arr
import mountain from './animal/mountain'
import global from './global'


class data {
    constructor(option) {
        this.state = {
            arr: [],
            url
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

    next = () => {
        const { arr } = this.state
        let { count } = this.state
        count ++ 
        if( count > 12 ) {
            count = 1
        }
        this.setState({
            count
        })
        arr.push(new mountain({
            url: `./floor/ye-1-1.png`,
            id: this.createId(),
            y: Math.random() * global.height/2,
            next: this.next
        }))
    }
    
}

const asset = new data()

export default asset.state.arr
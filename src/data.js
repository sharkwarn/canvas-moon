import mountain from './animal/mountain'


const level_1 = [2]


const arr = []

level_1.forEach(item => {
    arr.push(new mountain({url: `./asset/${item}-min.png`}))
})

export default arr
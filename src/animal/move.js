class move {
    constructor(option) {
        const { x = 0, y = 0, speedX = 2, speedY = 0, context } = option
        this.MoveState = {
            x,
            y,
            speedX, 
            speedY
        }
    }

    setMoveState = (obj = {}) => {
        const { MoveState } = this
        this.MoveState = {
            ...MoveState,
            ...obj
        }
    }

    setState = (obj = {}) => {
        const { state } = this
        this.state = {
            ...state,
            ...obj
        }
    }

    move = () => {
        let { x, y, speedX, speedY } = this.MoveState
        let result = {
            x: x + speedX,
            y: y + speedY
        }
        this.setMoveState(result)
        return result
    }

}

export default move
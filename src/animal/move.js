class move {
    constructor(option) {
        const { x = 0, y = 0, speedX = 2, speedY = 2 } = option
        this.MoveState = {
            x,
            y,
            speedX, 
            speedY
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
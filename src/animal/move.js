class move {
    constructor(option) {
        const { x = 0, y = 0, speedX = 0.5, speedY = 0, context } = option
        this.MoveState = {
            x,
            y,
            speedX, 
            speedY,
            rotate: Math.random()*10,
            drotate: 0.02
        }
        this.props = option
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
        let { x, y, speedX, speedY, rotate, drotate } = this.MoveState
        let rotateFinal = rotate + drotate
        let result = {
            x: x + speedX,
            y: y + speedY
        }
        if( rotateFinal > 10) {
            result.drotate = -drotate
            result.rotate = rotateFinal
        }else if(rotateFinal < -10){
            result.drotate = -drotate
            result.rotate = rotateFinal
        }else{
            result.rotate = rotateFinal
        }
        this.setMoveState(result)
        return result
    }

}

export default move
import move from './move'

class Mountain extends move {
    constructor(props) {
        super(props)
        this.state = {
            a:1,
            b: 2
        }
    }
}

export default Mountain
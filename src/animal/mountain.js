import move from './move'
import { downLoadImage } from '../utils/index'


class Mountain extends move {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }
        this.getImage(props.url)
    }

    getImage = async(url) => {
        const image = await downLoadImage(url)
        this.setState({
            image
        })
    }

    render = (context) => {
        const { image } = this.state
        if( !image ) {
            return
        }
        const { x, y } = this.move()
        context.beginPath();
        context.drawImage(image, x, y );
        
    }
}

export default Mountain
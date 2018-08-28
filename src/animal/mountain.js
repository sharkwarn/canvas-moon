import move from './move'
import { downLoadImage } from '../utils/index'
import global from '../global'


class Mountain extends move {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            next: false,
        }
        this.getImage(props.url)
    }

    getImage = async(url) => {
        const image = await downLoadImage(url)
        this.setState({
            image,
            height: image.height,
            width: image.width ,
        })
        this.setMoveState({
            x: -image.width
        })
    }

    checkVisible = (x) => {
        if( x > -this.state.width/4 && !this.state.next ) {
            this.props.next && this.props.next()
            this.setState({
                next: true
            })
        }
        if( x > global.width ) {
            console.log('需要卸载了')
            this.props.mounted && this.props.mounted(this.props.id)
            return true
        }else{
            false
        }
    }

    render = (context) => {
        const { image, height, width } = this.state
        if( !image ) {
            return
        }
        const { x, y, rotate } = this.move()
        if( this.checkVisible(x) ) {
            return
        }
        context.save()
        context.beginPath();
        context.translate(x+(width/2), y+(height/2))
        // console.log(x+(width/2), y+(height/2))
        context.rotate(Math.PI*rotate/300)
        context.translate(-(x+(width/2)),-( y+(height/2)))
        context.drawImage(image, x, y );
        context.restore()
    }
}

export default Mountain
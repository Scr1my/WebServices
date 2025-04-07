import { ReactComponent as QRCode } from '../pages/qr.svg';
import "../Styles/QRCodePreview.css"

const QRCodePreview = ({ width, height, color, bgColor, frame }) => {

    frame = `/${frame}.svg`
    
    return (
        <div className='svg-container'>
            <QRCode width={width} height={height} fill={color} />
            <svg className='background' >
                <rect width={width} height={height} fill={bgColor} />
            </svg>
            {frame != "/frame-1.svg" ? (<img className="frame" src={frame}/>) : "" }
        </div>
    )
}

export default QRCodePreview;
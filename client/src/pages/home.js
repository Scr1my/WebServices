import React, { useState, useRef } from 'react';
import RadioImage from '../components/radioImage';
import { ReactComponent as QRCode } from './qr.svg';
import QRCodePreview from "../components/QRCodePreview";
import "../Styles/form.css"
import Submit from "../components/Submit";

/*var colorCheck = false;
if(Math.abs(co1 - co2) <= (co1 * 0.15) || Math.abs(co1 - co2) <= (co2 * 0.15)){
    document.getElementById("colorControl").innerHTML = "colori troppo simili";
    colorCheck = true;
}*/

//import "../Styles/RadioImage.css"

const Home = () => {
    const [url, setUrl] = useState("");
    const [style, setStyle] = useState("");
    const [color, setColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [frame, setFrame] = useState("frame-1");
    const [qrCodeData, setQrCodeData] = useState("");

    const [selectedValue, setSelectedValue] = useState("frame-1");
    const [frameColor, setFrameColor] = useState("#000000");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQrCodeData({
            url: url,
            color: color,
            bgColor: bgColor,
            frame: frame
        });
        console.log(qrCodeData);
    };
    

        
    return (
        <div name="qrCode">
            <h1>Generate Your QR Code</h1>
                
                
                <form onSubmit={handleSubmit} className='qrForm'>
                <div className='leftContainer'>
                <label>1. Enter Destinatino URL</label><br></br>
                    <input 
                        type='text' 
                        className='urlImput'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        name='resourcePointer' 
                        placeholder='https://example.com/url' 
                    /><br></br>
                    <label>2. Select a style (optional)</label><br></br>
                    <label>3. Select colors (optional)</label><br></br>
                    <label>Color code</label>
                    <input 
                        type='color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        name='color' 
                    ></input><br></br>
                    <label>Background color (optional)</label>
                    <input 
                        type='color'
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        name='bgColor' 
                    ></input><br></br>

                    {frame != "frame-1" ? (
                        <>
                            <label>Frame color (optional)</label>
                            <input 
                                type='color'
                                value={frameColor}
                                onChange={(e) => setFrameColor(e.target.value)}
                                name='frameColor' 
                            ></input><br></br>
                        </>) : "" }
                    <label>4. Select frame (optional)</label><br></br>
                    <ul>
                        <RadioImage 
                            radioGroup={"frame"} 
                            image={"/frame-1.svg"} 
                            id={"frame-1"} 
                            value="frame-1" 
                            setValue={setFrame}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                        <RadioImage 
                            radioGroup={"frame"} 
                            image={"/frame-2.svg"} 
                            id={"frame-2"} 
                            value="frame-2" 
                            setValue={setFrame}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                        <RadioImage 
                            radioGroup={"frame"} 
                            image={"/frame-3.svg"} 
                            id={"frame-3"} 
                            value="frame-3" 
                            setValue={setFrame}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                        <RadioImage 
                            radioGroup={"frame"} 
                            image={"/frame-4.svg"} 
                            id={"frame-4"} 
                            value="frame-4" 
                            setValue={setFrame}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                    </ul>
                </div>

                <div className='rightContainer'>
                    <div name="preview">
                        <QRCodePreview width={300} height={300} color={color} bgColor={bgColor} frame={frame}/>
                        <p>
                            *This is just a preview about the style of your QR code
                        </p>
                    </div>
                    <br></br>
                    <Submit text="Generate QR Code"/>
                </div>
                </form>
        </div>
    );
};

export default Home;
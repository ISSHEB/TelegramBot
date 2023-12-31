import './HelloWorld.css';
import "../../dbr.js"; // import side effects. The license, engineResourcePath, so on.
import { BarcodeReader } from "dynamsoft-javascript-barcode";
import React from 'react';
import VideoDecode from '../VideoDecode/VideoDecode.jsx';
import ImgDecode from '../ImgDecode/ImgDecode.jsx';

const isState = {
    bShowScanner: false,
    bShowImgDecode: false
};

class HelloWorld extends React.Component {
    state = {
        bShowScanner: true,
        bShowImgDecode: false
    };
    
    async componentDidMount() {
        try {
            await BarcodeReader.loadWasm();
        } catch (ex) {
            if (ex.message.indexOf("network connection error")) {
                let customMsg = "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
                console.log(customMsg);
                alert(customMsg);
            }
            throw ex;
        }
    }

    showScanner = () => {
        this.setState({
            bShowScanner: true,
            bShowImgDecode: false
        });
    }

    showImgDecode = () => {
        this.setState({
            bShowScanner: false,
            bShowImgDecode: true
        });
    }

    render() {
        return (
            <div className="helloWorld">
                <h1>Scan</h1>
                <div>
                    <button style={{ marginRight: '10px', backgroundColor: this.state.bShowScanner ? 'rgb(255,174,55)' : 'white' }} onClick={this.showScanner}>Video Decode</button>
                    <button style={{ backgroundColor: this.state.bShowImgDecode ? 'rgb(255,174,55)' : 'white' }} onClick={this.showImgDecode}>Image Decode</button>
                </div>
                <div className="container">
                    {this.state.bShowScanner ? (<VideoDecode></VideoDecode>) : ""}
                    {this.state.bShowImgDecode ? (<ImgDecode></ImgDecode>) : ""}
                </div>
            </div>
        );
    }
}
export default HelloWorld;
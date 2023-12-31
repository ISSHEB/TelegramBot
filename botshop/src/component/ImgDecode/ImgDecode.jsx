import React, { ChangeEvent, Component } from 'react'
import { BarcodeReader } from "dynamsoft-javascript-barcode";
import './ImgDecode.css'

export default class ImgDecode extends Component {
  pReader = BarcodeReader.createInstance();

  decodeImg = async (e) => {
    try {
        const reader = await this.pReader;
        let results = await reader.decode(e.target.files[0]);
        for (let result of results) {
            alert(result.barcodeText);
        }
        if (!results.length) { alert('No barcode found'); }
    } catch (ex) {
        if (ex.message.indexOf("network connection error") !== -1) {
            let customMsg = "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
            console.log(customMsg);
            alert(customMsg);
        }
        throw ex;
    }
    e.target.value = '';
}

  async componentWillUnmount() {
    if (this.pReader) {
      (await this.pReader).destroyContext();
      console.log('ImgDecode Component Unmount');
    }
  }

  render() {
    return (
      <div className="ImgDecode"><input type="file" onChange={this.decodeImg} /></div>
    )
  }
}
import * as React from "react"
import "./photoBlock.scss"
import { StaticImage } from "gatsby-plugin-image"
import { QRCodeSVG } from "qrcode.react"
import { MdContentCopy } from "react-icons/md"

function PhotoBlock() {
  return (
    <div className="photoBlock">
      <h1 className="name">Pantsyr Maksym</h1>
      <StaticImage alt={""} src="../images/remove.png" className="photo" />
      <div className="qrcode">
        <div className="button">
          <MdContentCopy className="copy" />
        </div>
        <QRCodeSVG
          className="QRCodeSVG"
          value="http://192.168.0.131:8000/"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}

export default PhotoBlock

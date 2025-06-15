import * as React from "react"
import "./photoBlock.scss"
import { StaticImage } from "gatsby-plugin-image"
import { QRCodeSVG } from "qrcode.react"
import { MdContentCopy } from "react-icons/md"
import { Bounce, ToastContainer, toast } from "react-toastify"

function PhotoBlock() {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://b-card-mu.vercel.app/")
      .then(() => {
        toast.success("Copied successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      })
      .catch(() => {
        toast.error("Failed to copy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      })
  }

  return (
    <div className="photoBlock">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h1 className="name">Pantsyr Maksym</h1>
      <StaticImage alt={""} src="../images/remove.png" className="photo" />
      <div className="qrcode">
        <div className="button">
          <MdContentCopy className="copy" style={{ cursor: "pointer" }} onClick={handleCopy} />
        </div>
        <QRCodeSVG
          className="QRCodeSVG"
          value="https://b-card-mu.vercel.app/"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}

export default PhotoBlock

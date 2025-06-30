import * as React from "react"
import "./textBlock.scss"
import { BiLogoGmail } from "react-icons/bi"
import {
  TbBrandFiverr,
  TbBrandUpwork,
  TbBrandTelegram,
  TbBrandGmail,
  TbBrandGithub,
} from "react-icons/tb"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Bounce, ToastContainer, toast } from "react-toastify"

const TextBlock = () => {
  const handleClick = () => {
    toast.error("Not create yet", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })
  }

  return (
    <div className="textBlock">
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
        theme="dark"
        transition={Bounce}
      />
      <div className="text">
        <div className="connect">
          <div className="conect_box">
            <h3>Connect</h3>

            <Link
              to="mailto:pantsyr.maksym@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Gmail"
            >
              <TbBrandGmail />
            </Link>

            <Link
              to="https://t.me/pancerjeager"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <TbBrandTelegram />
            </Link>

            <div onClick={() => handleClick()} style={{ cursor: "pointer" }}>
              <TbBrandFiverr />
            </div>

            <Link
              to="https://www.upwork.com/freelancers/~019f7727debb346c81?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              title="UpWork"
            >
              <TbBrandUpwork />
            </Link>

            <Link
              to="https://github.com/PancerMaksym"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <TbBrandGithub />
            </Link>
          </div>
        </div>
        <div className="portfolio">
          <div
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            className="portfolio_box"
          >
            <StaticImage
              alt={"Portfolio Photo"}
              title="Portfolio Photo"
              src="../images/remove.png"
              className="prof_photo"
            />
            <h3>Portfolio</h3>
          </div>
        </div>
        <div className="date">
          <h3>Project</h3>
          <h2>2</h2>
        </div>
      </div>
    </div>
  )
}

export default TextBlock

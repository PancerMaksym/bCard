import * as React from "react"
import '../components/index.scss'
import Seo from "../components/seo"
import PhotoBlock from "../components/photoBlock"
import TextBlock from "../components/textBlock"

const IndexPage = () => (
  <div className="main">
    <TextBlock/>
    <PhotoBlock/>
  </div>
)

export const Head = () => <Seo title="Pantsyr Maksym | Business Card" />

export default IndexPage

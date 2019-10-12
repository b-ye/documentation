import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BuilderPage from "../components/BuilderPage"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location}>
      <Seo
        title="Form Builder"
        description="GUI for building forms with validation"
      />
      <BuilderPage isStatic />
    </Layout>
  )
}

export default Api

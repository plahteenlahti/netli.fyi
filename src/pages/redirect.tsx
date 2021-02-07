import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Redirect: FC<PageProps> = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Redirect to Netlify" />

      <p>{JSON.stringify(location)}</p>
    </Layout>
  )
}

export default Redirect

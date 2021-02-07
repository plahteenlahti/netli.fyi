import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Redirect: FC<PageProps> = ({ location }) => {
  console.log(location)

  const urlParams = new URLSearchParams(location.search)

  const code = urlParams.get("code")
  const state = urlParams.get("state")

  return (
    <Layout>
      <SEO title="Redirect to Netlify" />

      <p>{code}</p>
      <p>{state}</p>
      <a href={`deploy://redirect?code${code}&state=${state}`}>Redirect</a>
    </Layout>
  )
}

export default Redirect

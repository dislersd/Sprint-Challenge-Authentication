import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JokesComp from "../components/jokesComp"
import requiresAuth from '../components/requiresAuth'

const Jokes = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <JokesComp />
    </Layout>
  )
}

export default requiresAuth(Jokes)

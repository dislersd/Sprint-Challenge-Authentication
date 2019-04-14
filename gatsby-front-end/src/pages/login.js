import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginComp from "../components/loginComp"

const Login = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Login</h2>
      <LoginComp />
    </Layout>
  )
}

export default Login

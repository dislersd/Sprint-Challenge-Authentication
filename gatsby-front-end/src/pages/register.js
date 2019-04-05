import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RegisterComp from '../components/registerComp'

const Register = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Register</h2>
      <RegisterComp />
    </Layout>
  )
}

export default Register;

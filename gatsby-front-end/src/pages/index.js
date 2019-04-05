import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello</h1>
    <p>Welcome to dad jokes</p>
    <p>
      {" "}
      <Link
        to="/register"
        style={{
          color: `coral`,
          textDecoration: `none`,
        }}
      >
        Register
      </Link>
      &nbsp;/&nbsp;
      <Link
        to="/login"
        style={{
          color: `coral`,
          textDecoration: `none`,
        }}
      >
        Login
      </Link>{" "}
      to see jokes
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

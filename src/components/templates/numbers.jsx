import React from "react"

import Header from "../header"
import "../layout.css"

const Layout = props => {
  const {
    pageContext: { Draw_Date, Mega_Ball, Multiplier, Winning_Numbers },
  } = props

  return (
    <>
      <Header siteTitle="Winning Numbers" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <h1>
            Winning numbers for {Draw_Date}
          </h1>
          <h2>
          {Winning_Numbers}
          {' '}
          <span>{Mega_Ball}</span>
          {' '}
          <span>{Multiplier}</span>
          </h2>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <StaticQuery
    query={graphql`
      query AllPeople {
        allNumbersCsv {
          nodes {
            Draw_Date
            Mega_Ball
            Multiplier
            Winning_Numbers
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage: React.FC = ({ data }) => {
  const winningNumbers = data.allNumbersCsv.nodes
  const unformattedWinningNumbers = winningNumbers.map(numbers => (numbers.Winning_Numbers))
  const formattedNumbers = unformattedWinningNumbers.join(' ')
  const final = formattedNumbers.replace(/,/g, '');
  console.log(final)
  return(
    <Layout>
      <SEO title="Home" />
      <p>{final}</p>
      {/* This displays a list of dates that link to a page for each draw */}
      {/* <ul>
        {data.allNumbersCsv.nodes.length > 0 &&
          data.allNumbersCsv.nodes.map(numbers => (
            <li>
              <Link to={`${numbers.Draw_Date}`}>
                {numbers.Draw_Date}
              </Link>
            </li>
          ))}
      </ul> */}
      
      {data.allNumbersCsv.nodes.map(numbers => (
        <p key={numbers.Draw_Date}>
          {numbers.Winning_Numbers.match(/\d+/g).map(Number) + ','}
        </p>
      ))}
      <table>
        <thead></thead>
        <tbody>
          {data.allNumbersCsv.nodes.map(numbers => (
          <tr key={numbers.Draw_Date}>
            <td>{numbers.Draw_Date}</td>
            <td>{numbers.Winning_Numbers.match(/\d+/g).map(Number)}</td>
            <td>{numbers.Mega_Ball}</td>
            <td>{numbers.Multiplier}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

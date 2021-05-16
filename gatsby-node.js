const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const numbersTemplate = path.resolve(`src/components/templates/numbers.jsx`)
  return graphql(
    `
      query AllNumbers {
        allNumbersCsv {
          nodes {
            Draw_Date
            Mega_Ball
            Multiplier
            Winning_Numbers
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create people  pages.
    result.data.allNumbersCsv.nodes.forEach(numbers => {
      const slug = numbers.Draw_Date
      createPage({
        path: slug,
        component: numbersTemplate,
        context: {
          ...numbers,
        },
      })
    })
  })
}
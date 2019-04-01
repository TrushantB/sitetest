// const Promise = require(`bluebird`)
// const path = require(`path`)
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve ,reject) => {
//   const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
//   resolve(
//      graphql(`
//     {
//         allContentfulBlogPost {
//             edges{
//                 node {
//                     id
//                     title
//                     slug
//                     heroImage {
//                         resize {
//                             width
//                             height
//                             src
//                           }
                          
//                           id
//                       }
//                   }
//               }
//           }
//       }
//       `).then(result => {
//         console.log(result)
//           if (result.errors) {
//               throw result.errors
//           }
          
//           // Create blog post pages.
//           result.data.allContentfulBlogPost.edges.forEach(edge => {
//               createPage({
//                   // Path for this page — required
//                   path: `${edge.node.slug}`,
//                   component: blogPostTemplate,
//                   context: {
//                       slug:edge.node.slug
//                   },
//               })
//           })
//           return
//       })
//   )
// })
// }
// import React from "react"
// import { graphql } from "gatsby"
// import BlogPostLayout from "../layouts/BlogPostLayout"
// import PostListItem from "../components/PostListItem"
// const Articles = ({ data }) => {

//   const posts = data.allContentfulTutorialPost.edges

//   return (
//     <BlogPostLayout>
//       <div className="blogpost container mtb-3">
//         {!!posts
//           ? posts.map(({ node: post }) => (
//               <PostListItem
//                 classes={"hello"}
//                 catOverride="Tutorial"
//                 path="tutorial"
//                 post={post}
//               />
//             ))
//           : "404 Template"}
//       </div>
//     </BlogPostLayout>
//   )
// }
// export default Articles

// export const query = graphql`
//   query BlogTutorialsPageQuery {
//     allContentfulTutorialPost(limit: 1000) {
//       edges {
//         node {
//           id
//           slug
//           title
//           subheading
//           createdAt(formatString: "MMMM DD, YYYY")          
//           updatedAt(formatString: "MMMM DD, YYYY")   
//           dateTime: updatedAt(formatString: "YYYY-MM-DD")   
//           tags {
//             id
//             slug
//             title            
//           }
//           categories {
//             id
//             slug
//             title            
//           }
//           excerpt {
//             excerpt
//           }
//           body {
//             childMarkdownRemark {
//               html
//             }
//           }
//           author {
//             name
//             slug
//             excerpt {
//               excerpt
//             }
//             bio {
//               bio
//             }
//             image {
//               fluid {
//                 ...GatsbyContentfulFluid_withWebp
//               }
//             }
//           }
//           image {
//             # sqip(numberOfPrimitives: 30, blur: 0) {
//             #   dataURI
//             # },
//             fluid {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `

// import React from "react"
// import { Link, graphql } from "gatsby"
// import BlogPostLayout from "../layouts/BlogPostLayout"
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
// const Authors
//  = ({ data }) => {

//   const authors = data.allContentfulAuthor.edges

//   return (
//     <BlogPostLayout>
//       <div className="blogpost container mtb-3">
//         {!!authors
//           ? authors.map(({ node: author }, i) => (

//             <Link to={`/author/${author.slug}`} className="author" key={i}>
//               {!!author.image && (
//                 <PreviewCompatibleImage
//                   imageInfo={{
//                     className: "card__image",
//                     image: author.image,
//                     alt: `featured image thumbnail for post ${author.name}`,
//                   }}
//                 />
//               )}
//               {!!author.name && (
//                 <p>
//                   {author.name}
//                 </p>
//               )}
//               {!!author.excerpt && <p>{author.excerpt.excerpt}</p>}
//             </Link>
           
//             ))
//           : "Whatveva!"}
//       </div>
//     </BlogPostLayout>
//   )
// }
// export default Authors

// export const query = graphql`
//   query AuthorsPageQuery {
//     allContentfulAuthor(limit: 1000) {
//       edges {
//         node {
//           id
//           name
//           slug
//           excerpt {
//             excerpt
//           }
//           bio {
//             bio
//           }
//           image {
//             fluid {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `

// import React from "react"
// import { Link, graphql } from "gatsby"
// import BlogPostLayout from "../layouts/BlogPostLayout"
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
// const Author = ({ data }) => {

//   const {
//     id,
//     name,
//     slug,
//     excerpt,
//     bio,
//     image
//   } = data.contentfulAuthor
  
//   return (
//     <BlogPostLayout>
//       <div className="blogpost container mtb-3" id={id}>
//         {!!data && (
//           <div className="author">
//             {!!name && (
//               <p>
//                 <Link to={`/author/${slug}`}>{name}</Link>
//               </p>
//             )}
//             {!!excerpt && <p>{excerpt.excerpt}</p>}
//             {!!bio && (
//               <div>
//                 <p>{bio.bio}</p>
//               </div>
//             )}
//             {!!image && (
//               <PreviewCompatibleImage
//                 imageInfo={{
//                   className: "",
//                   image: image,
//                   alt: `featured image thumbnail for post ${name}`,
//                 }}
//               />
//             )}
//           </div>
//         )}
//       </div>
//     </BlogPostLayout>
//   )
// }
// export default Author

// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulAuthor(slug: { eq: $slug }) {
//       id
//       name
//       slug
//       excerpt {
//         excerpt
//       }        
//       bio {
//         bio
//       }
//       image {
//         fluid {
//           ...GatsbyContentfulFluid_withWebp
//         }               
//       }
//     }
//   }
// `

// import React from "react"
// import { graphql } from "gatsby"
// import BlogPostLayout from "../layouts/BlogPostLayout"
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
// const Tag = ({ data }) => {
//   const {
//     id,
//     title,
//     date,
//     description,
//     image,
//   } = data.contentfulTag
  
//   return (
//     <BlogPostLayout>
//       <div className="blogpost container mtb-3" id={id}>
//         {!!title && <h1>{title}</h1>}
//         {!!date && <p>{date}</p>}
//         {!!description && <p>{description.description}</p>}
//         {!!image && (
//           <PreviewCompatibleImage
//             imageInfo={{
//               className: "featured__image",
//               image: image,
//               alt: `featured image thumbnail for post ${title}`,
//             }}
//           />
//         )}
//       </div>
//     </BlogPostLayout>
//   )
// }

// export default Tag

// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulTag(slug: { eq: $slug }) {
//       id
//       slug
//       title
//       date: updatedAt(formatString: "MMMM YYYY")
//       description {
//         description
//       }     
//       image {
//         fluid {
//           ...GatsbyContentfulFluid_withWebp
//         }        
//       }
//     }
//   }
// `

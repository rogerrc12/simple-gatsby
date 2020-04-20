import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query ($slug: String!){
    contentfulBlogPost( slug: { eq:$slug } ) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body { json }
    }
  }
`;

const Blog = ({ data: { contentfulBlogPost: post } }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US'],
              url = node.data.target.fields.file['en-US'].url;
        return <img src={url} alt={alt} />
      }
    }
  }

  return (
    <Layout>
      <Head title={post.title} />
      <h1>{post.title}</h1>
      <p>{post.publishedDate}</p>
      {documentToReactComponents(post.body.json, options)}
    </Layout>
  )
}

export default Blog;

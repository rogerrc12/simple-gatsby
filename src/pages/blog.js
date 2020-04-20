import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Styles from './blog.module.scss';
import Head from '../components/head';

const Blog = () => {
  const { allContentfulBlogPost: { edges: posts } } = useStaticQuery(graphql`
    {
      allContentfulBlogPost ( sort: { fields:publishedDate order:DESC }  ) {
        edges {
          node { title slug publishedDate(formatString:"MMMM Do, YYYY") }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={Styles.posts}>
        {posts.map((post, i) => (
          <li key={i} className={Styles.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog;

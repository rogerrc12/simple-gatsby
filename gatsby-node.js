const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    
    return createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(__dirname, 'src', 'templates', 'blog.js');

  const { data: { allContentfulBlogPost: { edges: posts } } } = await graphql(`
    {
      allContentfulBlogPost ( sort: { fields:publishedDate order:DESC }  ) {
        edges { node { slug } }
      }
    }
  `);


  posts.forEach(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: { slug: post.node.slug }
    })
  })
}
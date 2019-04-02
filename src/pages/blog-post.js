import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-slideshow-image';
import './blog-post.css'
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
class BlogPost extends Component {

    render() {
      var content;
      var slideImages =[];
        const  title =this.props.data.allContentfulBlogPost;
      console.log(title.edges)
      content=title.edges.map((item,index) => {
      console.log(item.node.body.body)
    return(
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${item.node.heroImage.resize.src})`}}>
        </div>
      </div>
    
    );
      })
        return (
          <Fade>
            <div className="bodydata"
            >
             <Slide {...properties}>
             {content}
             </Slide> 
              <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.contentfulBlogPostBodyTextNode.childMarkdownRemark.html,
            }}
          />
            </div>
            </Fade>
            
        );
    }
}
BlogPost.propTypes = {
    data:PropTypes.object.isRequired
}
export default BlogPost;

export const pageQuery= graphql`
query blogPostQuery {
    allContentfulBlogPost {
      edges{
        node {
          id
          title
          slug
          body {
            id
            body
          }
          heroImage {
            resize {
              width
              height
              src
            }
            
            id
          }
        }
      }
    }
    
      contentfulBlogPostBodyTextNode{
        childMarkdownRemark{
          html
        }
      }
    
  }
`
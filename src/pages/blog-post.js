import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-slideshow-image';
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
      slideImages.push(item.node.heroImage.resize.src);
    return(
      <Fade>
      <div className="content" key={index}> 
            <h3>{item.node.title}</h3>
            
            </div>
         </Fade>  
    );
      })
        return (
            <div className="bodydata"
           
            >
             <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
              <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.contentfulBlogPostBodyTextNode.childMarkdownRemark.html,
            }}
          />
            </div>
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
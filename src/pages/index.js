import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import CallForm from '../components/CallForm';
import maryland from '../images/2600_Maryland_Avenue/Maryland1.jpg';
import Slider from '../components/Slider';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Helping home buyers and sellers fulfill their legacy."
        />
      </Helmet>

      {/*<h5 className="banner">WE BUY HOUSES IN COLUMBUS OHIO</h5>*/}
      
      <div className="intro pb-4">
        <div className="container">
          <h1>Legacy Homes Group LLC</h1>
          <p>Helping home buyers and sellers fulfill their legacy.</p>
          <p>Need cash? Tired landlord? Large repairs needed? Any issue you can think – we have your solution!</p>
          <p className="sell-cash">Sell your home for cash, FAST.</p>
        </div>
      </div>

      <div className="container pt-2">
        <CallForm />
      </div>
{/*
      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>
*/}

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Why Sell To Us?</h2>
          </div>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/suBHAhHEGU8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          <p className="text-center">Stay tuned for our intro video!</p>
{/*
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
*/}
        </div>
      </div> 

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Past Properties</h2>
          </div>
          {/* {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))} */}

{/* Property 1 */}

{/*         <div className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to="/">2600 Maryland Avenue</Link>
                  </h2>
                  <div className="card-image">
                  <img src={maryland} />
                  </div>
                  <ul>
                    <li>Completely renovated, country English-style home situated on large corner lot</li>
                    <li>6 bedrooms, 7 possible - 4 baths - 2 half baths</li>
                    <li>Spectacular kitchen with brand new cabinets, countertops, and state-of-the-art-appliances</li>
                    <li>Large master suite with amazing master bath</li>
                    <li>Finished basement</li>
                    <li>Two private patio areas</li>
                    <li>Circular driveway with plenty of parking</li>

                  </ul>
                </div>
              </div>
          </div> */ }


          <div className="col-12 text-center">
            <div className="properties">
                <h2>
                  <Link to="/">2600 Maryland Avenue</Link>
                </h2>
            </div>
            <Slider />
          </div>

          <ul className="properties-description">
            <li>Completely renovated, country English-style home situated on large corner lot</li>
            <li>6 bedrooms, 7 possible - 4 baths - 2 half baths</li>
            <li>Spectacular kitchen with brand new cabinets, countertops, and state-of-the-art-appliances</li>
            <li>Large master suite with amazing master bath</li>
            <li>Finished basement</li>
            <li>Two private patio areas</li>
            <li>Circular driveway with plenty of parking</li>
          </ul>

          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/">
              View All Prior Properties
            </Link>
          </div>
        </div>
      </div>   

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3 text-center">Why Choose Us?</h2>
          </div>
          <div className="col-12 text-center">
            <p>To help in any time of need - We are here to help.</p>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;

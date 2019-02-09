import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import { graphql, withPrefix, Link } from 'gatsby';

const BuyHome = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Buy A Home | Legacy Homes Group" />
    <div className="intro intro-small">
      <div className="container">
            <h1>Buy A Home From Legacy Homes Group</h1>     
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
        <div className="col-8">
            <p>Legacy has a proven track record of selling beautifully renovated homes here in Columbus, Ohio.</p>
            <p><Link to="/services">Click Here to View All Prior Projects</Link></p>
            <p>Our call to action - “Helping home sellers and buyers fulfill their legacy” -
                means helping out all people in a time of need and relieving a large burden off of their shoulders, so
                they can create their future that lies ahead. We treat all of our customers, colleagues like family. </p>
            <p>We believe in doing business with the greatest effort, respect, customer-first mentalities.
                When you do business with LHG, you are treated as if you are family!
                We are experts in the field of real estate and we understand that selling your home can be an
                exhausting task.</p>
            <p>We are here to help in the time of need and to push you to the next step! Feel free to
                reach out today about all your real estate needs!</p>
        </div>
      </div>
    </div>
  </Layout>
);

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
  }
`;
export default BuyHome;

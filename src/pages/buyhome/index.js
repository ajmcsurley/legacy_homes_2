import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import { graphql, withPrefix, Link } from 'gatsby';
import CallForm from '../../components/CallForm';

const BuyHome = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Buy A Home | Legacy Home Group" />
    <div className="intro intro-small">
      <div className="container">
            <h1>Buy A Home From Legacy Homes Group</h1>     
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
        <div className="p-content">
            <p>Legacy has a proven track record of selling beautifully renovated homes here in Columbus, Ohio.</p>
            <p className="text-center"><Link to="/projects">Click Here to View All Prior Projects</Link></p>
            <p>We believe that a home is the most important investment someone can make and we go the extra mile
            to renovate and create a beautiful home for our buyers. We renovate every home as if our family were
            moving into the space.</p>
            <p>Take a look at the homes listed below, and if you would like to schedule a walkthrough, please fill out the
            tab under the home that states “Schedule A Showing Today”.</p>
            <p>If you are someone who loves the homes Legacy Home Group renovates, but they are either not available or you
            would like a specific area, please fill out a buyers form below or contact us today.</p>
            <p>If Legacy has you on their list and a home comes through, the home can be customized to the final
            buyer's specifications!</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <CallForm />
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

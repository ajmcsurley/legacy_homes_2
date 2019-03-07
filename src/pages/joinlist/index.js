import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import CallForm from '../../components/CallForm';

const JoinList = props => (
  <Layout bodyClass="page-sellhome">
    <SEO title="Join Buyers List | Legacy Home Group" />
    <div className="intro intro-small">
      <div className="container">
            <h1>Join Our Buyers List</h1>     
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
        <div className="p-content">
            <p>Are you an investor looking for wholesale deals or turnkey rentals? Buyer looking for a beautifully renovated home? Join our buyers list and you can have an exclusive first look at the many renovations we have coming for sale at any given time!!</p>

            <p>At Legacy Home Group, we sometimes receive deals that do not make sense for us as a business. That doesn’t mean these properties won’t be perfect for you and your investing portfolio! Sign up for our buyers list, include your specific criteria, and we will become a match maker for you!</p>

        </div>
      </div>

      <div className="row justify-content-center">
          <CallForm />
      </div>

    </div>

  </Layout>
);



export default JoinList;

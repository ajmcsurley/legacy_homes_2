import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const AboutUs = props => (
  <Layout bodyClass="page-sellhome">
    <SEO title="About Us | Legacy Home Group" />
    <div className="intro intro-small">
      <div className="container">
            <h1>About Legacy Home Group</h1>     
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
        <div className="p-content">
            <p>Legacy Home Group LLC was founded in 2018 by Tom Harr. Tom has been a Columbus, OH native his
                entire life and Tom takes pride in taking part in the development and recreation of the city that he was
                born and raised in. </p>
            <p>Our call to action - “Helping home sellers and buyers fulfill their legacy” -
                means helping out all people in a time of need and relieving a large burden off of their shoulders, so
                they can create their future that lies ahead. We treat all of our customers, colleagues, everyone like family. </p>
            <p>We believe in doing business with the greatest effort, respect, and customer-first mentalities.
                When you do business with LHG, you are treated as if you are family!</p>
            <p>We are experts in the field of real estate and we understand that selling your home can be an
                exhausting task. We are here to help in the time of need and to push you to the next step! Feel free to
                reach out today about all your real estate needs!</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutUs;

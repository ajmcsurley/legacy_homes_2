import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import CallForm from '../../components/CallForm';

const SellHome = props => (
  <Layout bodyClass="page-sellhome">
    <SEO title="Past Properties | Legacy Homes Group" />
    <div className="intro intro-small">
      <div className="container">
            <h1>Past Properties</h1>     
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
        <div className="p-content">
            <p>Legacy Home Group focuses on <b>helping</b> people out of tough situations or hardships by buying
                their homes, quick and with <b>cash</b>, and AS-IS condition. So…. why sell to <b>Legacy</b>?</p>

            <p>Legacy specializes in helping people out of any situation and for a fair price. We are a family
            owned and operated business and treat every seller/buyer with the love and compassion we
            would our own family.</p>

            <p>With Legacy, we can give a cash offer within 24 hours of visiting the property and close as soon
            as 7 business days! If that isn’t enough convincing, Legacy pays for <b>ALL</b> fees and closing fees.</p>
            
            <p>We buy any house in the condition they stand. <b>No repairs necessary or money out of your
            pocket!</b> We understand how costly items in a home are and understand money does not grow on
            trees. Sell to Legacy and we can <b>help</b> have those problems solved quick and easy.</p>

            <p>At Legacy, we are experienced investors and have helped people in all situations. Whether you
            are tired of being a landlord, in foreclosure, lost a job, inherited a home, have large repairs
            needed, or just want to move on and create your <b>legacy!</b> We are here to <b>help!</b></p>
            <p><b>No agents involved.</b>
                <ul> 
                    <li>No having to leave your house every day for showings!</li>
                    <li>No cleaning every day before showings/open houses!</li>
                    <li>Splitting money with an agent (6% is standard in RE transaction)</li>
                    <li>No invasive inspections of the property or appraisals!</li>
                    <li>We pay ALL closing costs</li>
                    <li>Listing a property can take 30-60 days on average (We can close as quickly as you please)</li>
                </ul>
            </p>
            <br></br>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row steps">
        <div className="p-content">
            <h1>Get Started Today!</h1>
        </div>
      </div>
      <div className="row steps">
        <div className="col-12">
            <p>Step 1: Fill out information below - Name, Email, Homes Address, Price (optional)</p>
            <p>Step 2: Phone call from Legacy Homes representatives regarding an offer / walk-through of your home</p>
            <p>Step 3: Get Offer – No obligations, you may accept or reject cash offer</p>
            <p>Step 4: Cash for home!</p>
        </div>
      </div>
      <div className="row justify-content-center">
          <CallForm />
      </div>
    </div>

  </Layout>
);



export default SellHome;

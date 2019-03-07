import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import CallForm from '../../components/CallForm';
import Slider from '../../components/Slider';

const Projects = props => (
  <Layout bodyClass="page-sellhome">
    <SEO title="Legacy Home Properties | Legacy Home Group" />
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
          <div className="col-12">
            <h2 className="text-center">Mini Mansion</h2>
            <p className="properties-description">
              Gorgeous 100 year old Bexley home. 7 BR / 5 BA finished with marble and high end appliances. One of the longer, more challenging projects that came out to be a stunning home! See pictures for highlights of this beauty!
            </p>
            <br></br>

            <div className="properties">
            </div>

            <Slider />
            <br></br>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
        </div>
        <div className="p-content">
          <div className="col-12">
            <h2 className="text-center">Typical Rental</h2>
            <p className="properties-description">
              Rental SFH with 3 BR / 1 BA with hardwood floors throughout! This is the quality of rental units Legacy Home Group produces and is the standard we strive for. Full fenced-in yard - because at LHG we encourage pets in the units (they’re family)!
            </p>
            <br></br>

            <div className="properties text-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/-hA2k9uJO74" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br></br>

          </div>
        </div>
      </div>
    </div>

  </Layout>
);



export default Projects;

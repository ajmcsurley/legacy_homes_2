import React from 'react';
import * as emailjs from 'emailjs-com';

class BuyerListForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        newClient: {
          formName: '',
          formPhone: '',
          formEmail: '',
          formZipCode: '',
          formBedBath: '',
          formFamily: ''
        },
        formSubmitted: false,
        formEmailSent: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /*handleInputChange = (e) => {
    let newState = {};
    
    newState[e.target.name] = e.target.value;

    this.setState(newState);
  }*/

  handleInputChange(event) {
    let newState = Object.assign({}, this.state.newClient);
    newState[event.target.name] = event.target.value;
    this.setState({newClient: newState});
    //console.log(this.state);
  } 

  handleFormSubmit(e) {
    
    e.preventDefault();

    const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER || "info@legacyohiohomes.com";
    const template = "buyer_list_template";
    const userId = process.env.REACT_APP_EMAILJS_USERID || "user_R65ISw1mDAAurkZJW3Hlj";

    //console.log(receiverEmail);
    //console.log(template);
    //console.log(userId);
    let formData = {
      formName: this.state.newClient.formName,
      formPhone: this.state.newClient.formPhone,
      formEmail: this.state.newClient.formEmail,
      formZipCode: this.state.newClient.formZipCode,
      formBedBath: this.state.newClient.formBedBath,
      formFamily: this.state.newClient.formFamily
    };

    //console.log(formData);
    if (formData.formName.length < 1 || formData.formEmail.length < 1 || formData.formPhone.length < 1 ||
        formData.formZipCode.length < 1 || formData.formBedBath.length < 1  || formData.formFamily.length < 1) {
          alert("Please ensure all fields are filled (greater than 1 character).");
          return false;
    }

    this.sendEmail(template, userId, formData.formName, formData.formPhone, formData.formEmail, formData.formZipCode, formData.formBedBath, formData.formFamily);

    alert("Thank you for your submission!");

    this.setState({
      newClient: {
        formName: '',
        formPhone: '',
        formEmail: '',
        formZipCode: '',
        formBedBath: '',
        formFamily: ''
      }
    });

    this.refs.buyerListForm.reset();
  }

  sendEmail(templateId, userId, formName, formPhone, formEmail, formZipCode, formBedBath, formFamily){
    emailjs.send('mailgun',
    templateId,
    {
      formName,
      formPhone,
      formEmail,
      formZipCode,
      formBedBath,
      formFamily
    }, userId)
    .then(res => {
      this.setState({formEmailSent: true });
      
    })
    //Handle error
    .catch(err => console.error('Failed to send email. Error: ', err));
  }

  render() {
    return (
      <form className="call" onSubmit={this.handleFormSubmit} ref="buyerListForm">
        <div className="call-box-top">
          <div className="call-input">
            <input id='formName' className="call-input form-control" name='formName' type='text' required onChange={this.handleInputChange} value={this.state.newClient.name} placeholder='Name (Required)'/>
          </div>
          <div className="call-input">
            <input id='formPhone' className="call-input form-control" name='formPhone' type='text' required onChange={this.handleInputChange} value={this.state.newClient.phone} placeholder='Phone' />
          </div>
          <div className="call-input">
            <input id='formEmail' className="call-input form-control" name='formEmail' type='email' required onChange={this.handleInputChange} value={this.state.newClient.email} placeholder='Email' />
          </div>
          <div className="call-input">
            <input id='formZipCode' className="call-input form-control" name='formZipCode' type='text' required onChange={this.handleInputChange} value={this.state.newClient.zipCode} placeholder='ZIP Code Desired' />
          </div>
          <div className="call-input">
            <input id='formBedBath' className="call-input form-control" name='formBedBath' type='text' required onChange={this.handleInputChange} value={this.state.newClient.bedBath} placeholder='Beds and Baths (ex. 1BR 1BA)' />
          </div>
          <div className="call-input">
            <input id='formFamily' className="call-input form-control" name='formFamily' type='text' required onChange={this.handleInputChange} value={this.state.newClient.family} placeholder='Single-Family / Multi-Family' />
          </div>          
          <div className="call-box-bottom text-center">
            <input className="button btn" type='submit' placeholder='Join Buyer List' />
          </div>
        </div>

      </form>
    );
  }
}

export default BuyerListForm;

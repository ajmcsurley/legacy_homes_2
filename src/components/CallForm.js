import React from 'react';
import * as emailjs from 'emailjs-com';

class CallForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        newClient: {
          formName: '',
          formPhone: '',
          formEmail: '',
          formSellAddress: '',
          formPrice: ''
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
    console.log(process.env);
    let newState = Object.assign({}, this.state.newClient);
    newState[event.target.name] = event.target.value;
    this.setState({newClient: newState});
    console.log(this.state);
  } 

  handleFormSubmit(e) {
    
    e.preventDefault();

    const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;
    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_APP_EMAILJS_USERID;

    console.log(receiverEmail);
    console.log(template);
    console.log(userId);
    let formData = {
      formName: this.state.newClient.formName,
      formPhone: this.state.newClient.formPhone,
      formEmail: this.state.newClient.formEmail,
      formSellAddress: this.state.newClient.formSellAddress,
      formPrice: this.state.newClient.formPrice
    };
    console.log(formData);
    if (formData.formName.length < 1 || formData.formEmail.length < 1 || formData.formPhone.length < 1 ||
        formData.formSellAddress.length < 1 || formData.formPrice.length < 1 ) {
          alert("Please ensure all fields are filled (greater than 1 character).");
          return false;
    }

    this.sendEmail(template, userId, formData.formName, formData.formPhone, formData.formEmail, formData.formSellAddress, formData.formPrice);

    this.setState({
      newClient: {
        formName: '',
        formPhone: '',
        formEmail: '',
        formSellAddress: '',
        formPrice: ''
      }
    });
  }

  sendEmail(templateId, userId, formName, formPhone, formEmail, formSellAddress, formPrice){
    emailjs.send('mailgun',
    templateId,
    {
      formName,
      formSellAddress,
      formPhone,
      formEmail,
      formPrice
    }, userId)
    .then(res => {
      this.setState({formEmailSent: true })
    })
    //Handle error
    .catch(err => console.error('Failed to send email. Error: ', err));
  }

  render() {
    return (
      <form className="call" onSubmit={this.handleFormSubmit}>
        <div className="call-box-top">
          <p className="no-obligation">No Obligation, See What You Can Get - WE CAN HELP.</p>
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
            <input id='formSellAddress' className="call-input form-control" name='formSellAddress' type='text' required onChange={this.handleInputChange} value={this.state.newClient.sellAddress} placeholder='Home for Sale Address' />
          </div>
          <div className="call-input">
            <input id='formPrice' className="call-input form-control" name='formPrice' type='text' required onChange={this.handleInputChange} value={this.state.newClient.price} placeholder='Desired Price' />
          </div>
          <div className="call-box-bottom">
            <input className="button btn" type='submit' placeholder='Get My Fair Cash Offer' />
          </div>
        </div>

      </form>
    );
  }
}

export default CallForm;

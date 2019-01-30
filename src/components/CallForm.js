import React from 'react';

class CallForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        newClient: {
          name: '',
          phone: '',
          email: '',
          sellAddress: '',
          price: ''
        }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (e) => {
    let newState = {};
    
    newState[e.target.name] = e.target.value;

    this.setState(newState);
  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    let formData = {
      formName: this.state.newClient.name,
      formPhone: this.state.newClient.phone,
      formEmail: this.state.newClient.email,
      formSellAddress: this.state.newClient.sellAddress,
      formPrice: this.state.newClient.price
    };

    if (formData.formName.length < 1 || formData.formEmail.length < 1 || formData.formPhone.length < 1 ||
        formData.formSellAddress.length < 1 || formData.formPrice.length <1 ) {
          return false;
    }

    this.setState({
      newClient: {
        name: '',
        phone: '',
        email: '',
        sellAddress: '',
        price: ''
      }
    });
  }

  render() {
    return (

      <form className="call" onSubmit={this.handleFormSubmit}>
        <div className="call-box-top">
          <p className="no-obligation">No Obligation, See What You Can Get - WE CAN HELP</p>
          <div className="call-input">
            <input id='formName' className="call-input form-control" name='name' type='text' required onChange={this.handleInputChange} value={this.state.newClient.name} placeholder='Name (Required)'/>
          </div>
          <div className="call-input">
            <input id='formPhone' className="call-input form-control" name='phone' type='text' required onChange={this.handleInputChange} value={this.state.newClient.phone} placeholder='Phone' />
          </div>
          <div className="call-input">
            <input id='formEmail' className="call-input form-control" name='email' type='email' required onChange={this.handleInputChange} value={this.state.newClient.email} placeholder='Email' />
          </div>
          <div className="call-input">
            <input id='formSellAddress' className="call-input form-control" name='sellAddress' type='text' required onChange={this.handleInputChange} value={this.state.newClient.sellAddress} placeholder='Home for Sale Address' />
          </div>
          <div className="call-input">
            <input id='formPrice' className="call-input form-control" name='price' type='text' required onChange={this.handleInputChange} value={this.state.newClient.price} placeholder='Desired Price' />
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

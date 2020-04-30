import React from 'react';
import ReactDOM from 'react-dom';
import PayPal from 'paypal-checkout';

import './Button.css';

class PayPalButton extends React.Component {

  onAuthorize(data, actions) {
    console.log('Payment was successful!', data, actions);
    // TODO: add confirmation notice/spinner
    // this.ordersService.executePaypal(this.order.id, data['payerID'], data['paymentID'], data['paymentToken'])
    //   .subscribe(
    //     data => {
    //       console.log('execute paypal returned:', data);
    //       this.ordersService.getOrder(this.order.id)
    //         .subscribe(foo => this.order = foo);
    //     },
    //     error => console.error('execute paypal errored:', error));
  }
  onCancel(data, actions) {
    console.log('The payment was cancelled!', data);
  }
  onError(data, actions) {
    console.log('There was an error:', data);
  }
  payment(data, actions) {
    return actions.payment.create({
      payment: {
        transactions: [
          { amount: { total: "0.01", currency: 'USD' } }
        ]
      // },
      // experience: {
      //   input_fields: {
      //       no_shipping: 1
      //   }
      }
    });
  }

  render () {
    let Button = PayPal.Button.driver('react', { React, ReactDOM });

    return (
      <div className="Paypal">
        <Button
          // createOrder={ (data, actions) => this.createOrder(data, actions) }
          // onApprove={ (data, actions) => this.onApprove(data, actions) }
          env={ (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "sandbox" : "production" }
          client={ { sandbox: process.env.REACT_APP_SANDBOX_CLIENT_ID, production: process.env.REACT_APP_PRODUCTION_CLIENT_ID } }
          payment={ (data, actions) => this.payment(data, actions) }
          commit={true}
          onAuthorize={ (data, actions) => this.onAuthorize(data, actions) }
          onCancel={ (data, actions) => this.onCancel(data, actions) }
          onError={ (data, actions) => this.onError(data, actions) }
        />
      </div>
    );
  }
}

export default PayPalButton;

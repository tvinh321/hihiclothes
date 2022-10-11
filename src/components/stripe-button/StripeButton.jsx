import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; // price in cents
    const PUBLISHABLE_KEY = 'pk_test_51H5DUCJvoIrlsUVjNb3RQhfb6lGqHsPF6MNY1nBCbLX3w0hen6rpEzZT41bIXB4MnLWoxXX5wsb165TUnfui72wZ003DsnF46Y';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successfull!');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment, please make sure to use the provided test credit card');
        });
        
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={PUBLISHABLE_KEY}
        />
    );
};

export default StripeCheckoutButton;
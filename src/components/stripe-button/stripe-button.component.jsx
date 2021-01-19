import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBQ3iDhfFPSpCchrllaCBbTfdMzd6eCr2KmzzQ5pPHlUTi7WOCjO6QMNnPEyVyLUZfw2xzXEUT8NxumnDmMCmry00eGQLhELL'

    const onToken = token => {
        console.log(token);
        alert('Payment Theoretically Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddres
            shippingAddress
            image=''
            descirption={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton
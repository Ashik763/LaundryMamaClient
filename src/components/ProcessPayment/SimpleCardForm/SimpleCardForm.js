import React from 'react';

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { UserContext } from '../../../App';
 import ProcessPayment from '../ProcessPayment';

const SimpleCardForm = ({userInfo,serviceName,servicePrice,serviceDescription}) => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const state = 'processing';
      const sendUserInfo = {serviceName,servicePrice,serviceDescription,state,...paymentMethod,...userInfo,...loggedInUser};
      console.log(sendUserInfo);
      // alert('successfully paid!')
      const phone=sendUserInfo.phone;
      // console.log(email);
      fetch(`http://localhost:5000/userInfo`,{
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(sendUserInfo)
      })
      .then(res => res.json())
      .then(success => {
        if(success){
          alert('Your service successfully granted!');
        }
      }  )

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className='btn btn-info' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default SimpleCardForm
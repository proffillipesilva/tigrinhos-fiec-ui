import React, { useState } from 'react';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axiosInstance from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [creditos, setCreditos] = useState(0);

  const backendUrl = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await axiosInstance.post(backendUrl + "/usuarios/account", {
        currency: 'usd',
        email: emailInput,
        amount: creditos * 100,
        paymentMethodType: "card"
      }

    );

    const { client_secret: clientSecret } = await res.data;

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      redirect: 'if_required',
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      console.log(error);
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      console.log("Ok")
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      await axiosInstance.put(backendUrl + "/usuarios/account/confirm", {
        clientSecret: clientSecret
      })
      console.log('Payment Success')
      navigate('/success')
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className='px-4'>
      <div className='mb-3'>
        <label htmlFor="email-input">Email</label>
        <div>
          <input value={emailInput} onChange={(e => setEmailInput(e.target.value))} type="email" id="email-input" placeholder='johndoe@gmail.com' />
        </div>
      </div>
      <div className='mb-3'>
      <label htmlFor="creditos">Creditos</label>
        <div>
          <input value={creditos} onChange={(e => setCreditos(e.target.value))} type="number" id="creditos" placeholder='10,00' />
        </div>
      </div>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm';
import GoogleMaps from './components/GoogleMaps';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };




const Account = (props) => {
  const stripePromise = loadStripe("pk_test_oka9IN3szpCKGDL9vjOCcTcV003wbeGfWk");
  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file
  
  return (
    <div className='flex container mt-8'>
      <GoogleMaps />
      {
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
  } 
    </div>
  )
}

export default Account
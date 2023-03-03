import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    
    const booking = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise);
    const {treatment, price, appointmentDate, slot} = booking;
    return (
        <div>
            <h3 className='text-3xl'> Payment for {treatment}</h3>
            <p className='text-xl'> Please Pay <strong> price {price}$  for your appointment on {appointmentDate} at {slot}</strong> </p>
            <div className='mt-5 ml-0'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
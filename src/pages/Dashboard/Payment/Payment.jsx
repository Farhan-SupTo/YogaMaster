import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm'
import useCart from '../../Custom Hooks/useCart';
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PK);
    const [ClassCart] = useCart();
    // console.log(ClassCart);
    const totalPrice = ClassCart.reduce((sum, item) => parseInt(item.price) + sum, 0)
    const price=parseFloat(totalPrice.toFixed(2))
    return (
        <div className='mt-40'>
            <p className='text-center text-4xl shadow-2xl rounded-xl text-heading'>Please proceed to payment
            </p>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
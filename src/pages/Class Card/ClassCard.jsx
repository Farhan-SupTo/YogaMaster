import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../Custom Hooks/useCart';

const ClassCard = ({ sigleClasses }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()
    const { user } = useContext(AuthContext);
    const handleClassAdd = (sigleClasses) => {
        console.log(sigleClasses);
        if (user && user.email) {
            const Classes = { clsssigleClassesId: sigleClasses._id, instructorName: sigleClasses.instructorName, image: sigleClasses.image, price: sigleClasses.price, email: user.email, ClassName: sigleClasses.name }
            fetch('https://server-farhan-supto.vercel.app/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Classes)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({

                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added on the cart',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to Select Classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/signIn', { state: { from: location } })
                }
            })
        }







    }
    return (
        <div>
            {sigleClasses.availableSeats == 0 ?  
            <>
            <div className="card  card-compact w-96 bg-red-500 shadow-xl">
                <figure><img className='h-72' src={sigleClasses.image} alt="Person Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title bg-orange rounded-lg p-2">Class Name: {sigleClasses.name}</h2>
                    <h2 className="card-title text-base"> Instructor Name: {sigleClasses.instructorName}</h2>
                    <h2 className="card-title text-base"> Price: ${sigleClasses.price}</h2>
                    <h2 className="card-title text-base"> Available sits: {sigleClasses.availableSeats}</h2>
                    {
                        sigleClasses.availableSeats == 0 ?
                            <>
                                <div className="card-actions justify-end ">
                                    <button className="btn btn-outline " disabled>Select</button>
                                </div>
                            </>
                            :
                            <>
                                <div className="card-actions justify-end ">
                                    <button onClick={()=>handleClassAdd(sigleClasses)} className="btn btn-outline">Select</button>
                                </div>
                            </>
                    }
    
    
                </div>
            </div>
            
            </>
                
                :
                <>
                <div className="card  card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-72' src={sigleClasses.image} alt="Person Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title border-b-orange bg-orange rounded-lg p-2">Class Name: {sigleClasses.name}</h2>
                    <h2 className="card-title text-base"> Instructor Name: {sigleClasses.instructorName}</h2>
                    <h2 className="card-title text-base"> Price: ${sigleClasses.price}</h2>
                    <h2 className="card-title text-base"> Available sits: {sigleClasses.availableSeats}</h2>
                    {
                        sigleClasses.availableSeats == 0 ?
                            <>
                                <div className="card-actions justify-end ">
                                    <button className="btn btn-outline " disabled>Select</button>
                                </div>
                            </>
                            :
                            <>
                                <div className="card-actions justify-end ">
                                    <button onClick={()=>handleClassAdd(sigleClasses)} className="btn btn-outline">Select</button>
                                </div>
                            </>
                    }
    
    
                </div>
            </div>
                </>

            }
        </div>

    );
};

export default ClassCard;
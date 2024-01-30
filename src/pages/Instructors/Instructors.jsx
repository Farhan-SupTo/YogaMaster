import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch(`https://server-farhan-supto.vercel.app/instructors`)
            .then((res) => res.json())
            .then((result) => {
                setInstructors(result);
            });
    }, []);
    console.log(instructors);
    return (
        <div className='mt-40'>
           <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Our Beloved Instructors</h1>
            <div className='grid sm:grid-cols-1 mx-3 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5'>
                {
                    instructors.map((singleInstructors) =>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-72' src={singleInstructors.image} alt="Person Image" /></figure>
                    <div className="card-body items-center">
                      <h2 className="card-title border-b">Name: {singleInstructors.name}</h2>
                      <h2 className="card-title text-base">Email: {singleInstructors.email}</h2>
                      
                      {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
                    </div>
                  </div>
                    )}

            </div>
        </div>
    );
};

export default Instructors;
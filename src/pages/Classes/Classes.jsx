import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import ClassCard from '../Class Card/ClassCard';

const Classes = () => {
  
    const [Classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`https://server-farhan-supto.vercel.app/classes`)
            .then((res) => res.json())
            .then((result) => {
                setClasses(result);
            });
    }, []);
    console.log(Classes);


   
    return (
        <div className='mt-40'>
            <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Our Ongoing Classes</h1>
            <div className='grid sm:grid-cols-1 mx-3 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5'>
                {
                    Classes.map((sigleClasses) =>
                    
                        
                        <ClassCard sigleClasses={sigleClasses}></ClassCard>
                    )}

            </div>
        </div>
    );
};

export default Classes;
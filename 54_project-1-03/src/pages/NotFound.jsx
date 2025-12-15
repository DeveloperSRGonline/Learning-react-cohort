import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full flex-1 flex flex-col items-center justify-center'>
            <h1 className='text-8xl font-bold italic text-orange-500'>404 Not Found</h1>
            <p className='text-gray-300'>Sorry, the page you are looking for does not exist.</p>
            <button onClick={() => navigate(-1)} className='bg-orange-500 text-white px-4 py-2 rounded mt-4'>Go Back</button>
        </div>
    )
}

export default NotFound
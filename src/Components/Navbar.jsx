import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigator = useNavigate();
    return (

        <div className='w-full h-16 flex justify-between items-center bg-slate-500 text-white fixed mb-32 px-20'>
            <h1 onClick={() => {
                navigator('/')
            }}>FireBase Home</h1>

            <div className='flex justify-center items-center gap-3'>
                <button className='bg-slate-600 py-1 px-4 rounded-md flex justify-center items-center text-lg'
                    onClick={() => {
                        navigator('/singUp')
                    }}>SignUp
                </button>

                <button className='bg-slate-600 py-1 px-4 rounded-md flex justify-center items-center text-lg'
                    onClick={() => {
                        navigator('/signIn')
                    }}>SignIn
                </button>
            </div>
        </div>
    )
}


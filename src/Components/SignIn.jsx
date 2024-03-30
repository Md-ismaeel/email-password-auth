import React, { useRef } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const navigator = useNavigate()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const auth = getAuth();
    const singInHandler = async (e) => {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('User loggedIn successfully!');

            emailRef.current.value = '';
            passwordRef.current.value = '';
            navigator("/")
        }
        catch (error) {
            console.error('Email Not matched :', error);
        }
    };

    return (
        <div className='w-full min-h-screen flex justify-center items-center '>

            <form action='/action' className='h-96 px-10 flex flex-col gap-3 justify-center items-center bg-primary py-12 rounded-md'>

                <h1 className='text-3xl text-white mb-6 font-semibold'>Login</h1>

                <div className='w-full flex justify-center items-center relative'>
                    <input type='text' ref={emailRef} placeholder='Enter Email' className='w-11/12 h-10 rounded-full py-4 px-10 outline-none  text-white drop-shadow-2xl bg-slate-500' />
                    <span className='absolute left-7 text-white'><MdEmail /></span>
                </div>

                <div className='w-full flex justify-center items-center relative mb-2'>
                    <input type='password' ref={passwordRef} placeholder='Enter Password' className='w-11/12 h-10 rounded-full py-4 px-10 outline-none text-white bg-slate-500' />
                    <span className='absolute left-7 text-white'><FaLock /></span>
                </div>

                <button onClick={singInHandler} className='h-10 w-9/12 bg-blue-400 rounded-3xl text-xl text-white'>
                    Login</button>


            </form>
        </div>
    );
};

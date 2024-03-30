import React, { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SignUp = () => {
    const navigator = useNavigate()

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const auth = getAuth();

    const SignUpHandler = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        try {

            await createUserWithEmailAndPassword(auth, email, password);
            alert('User created successfully!');

            emailRef.current.value = ''
            passwordRef.current.value = ''

            navigator('/signIn')

        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>

            <form action='/action' className='h-96 px-10 flex flex-col gap-3 justify-center items-center bg-primary py-12 rounded-md'>

                <h1 className='text-3xl text-white mb-6 font-semibold'>Sign Up</h1>

                <div className='w-full flex justify-center items-center relative'>
                    <input type='text' ref={emailRef} placeholder='Enter Email' className='w-11/12 h-10 rounded-full py-4 px-10 outline-none  text-white drop-shadow-2xl bg-slate-500' />
                    <span className='absolute left-7 text-white'><MdEmail /></span>
                </div>

                <div className='w-full flex justify-center items-center relative mb-2'>
                    <input type='password' ref={passwordRef} placeholder='Enter Password' className='w-11/12 h-10 rounded-full py-4 px-10 outline-none text-white bg-slate-500' />
                    <span className='absolute left-7 text-white'><FaLock /></span>
                </div>

                <button onClick={SignUpHandler} className='h-10 w-9/12 bg-blue-400 rounded-3xl text-xl text-white'>Register</button>
                <h1 className='text-white'>Already have an account?<button
                    className='hover:underline'
                    onClick={(e) => {
                        e.preventDefault()
                        navigator("/signIn")
                    }}
                >Login</button></h1>

            </form>
        </div>

    );
};

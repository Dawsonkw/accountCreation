import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { BiShow } from 'react-icons/bi'
import { useForm } from "react-hook-form";


const current = new Date().toISOString().split("T")[0] //split method will split the string to divide the date from the included tine, [0] selects for the first element (zeroth indexed), we are after the date not the time so we split it to make it useful

function Creator() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [date, setDate] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    // Firebase password validation

    const validatePassword = () => {
        let isValid = true;
        if(password !== '' && confirmPassword !== ''){
            if (password != confirmPassword) {
                isValid = false; 
                setError('The passwords do not match');
            }
        }
        return isValid;
    }

    const register = (event) => {
        event.preventDefault();
        setError('');
        if(validatePassword()) {
            //Creating a new user w/ email & password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
            })
            .catch(error => setError(error.message))
        }

        //Clears out the fields of the form after submission
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDate('');

    }


    return (
        <div className=' bg-slate-200 rounded-md max-w-sm mx-auto'>
            <h1 className='text-xl text-center py-3'>Account Creation</h1>
            <p className='text-center'>To create an account please input the following:</p>
            <div className=''>
                <form action="" className='flex justify-center items-center' onSubmit={register} name='registration form'>
                    <div className=' max-w-sm flex flex-col'>
                        <div className='py-8 '>
                            <label className='pr-4 '>
                                Email*
                            </label>
                            <input 
                                type="text" 
                                name="email" 
                                className='w-full rounded-md p-2'
                                value={email}
                                required
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                            <div className='py-8'>
                                <label className='pr-4'>
                                    Password*
                                </label>
                                <div className='flex-row w-full relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        className='w-full rounded-md p-2'
                                        value={password}
                                        required
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                    <div>
                                        <div className='absolute right-3 top-3 cursor-pointer hover:text-kitsuneBlue2 text-xl'
                                            onClick={() => setShowPassword(!showPassword)}>
                                            <BiShow />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-8'>
                                <label className='pr-4'>
                                    Confirm Password*
                                </label>
                                <div className='flex-row w-full relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        className='w-full rounded-md p-2'
                                        value={confirmPassword}
                                        required
                                        onChange={event => setConfirmPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='py-8'>
                                <label className='pr-4'>
                                    Date of Birth*
                                </label>
                                <input 
                                    type="date" 
                                    name="birthdate" 
                                    max={current} 
                                    className='w-full rounded-md p-2'
                                    required
                                    value={date}
                                    onChange={event => setDate(event.target.value)}
                                />
                            </div>               
                        <div className='flex justify-center'>
                            <button type='submit'  className='bg-kitsuneBlue p-5 rounded-lg mb-3 hover:bg-kitsuneBlue3'>
                                Create Account
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Creator;

// For account creation: 
//  
// 
//  need validation (can use react-hook-form serverside validation)
//      npm package installed, just need to set up the validation states
// 
//  Configure SWAL to fire upon successful submission
//
//  
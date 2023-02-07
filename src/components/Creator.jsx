import React from 'react';

const current = new Date().toISOString().split("T")[0]

function Creator() {
    return (
        <div className=' bg-slate-200 rounded-md'>
            <h1 className='text-xl text-center'>Account Creation</h1>
            <p className='text-center'>To create an account please input the following:</p>
            <div className=''>
                <form action="" className='flex justify-center items-center'>
                    <div className=' max-w-sm flex flex-col'>
                        <div className='py-10 '>
                            <label className='pr-4 '>
                                Email*
                            </label>
                            <input type="text" name="username" className='w-full rounded-md p-2'/>
                        </div>
                        
                        <div>
                             {/* I am going to tether this div together to verify the passwords match  */}
                            <div className='py-10'>
                                <label className='pr-4'>
                                    Password*
                                </label>
                                <input type="text" name="password" className='w-full rounded-md p-2' />
                            </div>
                            <div className='py-10'>
                                <label className='pr-4'>
                                    Date of Birth*
                                </label>
                                <input type="date" name="birthdate" max={current} className='w-full rounded-md p-2' />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-kitsuneBlue p-5 rounded-lg mb-3 hover:bg-kitsuneBlue3'>
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
//  Need button to submit info
// 
//  need validation (can use react-hook-form serverside validation)
// 
//  Need to tie to backend for creation aspect, Use firebase  

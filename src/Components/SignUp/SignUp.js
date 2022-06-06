import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from '../../firebase.init'
import google from '../Assets/Images/Google.png'
import facebook from '../Assets/Images/Facebook.png'
import github from '../Assets/Images/GitHub.png'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmission = event => {
        event.preventDefault();
        // setEmail(event.target.email.value)
        // setPassword(event.target.password.value)
        console.log(email, password)
    };

    return (
        <div>
            <div className="w-full max-w-xs mx-auto my-2">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmission}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="email" 
                            name="email"
                            placeholder="your email"
                            onChange={(event) =>setEmail(event.target.value)}
                            />
                    </div>
                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            name="password"
                            placeholder="create password"
                            onChange={(event) =>setPassword(event.target.value)}
                            />
                    </div>
                    <div className="mb-4">
                        <small>Already have account <Link to="/" className="text-teal-300"> Log In</Link></small>
                    </div>
                    <div className="flex items-center justify-between">
                    <input 
                        type="submit" 
                        value="Sign Up" 
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="divider">OR</div>
                    <div className="flex items-center justify-between mb-2">
                        <button 
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-around" 
                            type="button">
                            <p>Continue With Google</p>
                            <img 
                                src={google} 
                                alt="" 
                                className="w-8"
                                />
                        </button>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <button 
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-around" 
                            type="button">
                            <p>Continue With Facebook</p>
                            <img 
                                src={facebook} 
                                alt="" 
                                className="w-8"
                                />
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-around" 
                            type="button">
                            <p>Continue With GitHub</p>
                            <img 
                                src={github}
                                alt="" 
                                className="w-8"
                                />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
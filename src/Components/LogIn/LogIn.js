import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init"


const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmission = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorMessage = error.message;
  });
    };
    
    return (
        <div>
            <div className="w-full max-w-xs mx-auto my-20">
                <form 
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmission}
                    >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email"
                            name="email" 
                            placeholder="your email"
                            onChange={(event)=>setEmail(event.target.value)}
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
                            placeholder="enter password"
                            onChange={(event)=>setPassword(event.target.value)}
                            />
                    </div>
                    <div className="mb-4">
                        <small><Link to="/" className="text-teal-300"> reset password</Link></small>
                    </div>
                    <div className="mb-4">
                        <small>Dont have account <Link to="/signup" className="text-teal-300"> Create Acoount</Link></small>
                    </div>
                    <div className="flex items-center justify-between">
                        <input 
                            type="submit" 
                            value="Log In" 
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
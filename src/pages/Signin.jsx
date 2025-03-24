import React, { useState } from 'react';
import { app } from '../service/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const auth = getAuth(app);

    const signinuser = async () => {
        setError(null);
        setSuccess(null);

        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setSuccess(`Welcome back, ${userCredential.user.email}!`);
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setError("No account found with this email. Please sign up first.");
            } else if (error.code === "auth/wrong-password") {
                setError("Incorrect password. Please try again.");
            } else if (error.code === "auth/invalid-email") {
                setError("Please enter a valid email address.");
            } else {
                setError("Login failed. Please try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-700">Signin</h1>
                
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                {success && <p className="text-green-500 text-sm text-center">{success}</p>}
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    
                    <button
                        onClick={signinuser}
                        className="w-full py-2 font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Signin
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;

"use client";

import { useState } from 'react';
import Login from '../components/login';
import SignUp from '../components/signup';

export default function LoginPage() {
    const [login, setIsLogin] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <div className="flex w-full h-screen">
            {/* Left Side Container */}
            <div className="flex flex-col items-center w-1/2 h-full bg-[#F5EDED] " id="leftSide">
                <div className="w-3/4 items-center my-2 mt-[45%]">
                    <button className="w-1/2" onClick={() => setIsLogin(true)}>Login</button>
                    <button className="w-1/2" onClick={() => setIsLogin(false)}>Sign up</button>
                </div>
                {login ? <Login 
                    email={ email } 
                    setEmail={ () => setEmail("") }
                    password = { password }
                    setPassword= {() => setPassword("")}
                    
                    /> : <SignUp/>}  
            
            </div>

            {/* Right Side Container  */}
            <div className="flex w-1/2 h-full bg-[#6482AD]" id="rightSide">

            </div>
        </div>
    );
}

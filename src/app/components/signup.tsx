import { redirect } from 'next/navigation';
import { addUser } from '../../modules/supabase';
import { useState } from 'react';

export default function SignUp() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const handleSignUp = async function () {
        // prevent refresh
        event?.preventDefault();

        if ( cpassword !== password ){
            // error
            console.log("password does not match");
            return;
        } 
        
        if ( password.length < 6) {
            console.log("password must be longer than 6 characters");
            return;
        }

        const user = await addUser(email,password);

        if (user) {
            redirect('/dashboard');
        }
        // handle error
    }

    const handleEmailInput = function (event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    const handlePasswordInput = function (event: React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }
    const handleCPasswordInput = function (event: React.ChangeEvent<HTMLInputElement>){
        setCPassword(event.target.value);
    }

    return(
        <form className="flex flex-col items-center w-full gap-3" onSubmit={handleSignUp}>
            <input 
                type="email" 
                placeholder="Email" 
                className="w-3/4 h-[30px] text-black"
                onChange={handleEmailInput}
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-3/4 h-[30px] text-black" 
                onChange={handlePasswordInput}
                required
            />
            <input 
                type="password" 
                placeholder="Confirm password" 
                className="w-3/4 h-[30px] text-black"
                onChange={handleCPasswordInput} 
                required
            />
            <button 
                type="submit"
                className="bg-[#6482AD] w-3/4"
            >
                Sign up
            </button>
        </form>
    )
}
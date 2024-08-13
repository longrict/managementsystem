import { redirect } from 'next/navigation';
import { addUser } from '../../modules/Signup';

interface SignUpProps {
    login: boolean;
    handleSignUp: (login: boolean) => void;
}

export default function SignUp() {

    return(
        <form className="flex flex-col items-center w-full gap-3">
            <input 
                type="email" 
                placeholder="Email" 
                className="w-3/4 h-[30px] text-black"
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-3/4 h-[30px] text-black" 
            />
            <input 
                type="password" 
                placeholder="Confirm password" 
                className="w-3/4 h-[30px] text-black" 
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
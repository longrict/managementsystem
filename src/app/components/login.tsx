import { redirect } from 'next/navigation';
import { addUser } from '../../modules/Signup';

interface LoginProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
}

export default function Login({email,password,setEmail,setPassword}: LoginProps) {
    const handleSignUp = async function () {
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


    return(
        <form className="flex flex-col items-center w-full gap-3">
            <input 
                type="text" 
                placeholder="Email" 
                className="w-3/4 h-[30px] text-black"
                onChange = {handleEmailInput}
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-3/4 h-[30px] text-black"
                onChange={handlePasswordInput}
                required 
            />

            <button 
                type="submit"
                className="bg-[#6482AD] w-3/4"
            >
                Log in
            </button>
        </form>
    )
}
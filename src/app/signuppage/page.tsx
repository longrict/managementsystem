import Image from 'next/image'
import Link from 'next/link';

export default function SignUpPage() {
    /*TODO:
        1. handle sign in
        2. make less ugly 
        3. make terms and conditions
    */
    return (
        <div className="flex w-full h-screen text-white">
            {/* Left side container */}
            <div className="flex flex-col items-center w-1/2 h-full bg-dark" id="leftSide">
            <div className="nw-3/4 items-center my-2 mt-[10%] text-white">
                    <div className="flex flex-col gap-3 mb-[10%]">
                        <h1 className="text-4xl bold font-medium">Welcome to PassVault!</h1>
                        <p className="text-clgray text-xl">Tell us about yourself</p>
                    </div>
                </div>

                <form className="flex flex-col gap-2 w-3/4">
                    <label htmlFor="name" className="text-clgray text-sm">Username</label>
                    <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray mb-3">
                        <Image alt="username icon" src="/images/people.svg" height="25" width="25"/>
                        <input 
                            type="text" id="name" name="name" 
                            className="text-white rounded bg-cgray text-lg h-25 flex-grow focus:outline-none ml-1" 
                            required 
                        />
                    </div>

                    <div className="w-[100%] mb-3 flex flex-row justify-between">
                        <div className="w-[49%]">
                            <label htmlFor="name" className="text-clgray text-sm">First name</label>
                            <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray">
                                <input 
                                    type="text" id="name" name="name" 
                                    className="text-white rounded bg-cgray text-lg h-25 focus:outline-none w-full" 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="w-[49%]">
                            <label htmlFor="name" className="text-clgray text-sm">Last name</label>
                            <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray">
                                <input 
                                    type="text" id="name" name="name" 
                                    className="text-white rounded bg-cgray text-lg h-25 focus:outline-none w-full" 
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    <label htmlFor="email" className="text-clgray text-sm">Email address</label>
                    <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray mb-3">
                        <Image alt="username icon" src="/images/email.svg" height="25" width="25"/>
                        <input 
                            type="email" id="email" name="email" 
                            className="text-white rounded bg-cgray text-lg h-25 flex-grow focus:outline-none ml-1" 
                            required
                        />
                    </div>

                    <label htmlFor="password" className="text-clgray text-sm">Password</label>
                    <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray mb-3">
                        <Image alt="username icon" src="/images/lock.svg" height="25" width="25"/>
                        <input 
                            type="password" id="password" name="password" 
                            className="text-white rounded bg-cgray text-lg h-25 flex-grow focus:outline-none ml-1" 
                            required
                        />
                    </div>

                    <label htmlFor="cpassword" className="text-clgray text-sm">Confirm Password</label>
                    <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray mb-3">
                        <Image alt="username icon" src="/images/lock.svg" height="25" width="25"/>
                        <input 
                            type="password" id="cpassword" name="cpassword" 
                            className="text-white rounded bg-cgray text-lg h-25 flex-grow focus:outline-none ml-1" 
                            required
                        />
                    </div>
                    
                    <div className="space-x-1 mb-5 flex justify-center">
                        {/*Link to t&c or pop up*/}
                        <label>I have read the <a className='underline'>terms and conditions</a></label>
                        <input type="checkbox" required/>
                    </div>
                    <button type="submit" className="bg-cgreen p-2 rounded">Get Started</button>
                    <span className="text-sm text-clgray">Already have an account? <Link href="/loginpage" className="underline">Sign in</Link></span>
                </form>
            </div>

            {/* Right side container  */}
            <div className="flex w-1/2 h-full relative" id="rightSide">
                <Image src="/images/signup.jpg" alt="vault" layout="fill"></Image>
            </div>
        </div>
    )
}
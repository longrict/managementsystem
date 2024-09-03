"use client";

import Image from 'next/image'
import Link from 'next/link';


export default function LoginPage() {
    /*TODO:
        1. handle sign in/auth
        2. make less ugly   
        3. log in w/ google and other stuff
        4. forgot password
    */

    return (
        <div className="flex w-full h-screen text-white">
            {/* Left side container */}
            <div className="flex flex-col items-center w-1/2 h-full bg-dark" id="leftSide">
                <div className="w-3/4 items-center my-2 mt-[10%] text-white">
                    <div className="flex flex-col gap-3 mb-[10%]">
                        <h1 className="text-4xl bold font-medium">Log in to PassVault</h1>
                        <p className="text-clgray text-xl">Get started today!</p>
                    </div>
                </div>
                
                {/*Needs logo*/}
                <button 
                    type="submit" 
                    className="bg-dark p-4 rounded-xl w-3/4 mb-5 border border-solid border-clgray">
                    Continue with Google
                </button>

                <form className="flex flex-col gap-2 w-3/4 border-t">
                    <label htmlFor="name" className="text-clgray text-sm mt-3">Username</label>
                    <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray mb-3">
                        <Image alt="username icon" src="/images/people.svg" height="25" width="25"/>
                        <input 
                            type="text" id="name" name="name" 
                            className="text-white rounded bg-cgray text-lg h-25 flex-grow focus:outline-none ml-1" 
                            required 
                        />
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
                    <div className="w-[100%] flex flex-row relative bg-cgray rounded p-1 border-solid border border-clgray mb-5">
                        <Image alt="username icon" src="/images/lock.svg" height="25" width="25"/>
                        <input 
                            type="password" id="password" name="password" 
                            className="text-white rounded bg-cgray text-lg h-25 flex-grow focus:outline-none ml-1" 
                            required
                        />
                    </div>

                    <button type="submit" className="bg-cgreen p-2 rounded">Sign in</button>
                    <span className="text-sm text-clgray">Don&apos;t have an account yet? <Link href="/signuppage" className="underline">Sign up</Link></span>
                </form>
            </div>

            {/* Right side container  */}
            <div className="flex w-1/2 h-full relative" id="rightSide">
                <Image src="/images/f6q3mg6iybz71.jpg" alt="vault" layout="fill"></Image>
            </div>
        </div>
    );
}

"use client";

import { useState, useEffect } from 'react';
import Header from '../components/header';

export default function DashboardPage() {
    const [module,setModule] = useState("");
    const icons: string[] = [];
    return (
        <div className="h-[100vh] w-full flex flex-col bg-[#161c21] items-center">
            <Header/>
            {/*options*/}
            <div className="relative top-[70px] bg-black h-[100px] w-[50%] flex justify-between">
                <button className="">One</button>
                <button className="">Two</button>
                <button className="">Three</button>
            </div>
        </div>
    )

}
"use client"


import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Header = () =>{
        const{} = useSession()
    const handleLoginClick = () => signIn();

    return (<div className="container mx-auto p-5 flex justify-between">
        <Image width={183} height={82} src="/Logo.png" alt="Full Stak Week"/>

        <button className="text-primary text-sm font-semibold">Login</button>
    </div>
    );
}

export default Header;
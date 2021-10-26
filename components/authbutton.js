/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import AcademicCap from '@heroicons/react/outline/AcademicCapIcon';


export default function AuthButton(props) {
    const {data: session, status} = useSession();
    if (status === "authenticated") {
      return (
        <Link href="/profile">
          <div className="bg-transparent hover:bg-blue-900 ease-linear transition-all border border-blue-300 hover:border-transparent py-2 px-2 rounded">
              <button className="flex flex-row flex-wrap uppercase text-blue-300 hover:text-blue-100 py-1 px-1 text-xl">
                  <h1>my profile</h1>
                  <AcademicCap className="h-6 w-6" /> 
              </button>
          </div>
        </Link>
        
      )
    }
    return (
      <>
      <div className="bg-transparent hover:bg-blue-900 ease-linear transition-all border border-blue-300 hover:border-transparent py-2 px-2 rounded">
          <button onClick={signIn} className="uppercase text-blue-300 hover:text-white text-center justify-center items-center text-xl">
            <h1> sign in </h1>
            <AcademicCap className="h-6 w-6" />
          </button>
      </div>
      </>
    );
}

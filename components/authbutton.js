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
          <div className="bg-transparent hover:bg-blue-900 ease-linear transition-all border border-blue-300 hover:border-transparent py-2 px-4 rounded">
              <button className="flex flex-row flex-wrap uppercase text-blue-300 hover:text-blue-100 py-1 px-1">
                  <h1>my profile <AcademicCap className="h-6 w-6" /> </h1>
              </button>
          </div>
        </Link>
      )
    }
    return (
      <>
      <div className="bg-transparent hover:bg-blue-900 ease-linear transition-all border border-blue-300 hover:border-transparent py-2 px-4 rounded">
          <button onClick={signIn} className="uppercase text-blue-300 hover:text-white text-center justify-center items-center text-3xl">sign in</button>
      </div>
      </>
    );
}

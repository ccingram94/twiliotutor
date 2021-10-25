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
                  <h1>my profile <AcademicCap /> </h1>
              </button>
          </div>
        </Link>
      )
    }
    return (
      <>
      <div className="bg-transparent hover:bg-blue-500 text-blue-900 hover:text-white ease-linear transition-all border border-blue-500 hover:border-transparent py-2 px-4 rounded">
        <h2> sorry, this area is available to signed in members only</h2>
        <h2> please sign in below to explore this page </h2>
        <button onClick={signIn} className="uppercase text-blue-900 hover:text-white">sign in</button>
      </div>
      </>
    );
}

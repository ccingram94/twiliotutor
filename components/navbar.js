/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import AuthButton from '../components/authbutton'
import ClassroomButton from './classroombutton'


export default function Navbar(props) {
    const {data: session, status} = useSession()
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-row items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
          <div><Link href="/"><h2 className="uppercase font-bold justify-start text-blue-300 hover:text-blue-500 ease-linear transition-all text-xl">twilio tutor</h2></Link></div>
          <div className="flex flex-row flex-wrap px-4 text-xs space-x-4">
            <AuthButton/>
            <ClassroomButton />
          </div>
      </nav>
    </>
  );
}

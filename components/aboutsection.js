/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import AuthButton from './authbutton'


export default function AboutSection(props) {
    const {data: session, status} = useSession()
  return (
    <>
    <div>
      <div className="heropattern mx-auto w-full min-h-screen">
        <h2 className="font-bold text-blue-400 uppercase text-center text-3xl px-6 py-6">Screenshots</h2>
      </div>
    </div>
    </>
  );
}

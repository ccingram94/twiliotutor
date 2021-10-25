/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import AuthButton from './authbutton'


export default function Footer(props) {
    const {data: session, status} = useSession()
  return (
    <footer className="bg-white text-blue-300 text-center px-5 py-5">
      <h2>a project by <Link href="https://www.constanceingram.dev">constanceingram.dev</Link></h2>
  </footer>
  );
}

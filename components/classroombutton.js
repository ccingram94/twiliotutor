/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import AcademicCap from '@heroicons/react/outline/AcademicCapIcon';
import VideoCamera from '@heroicons/react/outline/VideoCameraIcon'


export default function AuthButton(props) {
    const {data: session, status} = useSession();
      return (
        <Link href="/classroom">
          <div className="bg-transparent hover:bg-blue-900 ease-linear transition-all border border-blue-300 hover:border-transparent py-2 px-4 rounded">
              <button className="uppercase text-blue-300 hover:text-white text-center justify-center items-center text-xl">
                  <h1>class</h1>
                  <VideoCamera className="h-6 w-6" />
              </button>
          </div>
        </Link>
      )
    
}

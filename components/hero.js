/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import AuthButton from './authbutton'
import ClassroomButton from './classroombutton'
import AcademicCap from '@heroicons/react/outline/AcademicCapIcon'
import VideoCamera from '@heroicons/react/outline/VideoCameraIcon'


export default function Hero(props) {
    const {data: session, status} = useSession()
  return (
    <>
    <section className="header relative pt-16 items-center flex w-full min-h-screen bg-opacity-100">
      <div className="w-full min-h-screen bg-gradient-to-r bg-opacity-25 from-green-400 to-blue-500 via-blue-400 bg-opacity-25">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32">
              <h2 className="font-bold text-6xl text-blue-100 px-12 mt-12">twilio tutor</h2>
              <h3 className="font-semibold text-3xl text-blue-200 px-12 mt-12">explore easy video tutoring with twilio</h3>
              <div className="flex flex-row flex-wrap justify-start font-semibold px-12 py-6">
                <div className=" flex flex-row space-x-12 bg-blue-500 rounded-xl px-6 py-6 space-x-6">
                  <AuthButton />
                  <ClassroomButton />
                </div>
              </div>
              <h3 className="font-semibold text-blue-200 px-12 mt-6">log in to see your your profile and test out the classroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import AuthTest from '../components/authtest'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Auth from '../components/auth'
import { TwilioError } from 'twilio-video'



const Classroom = () => {

  const { data: session, status } = useSession();
  return (
    <div className="">
      <Head>
        <title>twilio tutor</title>
        <meta name="description" content="tutor with twilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="heropattern mx-auto w-full min-h-screen">
        <div className="header relative pt-16 items-center flex flex-col w-full min-h-screen bg-opacity-100">
          <div className="flex flex-wrap mx-auto items-center justify-center pt-32">
            <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
              <h1 className="text-indigo-900 font-bold text-center text-3xl">welcome to the classroom</h1>
              <h2 className="text-indigo-900 font-bold text-center text-xl"> class will begin shortly </h2>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-wrap mx-auto items-center justify-center pt-32 px-6">
              <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
                <h1 className="text-indigo-900 font-bold text-center text-3xl uppercase">teacher</h1>
                <div id="video-div"></div>
                <button id="try-video-button">Video On!</button>
                <button id="stop-video-button">Video Off!</button>
              </div>
            </div>
            <div className="flex flex-wrap mx-auto items-center justify-center pt-32 px-6">
              <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
                <h1 className="text-indigo-900 font-bold text-center text-3xl uppercase">student</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Classroom

import Head from 'next/head'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import AuthTest from '../components/authtest'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import AcademicCap from '@heroicons/react/outline/AcademicCapIcon'

const Home = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="">
      <Head>
        <title>twilio tutor</title>
        <meta name="description" content="tutor with twilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="heropattern mx-auto w-full min-h-screen">
        <div className="flex flex-wrap mx-auto items-center justify-center pt-32">
          <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
            <h1 className="text-indigo-900 font-bold text-center text-3xl">welcome back</h1>
            <h1 className="text-indigo-900 font-bold text-center text-3xl">{session.user?.name}</h1>
          </div>
        </div>
        <div className="flex flex-wrap mx-auto items-center justify-center pt-6">
          <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
            <h1 className="text-indigo-900 font-bold text-center text-3xl">schedule</h1>
            <h1 className="text-indigo-900 font-bold text-center text-xl">hmmm... there doesn't seem to be anything here</h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    )
  }
  return (
    <div className="">
    <Head>
      <title>twilio tutor</title>
      <meta name="description" content="tutor with twilio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <main className="heropattern mx-auto w-full min-h-screen">
      <div className="flex flex-wrap mx-auto items-center justify-center pt-32">
        <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
          <h1 className="text-indigo-900 font-bold text-center text-3xl">hmmm... you don't seem to be logged in</h1>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto items-center justify-center pt-6">
        <div className="container mx-auto items-center justify-center bg-indigo-200 rounded-xl px-12 py-12">
          <h1 className="text-indigo-900 font-bold text-center text-3xl">you can log in here!</h1>
          <div className="bg-transparent hover:bg-blue-900 ease-linear transition-all border border-blue-300 hover:border-transparent py-2 px-2 rounded">
          <button onClick={signIn} className="uppercase text-blue-300 hover:text-white text-center justify-center items-center text-3xl">
            <h1> sign in </h1>
            <AcademicCap className="h-6 w-6" />
          </button>
      </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import AuthTest from '../components/authtest'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = () => {
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

export default Home

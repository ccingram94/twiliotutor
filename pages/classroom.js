import Head from 'next/head'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import AuthTest from '../components/authtest'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Auth from '../components/auth'

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
        <div className="header relative pt-16 items-center flex w-full min-h-screen bg-opacity-100">
          <Auth />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Classroom

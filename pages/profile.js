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
        <div className="flex flex-wrap mx-auto items-center justify-center">
          <h1>hello world</h1>
        </div>
        <button>hello world</button>
      </main>
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import Copyright from '@/components/Copyright'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import EmptyMemories from '@/components/EmptyMemories'
import BgBlur from '@/components/BgBlur'
import { cookies } from 'next/headers'
import Profile from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <section className="relative border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover after:absolute after:bottom-0 after:right-2 after:top-0 after:h-full after:w-2 after:bg-stripes">
        <div className="relative flex h-full flex-col items-start justify-between overflow-hidden px-28 py-16">
          <BgBlur />
          {isAuthenticated ? <Profile /> : <SignIn />}
          <Hero />
          <Copyright />
        </div>
      </section>
      <section className="bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </section>
    </main>
  )
}

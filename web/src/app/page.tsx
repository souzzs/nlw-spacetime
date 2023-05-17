import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import nlwLogo from '../assets/logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <section className="relative border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover after:absolute after:bottom-0 after:right-2 after:top-0 after:h-full after:w-2 after:bg-stripes">
        <div className="relative flex h-full flex-col items-start justify-between overflow-hidden px-28 py-16">
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

          <Link
            href=""
            className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <p className="max-w-[140px] text-sm leading-snug">
              <span className="underline">Crie sua conta</span> e salve suas
              memórias!
            </p>
          </Link>

          <div className="space-y-5">
            <Image src={nlwLogo} alt="Nlwspacetime" />
            <div className="max-w-[420px] space-y-1">
              <h1 className="text-5xl font-bold leading-tight text-gray-50">
                Sua cápsula do tempo
              </h1>
              <p className="text-lg leading-relaxed">
                Colecione momentos marcantes da sua jornada e compartilhe (se
                quiser) com o mundo!
              </p>
            </div>
            <Link
              href=""
              className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
            >
              Cadastrar Lembrança
            </Link>
          </div>

          <div className="text-sm leading-relaxed text-gray-200">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="underline transition-colors hover:text-gray-100"
            >
              Feito com ❤ no Nlw da Rocketseat
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex h-full items-center justify-center p-16">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda registrou nenhuma lembrança, comece a{' '}
            <Link
              href=""
              className="underline transition-colors hover:text-gray-50"
            >
              criar agora!
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

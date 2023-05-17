import { ReactNode } from 'react'
import './globals.css'
import { Roboto, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})
const baiJamJuree = BaiJamJuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jam-juree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, NextJs, TailwindCSS e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${baiJamJuree.className} bg-gray-900 font-sans font-normal text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import { Roboto_Slab } from 'next/font/google'
import NextAuthProvider from './providers'

const robotoSlab = Roboto_Slab({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
})

export const metadata = {
  title: 'YouTube',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body id='__next' className={robotoSlab.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}

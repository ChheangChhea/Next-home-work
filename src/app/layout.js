/* eslint-disable react/jsx-no-undef */
import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'istad.co',
  description: 'ISTAD is a noteworthy science and technology institute in Cambodia. ISTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
        <Footer/>
        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script> */}
    

    </html>
  )
}

import Navbar from './Components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReduxProvider } from './redux/provider'
import { SessionProvider } from "next-auth/react"
import { ToastBar, Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unlike Media',
  description: 'Generated by Unlike Media',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxProvider>
          <Toaster/>
        <Navbar />
          {children}
          </ReduxProvider>
      </body>
    </html>
  )
}

import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MainPage',
  description: 'MainPage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header/>
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>
        </main>
        </body>
    </html>
  )
}

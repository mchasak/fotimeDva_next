import type { Metadata } from 'next'
import { Roboto_Condensed, Poppins } from 'next/font/google'
import { getGlobalData, getGlobalPageMetadata } from '@/data/loaders'
import './globals.css'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/navigation/Footer'

const roboto = Roboto_Condensed({
  variable: '--roboto-condensed',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const poppins = Poppins({
  variable: '--poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata()

  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const globalData = await getGlobalData()
  const headerData = globalData.data.header
  const footerData = globalData.data.footer

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} overflow-x-hidden antialiased`}
      >
        <Header {...headerData} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  )
}

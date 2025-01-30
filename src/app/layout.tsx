import type { Metadata } from 'next'
import { Roboto_Condensed, Poppins } from 'next/font/google'
import { getGlobalData, getGLobalPageMetaData } from '@/data/loaders'
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

export async function generateMetaData(): Promise<Metadata> {
  const metadata = await getGLobalPageMetaData()

  return {
    title: metadata?.data?.title ?? 'Fotíme Dva',
    description: metadata?.data?.description ?? 'description',
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const globalData = await getGlobalData()
  console.dir(globalData, { depth: null })

  const headerData = globalData.data.header
  const footerData = globalData.data.footer

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <Header {...headerData} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  )
}

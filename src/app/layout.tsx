'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
        <Navbar />
       {children}
      <Footer />
      </ChakraProvider>
      </body>
    </html>
  )
}

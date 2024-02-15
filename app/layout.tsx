// layout.tsx
'use client'
import Head from 'next/head'
import type { Metadata } from 'next'
import { GlobalStyle } from '../components/GlobalStyles'
import './globals.css'
import ThemeSwitcher from './ThemeSwitcher'
import Providers from './providers'
import { Provider } from 'react-redux';
import { SpaceProvider } from './SpaceContext'
import store from '@/components/redux/store'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Top Interior Designer & Architect - Delhi - Gurgaon - India</title>
        <meta name="description" content="Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors with top quality materials." />
        <meta name="Author" content="Design Indian Homes" />
        <meta name="Generator" content="www.designindianhomes.com" />
        <meta name="Language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="Copyright" content="©www.designindianhomes.com" />
        <meta name="Designer" content="Design Indian Homes Unit" />
        <meta name="Publisher" content="www.designindianhomes.com" />
        <meta name="Distribution" content="Global" />
        <meta name="Rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://designindianhomes.com/" />
        <meta name="googlebot" content="index, follow" />
        <meta name="Yahoobot" content="index, follow" />
        <meta name="MSNbot" content="Index, Follow" />
        <meta name="allow-search" content="yes" />
        <meta name="country" content="India" />
        <meta name="contactNumber" content="+91-98-99-26-49-78" />
        <meta name="dc.language" content="english" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta property="og:url" content="http://www.designindianhomes.com/" />
        <meta property="og:title" content="Top Interior Designer & Architect - Delhi - Gurgaon - India" />
        <meta property="og:description" content="Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors with top quality materials." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@200;300;400;500;600&display=swap"
          as="style"

        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />

      </Head>
      <body>
        <Provider store={store}>
          <Providers>
            <SpaceProvider>
              <GlobalStyle />
              <header></header>
              {/* <ThemeSwitcher /> */}
              {children}
            </SpaceProvider>
          </Providers>
        </Provider>
      </body>
    </html>
  )
}

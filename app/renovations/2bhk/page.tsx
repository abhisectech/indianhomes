'use client'
import React from 'react'
import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'

import Link from 'next/link'
import ProgressBar from '@/components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'

const page = () => {
  return (
    <>
      <ProgressBar />

      <Header />

      <div className="mt-10 sm:mt-40 mb-16 mx-auto mx-8 sm:mx-16">
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/renovations">Renovations</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">2-BHK</span>
        </div>

        {/* tabs */}
        <Tabs id={1} />
      </div>
      <Footer />
    </>
  )
}

export default page

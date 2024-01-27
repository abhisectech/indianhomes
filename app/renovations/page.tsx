'use client'
import React from 'react'
import { renovationData } from './renovationData'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

import Header from '@/components/Navbar/Header'
import Footer from '@/components/Footer/Footer'

import Link from 'next/link'
import ProgressBar from '@/components/Progressbar'
import Card from './Card'
import MyForm from '@/components/MyForm'

const page = () => {
  const data = [
    {
      id: 1,
      heading: '1-BHK Designs',
      smallText: 'Description for Card 1',
      image: '/images/stock-image.avif',
      slug: '1bhk',
    },
    {
      id: 2,
      heading: '2-BHK Designs',
      smallText: 'Description for Card 2',
      image: '/images/stock-image.avif',
      slug: '2bhk',
    },
  ]
  return (
    <>
      <ProgressBar />

      <Header />

      <div className="mt-10 sm:mt-40 mb-16 mx-auto mx-8 sm:mx-16">
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Renovations</span>
        </div>

        <div className="flex items-center bg-white p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>

          <h1 className="text-3xl font-bold">Home Interior Design</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>
        {/* Rest of the page content goes here */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-16 mb-16">
        <MyForm />
      </div>

      <Footer />
    </>
  )
}

export default page

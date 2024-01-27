import React from 'react'

import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import WhySection from './WhySection'
import MyForm from './MyForm'
import CardFlip from './CardFlip'
import ImageList from './ImageList'
import SpacesTabs from './SpacesTabs'
import ClientReview from './ClientReview'
import FAQ from '../../components/FAQ/page'
import Omsairam from '../../components/Navbar/Omsairam'
const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <MyForm />
      <WhySection />
      <CardFlip />
      <ImageList />
      <SpacesTabs />
      <ClientReview />
      <FAQ />
      <Footer />
    </>
  )
}

export default page

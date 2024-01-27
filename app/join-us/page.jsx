import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ContactForm from '../../components/ContactForm/page'
const ScheduleChatSection = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: 'url("images/footer_BG_01.jpg")',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.51)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="text-center mx-auto text-white">
        <h1 className="text-4xl">
          We can build you the kitchen <br />
          of your dreams
        </h1>
        <br />
        <a
          href="https://api.whatsapp.com/send?phone=9899264978&amp;text=MODULAR KITCHEN DELHI - INDIA | MODULAR KITCHEN MANUFACTURERS"
          className="schedule-btn font-bold bg-yellow-400 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-500"
        >
          SCHEDULE A CHAT
        </a>
      </div>
    </section>
  )
}

const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <div className=" mt-16 lg:mt-36 mb-16">
        <h1 className="text-5xl font-extrabold text-center mb-8 mx-auto">
          JOIN TODAY WITH INDIA&apos;S TOP MODULAR BRAND
        </h1>
        <p className="uppercase text-md font-bold text-center mb-16">
          We are Delhi-NCR&apos;s fastest growing Kitchen & Interior brand with
          multiple designer&apos;s on our panel and looking for experienced and
          fresher designers to join us as freelancers/Regular and also be a part
          of our Team.
        </p>
      </div>
      <div className="bg-amber-50">
        <Form />
      </div>
      <ScheduleChatSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default page

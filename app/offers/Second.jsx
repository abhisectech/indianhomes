'use client'
import React from 'react'
import Image from 'next/image'

const ImageSection = () => {
  const [showDetails, setShowDetails] = React.useState(false)

  const handleToggle = () => {
    setShowDetails(!showDetails)
  }
  return (
    <>
      <section className="text-center bg-amber-50 rounded-lg mb-12 border-2 border-gray-300">
        <div className="relative w-full mx-0 h-auto lg:h-[420px]">
          <Image
            width={1636}
            height={1093}
            src="/images/offer1.jpg"
            alt="Your Image"
            className="w-full h-auto lg:h-[420px]"
          />
          <div className="absolute p-2 px-16 bg-white/60 bottom-0 left-1/2 transform -translate-x-1/2 ">
            <h2 className="text-2xl ">EVERYTHING</h2>
            <h2 className="text-3xl font-bold text-red-700">ESSENTIAL</h2>
            <p className="text-sm">ESSENTIAL WOOD WORKS FOR A 3BHK</p>
            <h3 className="text-md">
              OFFER{' '}
              <span className="line-through decoration-red-700 ml-2">
                <span className="text-xl">₹10.12</span>{' '}
                <span className="text-md">LAC</span>
              </span>{' '}
              <span className="text-2xl text-red-700 ml-2">₹6.12</span>{' '}
              <span className="text-red-700">LAC*</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold my-4 py-2 px-4 rounded-full shadow-md hover:shadow-xl focus:outline-none focus:shadow-outline"
            onClick={handleToggle}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        {showDetails && (
          <div className="flex flex-col lg:flex-row justify-around px-8 pb-8 sm:gap-8">
            <div className="lg:w-1/2 sm:p-4 text-left ">
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">FOYER</h2>
                <p className="text-sm">Shoe rack - 100*75 cm</p>
              </div>
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">LIVING ROOM</h2>
                <p className="text-sm">
                  Premium LCD display unit – 180 * 120 cm
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">DINING ROOM</h2>
                <p className="text-sm">
                  Medley black finish dining table 6 Seater - (L 210*W 110 cm)
                  Briano dining chair (3 Nos) 3 Seater dining bench – (1 No)
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">MASTER BEDROOM</h2>
                <p className="text-sm">
                  Soft close 3 door hinged wardrobe with grey wooden handle
                  Queen size bed without bottom Storage – 158*206.4 cm Bed side
                  table (1 No) – 50*40*35 cm (W*D*H)
                </p>
              </div>
            </div>
            {/* right side */}
            <div className="lg:w-1/2 sm:p-4 text-left ">
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">KIDS ROOM</h2>
                <p className="text-sm">
                  Soft close 3 door hinged wardrobe with white wooden handles
                  Queen size bed without bottom storage – 158*206.4 cm Bed side
                  table (1 No)– 50*40*35 cm (W*D*H)
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">GUEST BEDROOM</h2>
                <p className="text-sm">
                  Soft close 3 door hinged wardrobe with grey wooden handles
                  Queen size bed without bottom storage – 158*206.4 cm Bed side
                  table (1 No) – 50*40*35 cm (W*D*H)
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">MODULAR KITCHEN</h2>
                <p className="text-sm">
                  Bottom cabinet – 304*85 cm Top cabinet – 304*60 cm Hettich
                  (German Made – 15 years warranty) Accessories – 6 Nos* Hood
                  and Hob – Faber
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default ImageSection

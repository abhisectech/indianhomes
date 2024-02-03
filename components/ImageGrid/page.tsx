import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ImageGrid = () => {
  const imageList = [
    {
      src: '/images/top-picks/bathroom renovation.jpg',
      text: 'Bathroom Renovation',
    },
    {
      src: '/images/top-picks/bedroomrenovation.jpg',
      text: 'Bedroom Renovation',
    },
    {
      src: '/images/top-picks/beds.jpg',
      text: 'Beds',
    },
    {
      src: '/images/top-picks/door.jpg',
      text: 'Doors',
    },
    {
      src: '/images/top-picks/electric.jpg',
      text: 'Electric',
    },
    {
      src: '/images/top-picks/exterior cladding.jpg',
      text: 'Exterior Cladding',
    },
    {
      src: '/images/top-picks/glass partition.jpg',
      text: 'Glass Partitions',
    },
    {
      src: '/images/top-picks/Interior Lightening.jpg',
      text: 'Interior Lightening',
    },
    {
      src: '/images/top-picks/kitchen renovation.jpg',
      text: 'Kitchen Renovation',
    },
    {
      src: '/images/top-picks/plumbing.jpg',
      text: 'Plumbing',
    },
    {
      src: '/images/top-picks/pop.jpg',
      text: 'Pop',
    },
    {
      src: '/images/top-picks/sofa.jpg',
      text: 'Sofa',
    },
    {
      src: '/images/top-picks/tiling.jpg',
      text: 'Tiling',
    },
    {
      src: '/images/top-picks/upvc window.jpg',
      text: 'UPVC Windows',
    },
    {
      src: '/images/top-picks/Vertical Garden.jpg',
      text: 'Vertical Gardens',
    },
    {
      src: '/images/top-picks/wall pannaling.jpg',
      text: 'Wall Panneling',
    },
    {
      src: '/images/top-picks/wooden flooring.jpg',
      text: 'Wooden Flooring',
    },
    {
      src: '/images/top-picks/wooden polishing.jpg',
      text: 'Wooden Polishing',
    },

    // Add more images as needed
  ]

  const textVariant = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  }

  const imagesVariant = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  }

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: 'fit-content', // Adjust as needed
    width: 'fit-content', // Adjust as needed
    display: 'inline-block', // Ensure the container only takes the size of its content
  }

  const textContainerStyle: React.CSSProperties = {
    zIndex: '1', // Ensure text is above the background image
    textAlign: 'center', // Center the text
    position: 'relative', // Position the text within the container
  }

  const backgroundImageStyle: React.CSSProperties = {
    position: 'absolute', // Position the image behind the text
    top: '0',
    left: '0',
    width: '100%', // Set the width to 100%
    height: '100%', // Set the height to 100%
    objectFit: 'cover', // Ensure the image covers the container
    opacity: '1', // Adjust the opacity as needed
  }

  return (
    <>
      <div className="py-2 mb-12 sm:mt-28 mt-16 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          className="container mx-auto text-center"
        >
          {/* <motion.h2
              variants={textVariant}
              className="text-4xl font-bold mb-4"
            >
              End To End Structural
            </motion.h2> */}
          <motion.div
            variants={textVariant}
            className="flex justify-center items-center sm:my-8"
          >
            <div style={containerStyle} className="mb-4">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                  Top Picks For You
                </h1>
              </div>
              <img
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
                alt="Paint Brush"
                style={backgroundImageStyle}
              />
            </div>
          </motion.div>
          <motion.p variants={textVariant} className="text-gray-600">
            Impressive Collection For Your Home
          </motion.p>
        </motion.div>

        <div className="container mx-auto mt-8">
          <motion.div
            variants={imagesVariant}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-4"
          >
            {imageList.map((item, index) => (
              <motion.div
                variants={imagesVariant}
                key={index}
                className="text-center md:w-full sm:w-4/5 flex flex-col justify-center items-center"
              >
                {/* <div className="mb-4 sm:ml-8">
                    <Image
                      height={100}
                      width={200}
                      src={item.src}
                      alt={item.text}
                      className="w-full object-cover"
                    />
                    <p className="text-sm mt-2">{item.text}</p>
                  </div> */}
                <div className="mb-4 sm:w-[200px] w-[150px]">
                  <img
                    src={item.src}
                    alt={item.text}
                    className="w-full object-cover mr-4"
                  />
                  <p className="text-sm mt-2">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ImageGrid

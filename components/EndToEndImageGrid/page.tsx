import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link'
const EndToEndImageGrid = () => {
  const imageList = [
    {
      src: '/images/end/banquet renovation.jpg',
      text: 'Banquets Renovation',
      link: '/banquet-renovation-services',

    },
    {
      src: '/images/end/bathroom renovation1.jpg',
      text: 'Bathroom Renovation',
      link: '/bathroom-renovation-services',
    },
    {
      src: '/images/end/Bedroom Renovation.jpg',
      text: 'Bedroom Renovation',
      link: '/bedroom-renovation-services',
    },
    {
      src: '/images/end/Farmhouse Renovation.jpg',
      text: 'Farmhouse Renovation',
      link: '/farmhouse-renovation-services',
    },
    {
      src: '/images/end/GYM & SPA renovation.jpg',
      text: 'GYM & SPA Renovation',
      link: '/gym-spa-renovation-services',
    },
    {
      src: '/images/end/Hotel Renovation.jpg',
      text: 'Hotel Renovation',
      link: '/hotel-renovation-services'
    },
    {
      src: '/images/end/Interior Renovation.jpg',
      text: 'Interior Renovation',
      link: '/interior-renovation-services',
    },
    {
      src: '/images/end/Living Room Renovation.jpg',
      text: 'Living Room Renovation',
      link: '/living-room-renovation-services'
    },
    {
      src: '/images/end/Lounge Renovation.jpg',
      text: 'Lounge Renovation',
      link: '/lounge-renovation-services',
    },
    {
      src: '/images/end/mandir renovation.jpg',
      text: 'Mandir Room Renovation',
      link: '/mandir-renovation-services'
    },
    {
      src: '/images/end/SPA renovation.jpg',
      text: 'Kitchen & Wardrobe Renovation',
      link: '/gym-spa-renovation-services',
    },
    {
      src: '/images/end/Structural Renovation.jpg',
      text: 'Structural Renovation',
      link: '/structural-renovation-services'
    },
    {
      src: '/images/end/terrace renovation.jpg',
      text: 'Terrace Renovation',
      link: '/terrace-renovation-services'
    },
    {
      src: '/images/end/Villa renovation.jpg',
      text: 'Villa Renovation',
      link: '/villa-renovation-services'
    },

    // Add more images as needed
  ];

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
  };

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
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: "fit-content", // Adjust as needed
    width: "fit-content", // Adjust as needed
    display: "inline-block", // Ensure the container only takes the size of its content
  };

  const textContainerStyle: React.CSSProperties = {
    zIndex: "1", // Ensure text is above the background image
    textAlign: "center", // Center the text
    position: "relative", // Position the text within the container
  };

  const backgroundImageStyle: React.CSSProperties = {
    position: "absolute", // Position the image behind the text
    top: "0",
    left: "0",
    width: "100%", // Set the width to 100%
    height: "100%", // Set the height to 100%
    objectFit: "cover", // Ensure the image covers the container
    opacity: "0.5", // Adjust the opacity as needed
  };

  return (
    <>
      <MaxWidthWrapper className="mb-12 sm:mt-28 mt-16 flex flex-col items-center justify-center text-center">
        <div className="py-2">
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
                <div
                  style={textContainerStyle}
                  className="flex justify-center "
                >
                  <h1 className="sm:text-4xl text-xl font-bold text-center">
                    End To End Structural
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
              End To End We Undertake Including Complete Renovations
            </motion.p>
          </motion.div>

          <div className="container mx-auto mt-8">
            <motion.div
              variants={imagesVariant}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-2 md:grid-cols-3 gap-16"
            >
              {imageList.map((item, index) => (
                <motion.div
                  variants={imagesVariant}
                  key={index}
                  className="text-center md:w-full sm:w-4/5"
                >
                  <div className="mb-4 sm:ml-8">
                    <Link href={item.link}>
                    
                    <Image
                      height={100}
                      width={200}
                      src={item.src}
                      alt={item.text}
                      className="w-full object-cover"
                    />
                    </Link>
                    <p className="text-sm mt-2">{item.text}</p>
                  </div>
                  <div className="mb-4 sm:w-[300px] w-[150px] sm:ml-8">
                    <img
                    
                      src={item.src}
                      alt={item.text}
                      className="w-full object-cover"
                    />
                    <p className="text-sm mt-2">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default EndToEndImageGrid;

'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

const containerStyle = {
  position: 'relative',
  height: 'fit-content', // Adjust as needed
  width: 'fit-content', // Adjust as needed
  display: 'inline-block', // Ensure the container only takes the size of its content
}

const textContainerStyle = {
  zIndex: '1', // Ensure text is above the background image
  textAlign: 'center', // Center the text
  position: 'relative', // Position the text within the container
}

const backgroundImageStyle = {
  position: 'absolute', // Position the image behind the text
  top: '0',
  left: '0',
  width: '100%', // Set the width to 100%
  height: '100%', // Set the height to 100%
  objectFit: 'cover', // Ensure the image covers the container
  opacity: '1', // Adjust the opacity as needed
}

const CarouselBeforeAfter = () => {
  const [idx, setIdx] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const totalImages = 4
  console.log('curr - ' + idx)

  const preloadImages = () => {
    const imagePromises = []
    for (let i = 1; i <= totalImages; i++) {
      const image1 = new Image()
      const image2 = new Image()

      image1.src = `/images/beforeafter/after${i}.jpg`
      image2.src = `/images/beforeafter/before${i}.jpg`

      // Add both promises to the array
      imagePromises.push(
        new Promise((resolve) => {
          image1.onload = image2.onload = resolve
        })
      )
    }

    // Resolve the promise once all images are loaded
    Promise.all(imagePromises).then(() => setImagesLoaded(true))
  }

  // Call the preloadImages function when the component mounts
  useEffect(() => {
    preloadImages()
  }, [])

  // const handleBack = () => {
  //   if (idx > 1) {
  //     setIdx(idx - 1)
  //     // console.log('new -' + idx)
  //   } else {
  //     console.log('idx is less then 1')
  //   }
  // }

  // const handleNext = () => {
  //   if (idx < 4) {
  //     setIdx(idx + 1)
  //     // console.log('new -' + idx)
  //   } else {
  //     console.log('idx is more then 4')
  //   }
  // }

  const handleBack = () => {
    setIdx(((idx - 2 + totalImages) % totalImages) + 1)
  }

  const handleNext = () => {
    setIdx((idx % totalImages) + 1)
  }

  const FIRST_IMAGE1 = {
    imageUrl: `/images/beforeafter/after${idx}.jpg`,
  }
  const SECOND_IMAGE1 = {
    imageUrl: `/images/beforeafter/before${idx}.jpg`,
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      {/* Your existing content */}
      <hr className="border-t-[1px] border-red-500 w-full mb-8 my-16" />

      <div className="sm:px-16 " id="">
        {/* ... existing content ... */}
        <div className="mt-16 sm:mt-0">
          <div className="flex justify-center items-center sm:my-8">
            <div style={containerStyle} className="mb-4">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                  Before And After
                </h1>
              </div>
              <img
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
                alt="Paint Brush"
                style={backgroundImageStyle}
              />
            </div>
          </div>
          <h3 className="font-bold text-center">Affordable Luxury</h3>
          <p className="px-6 text-sm py-4 text-center">
            Transforming spaces into dreams waiting to unfold, our skilled team
            revives the ordinary into extraordinary.
          </p>
        </div>
      </div>

      {/* Carousel */}
      {imagesLoaded && (
        <>
          <div className="hidden sm:block mb-16 w-full max-h-[90%]">
            <div className="flex items-center justify-center">
              <button
                className={`ml-auto border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                onClick={handleBack}
              >
                <ChevronLeft />
              </button>
              <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE1}
                secondImage={SECOND_IMAGE1}
                className="mx-4 w-full" // Adjust margin as needed
              />
              <button
                className={`ml-auto border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                onClick={handleNext}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          {/* for small screen */}
          <div className="block sm:hidden mb-16 w-full max-h-[90%]">
            <div className="flex flex-col items-center justify-center gap-4">
              <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE1}
                secondImage={SECOND_IMAGE1}
                className="mx-4 w-full" // Adjust margin as needed
              />
              <div>
                <button
                  className={`ml-auto mr-2 border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                  onClick={handleBack}
                >
                  <ChevronLeft />
                </button>
                <button
                  className={`mr-auto ml-2 border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                  onClick={handleNext}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CarouselBeforeAfter

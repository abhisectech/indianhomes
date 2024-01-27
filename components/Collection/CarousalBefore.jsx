"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import ReactCompareImage from 'react-compare-image';
import {Slider} from './Slider'
const containerStyle = {
  position: "relative",
  height: "fit-content", // Adjust as needed
  width: "fit-content", // Adjust as needed
  display: "inline-block", // Ensure the container only takes the size of its content
};

const textContainerStyle = {
  zIndex: "1", // Ensure text is above the background image
  textAlign: "center", // Center the text
  position: "relative", // Position the text within the container
};

const backgroundImageStyle = {
  position: "absolute", // Position the image behind the text
  top: "0",
  left: "0",
  width: "100%", // Set the width to 100%
  height: "100%", // Set the height to 100%
  objectFit: "cover", // Ensure the image covers the container
  opacity: "0.5", // Adjust the opacity as needed
};
const FIRST_IMAGE1 = "https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg";

const SECOND_IMAGE1 = "https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so";

const FIRST_IMAGE = {
  imageUrl:
    "https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg",
};
const SECOND_IMAGE = {
  imageUrl:
    "https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so",
};

const CarouselBeforeAfter = () => {
  const carouselData = [
    { firstImage: 'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg', secondImage: 'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so' },
    { firstImage: 'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg', secondImage: 'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so' },
    { firstImage: 'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg', secondImage: 'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so' },

  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Your existing content */}
      <div className="sm:px-16 my-16" id="">
        {/* ... existing content ... */}
        <div className="mt-16 sm:mt-0">
          <div className="flex justify-center items-center sm:my-8">
            <div style={containerStyle} className="mb-4">
              <div
                style={textContainerStyle}
                className="flex justify-center "
              >
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
            Transforming spaces into dreams waiting to unfold, our skilled team revives the ordinary into extraordinary.
          </p>
        </div>
      </div>


      {/* Carousel */}
      <div className="mb-16">
        {/* <Slider {...settings}>
            {carouselData.map((data, index) => (
              <ReactBeforeSliderComponent
                key={index}
                firstImage={data.firstImage}
                secondImage={data.secondImage}
              />
            ))}
          </Slider> */}
        {/* <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
           {carouselData.map((data, index) => (
              <ReactBeforeSliderComponent
                key={index}
                firstImage={data.firstImage}
                secondImage={data.secondImage}
              />
            ))}
        </Carousel> */}
     
     <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
              />
        
         
{/* <Slider /> */}

      </div>
    </div>
  );
};

export default CarouselBeforeAfter
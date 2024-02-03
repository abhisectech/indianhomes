import { motion } from 'framer-motion'

import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const MobileCard = ({ image, title, description, slug }) => {
  return (
    <div className="w-[360px] h-[400px] mx-auto bg-white rounded-md overflow-hidden shadow-lg m-4">
      <Link href={`/offers/${slug}`}>
        <img
          src={image}
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex-col justify-between h-1/2">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  )
}

const MobileCarousel = () => {
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

  const slides = [
    {
      image:
        'https://source.unsplash.com/gray-2-seat-sofa-near-round-table-WPqcd-gpJeE',
      title: 'AFFORDABLE, YET WHOLESOME',
      description: ' On Top Priority',
      slug: '#top-priority',
    },
    {
      image:
        'https://source.unsplash.com/clear-glass-top-table-with-brown-wooden-base-YAp3j8EcjUo ',
      title: 'POCKET FRIENDLY, YET WELCOMING',
      description: 'Handcrafted for You',
      slug: '#top-priority',
    },
    {
      image:
        'https://source.unsplash.com/a-living-room-with-a-couch-coffee-table-and-potted-plant-Rf0a8n0VV_M',
      title: 'MINIMAL, YET OVERALL COVERAGE',
      description: 'Be Carefree & Happy',
      slug: '#top-priority',
    },
    {
      image:
        'https://source.unsplash.com/a-living-room-filled-with-furniture-and-a-fire-place-CXFt0FGdD58',
      title: 'LUXURY, YET AFFORDABLE',
      description: 'Over the Top',
      slug: '#top-priority',
    },
    {
      image:
        'https://source.unsplash.com/white-wooden-coffee-table-near-white-sofa-WgkA3CSFrjc',
      title: 'HIGH QUALITY WITH COMPLETE COMMITMENT',
      description: 'Premier Plus ',
      slug: '#top-priority',
    },
  ]
  return (
    <Carousel responsive={responsive} infinite={true}>
      {slides.map((card) => (
        <div key={card.title} className="m-4">
          <MobileCard
            image={card.image}
            title={card.title}
            description={card.description}
            slug={card.slug}
          />
        </div>
      ))}
    </Carousel>
  )
}

const Brands = () => {
  const slides = [
    {
      image:
        'https://source.unsplash.com/gray-2-seat-sofa-near-round-table-WPqcd-gpJeE',
      title: 'AFFORDABLE, YET WHOLESOME',
      description: ' On Top Priority',
    },
    {
      image:
        'https://source.unsplash.com/clear-glass-top-table-with-brown-wooden-base-YAp3j8EcjUo ',
      title: 'POCKET FRIENDLY, YET WELCOMING',
      description: 'Handcrafted for You',
    },
    {
      image:
        'https://source.unsplash.com/a-living-room-with-a-couch-coffee-table-and-potted-plant-Rf0a8n0VV_M',
      title: 'MINIMAL, YET OVERALL COVERAGE',
      description: 'Be Carefree & Happy',
    },
    {
      image:
        'https://source.unsplash.com/a-living-room-filled-with-furniture-and-a-fire-place-CXFt0FGdD58',
      title: 'LUXURY, YET AFFORDABLE',
      description: 'Over the Top',
    },
    {
      image:
        'https://source.unsplash.com/white-wooden-coffee-table-near-white-sofa-WgkA3CSFrjc',
      title: 'HIGH QUALITY WITH COMPLETE COMMITMENT',
      description: 'Premier Plus ',
    },
    /*  {
      img: "https://source.unsplash.com/white-wooden-coffee-table-near-white-sofa-WgkA3CSFrjc",
      title: "HIGH QUALITY WITH COMPLETE COMMITMENT", description: " Premier Plus "
    },
    */
    {
      image:
        'https://source.unsplash.com/black-metal-3-tier-rack-beside-white-couch-L5L2hiSh2Bo ',
      description: 'Redefine Luxury',
      title: ' TOP NOTCH LUXURY, WITH TOP NOTCH PRICING',
    },
  ]

  const imagesVariant = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.3,
      },
    },
  }

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

  return (
    <>
      <section className="bordered bordersec"></section>
      <div className="main-hero">
        <div className="cover">
          <div className="box ai"></div>
          <div className="box bi"></div>
        </div>
      </div>
      <div className="my-16">
        {/* <h1>Our Exclusive Packages</h1> */}
        <div className="flex justify-center items-center sm:my-8">
          <div style={containerStyle} className="mb-4">
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center ">
                Our Exclusive Packages
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
        <h3 className="font-bold text-center">
          The Best in Class &#34; Tailormade &#34; Interior Plans
        </h3>
      </div>
      {/* section visible in the large view */}
      <div className="jiu">
        <motion.div
          variants={imagesVariant}
          initial="initial"
          whileInView="animate"
          className="containeru"
        >
          {/* 1 */}
          <Link href="/offers/#top-priority">
            <motion.div variants={imagesVariant} className="blog-post m-4">
              <img src="/images/hpcards/card1.jpeg" alt="Man" />

              <div className="text-content">
                <img src="/images/hpcards/card1.jpeg" alt="" />
                <h3 className="post-mini"> On Top Priority</h3>
                <h2 className="post-title">AFFORDABLE, YET WHOLESOME</h2>
              </div>
            </motion.div>
          </Link>
          {/* 2 */}
          <Link href="/offers/#top-priority">
            <motion.div variants={imagesVariant} className="blog-post m-4">
              <img src="/images/hpcards/card2.jpeg " alt="Man" />

              <div className="text-content">
                <img src="/images/hpcards/card2.jpeg " alt="" />
                <h3 className="post-mini">Handcrafted for You</h3>
                <h2 className="post-title"> POCKET FRIENDLY, YET WELCOMING</h2>
              </div>
            </motion.div>
          </Link>
          {/* 3 */}

          <Link href="/offers/#top-priority">
            <motion.div variants={imagesVariant} className="blog-post m-4">
              <img src="/images/hpcards/card3.jpeg" />

              <div className="text-content">
                <img src="/images/hpcards/card3.jpeg" />
                <h3 className="post-mini"> Be Carefree & Happy </h3>
                <h2 className="post-title">MINIMAL, YET OVERALL COVERAGE</h2>
              </div>
            </motion.div>
          </Link>
          {/* 4 */}
          <Link href="/offers/#top-priority">
            <motion.div variants={imagesVariant} className="blog-post m-4">
              <img src="/images/hpcards/card4.jpeg" alt="Man" />

              <div className="text-content">
                <img src="/images/hpcards/card4.jpeg" />
                <h3 className="post-mini">Over the Top</h3>
                <h2 className="post-title">LUXURY, YET AFFORDABLE</h2>
              </div>
            </motion.div>
          </Link>
          {/* 5 */}
          <Link href="/offers/#top-priority">
            <motion.div variants={imagesVariant} className="blog-post m-4">
              <img src="/images/hpcards/card5.jpeg" alt="Man" />

              <div className="text-content">
                <img src="/images/hpcards/card5.jpeg " alt="" />
                <h3 className="post-mini"> Premier Plus </h3>
                <h2 className="post-title">
                  HIGH QUALITY WITH COMPLETE COMMITMENT
                </h2>
              </div>
            </motion.div>
          </Link>
          {/* 6 */}
          <Link href="/offers/#top-priority">
            <motion.div variants={imagesVariant} className="blog-post m-4">
              <img src="/images/hpcards/card6.jpeg " alt="Man" />

              <div className="text-content">
                <img src="/images/hpcards/card6.jpeg" alt="" />
                <h3 className="post-mini">Redefine Luxury </h3>
                <h2 className="post-title">
                  TOP NOTCH LUXURY, WITH TOP NOTCH PRICING
                </h2>
              </div>
            </motion.div>
          </Link>
          {/* ------------ */}
        </motion.div>
      </div>
      {/* section of carousel not visible in laptop in mobile */}
      <div className="lg:hidden">
        <MobileCarousel />
      </div>
      {/* section of black circles */}
      <section class="bordered bordersec"></section>
      <div className="main-hero">
        <div className="cover">
          <div className="box ai"></div>
          <div className="box bi"></div>
        </div>
      </div>
      <div className="my-16">
        {/* <h1>Why We Deliver Inspiring Interiors</h1> */}
        <div className="flex justify-center items-center sm:my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Why We Deliver Inspiring Interiors
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="key-container">
        <div data-key={65}>
          <span>
            <kbd>Since</kbd>2004
          </span>
        </div>
        <div data-key={83}>
          <span>
            <kbd>Premium</kbd>Materials
          </span>
        </div>
        <div data-key={68}>
          <span>
            <kbd>10 Years</kbd>
            Warranty
          </span>
        </div>
        <div data-key={70}>
          <span>
            <kbd> Completion</kbd>
            45 Years
          </span>
        </div>
        <div data-key={71}>
          <span>
            <kbd>Furnishing</kbd>
            200 Homes/MTH
          </span>
        </div>
        <div data-key={72}>
          <span>
            <kbd>Lifelong</kbd>
            Service Supplier
          </span>
        </div>
      </div>
    </>
  )
}
export default Brands

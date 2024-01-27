"use client";
import React, { Component, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import WaveGradient from "@/components/Navbar/WaveGradient";
import Link from "next/link";
import "./Gradient.css";
import { Tabs, Tab, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ParagraphTab = ({ text }) => {
  return <p className="text-lg">{text}</p>;
};
const LocationsTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paragraphs = [
    "Exclusive Lacquer Glass Wardrobe Designs Wardrobe – Wardrobe Dealers & Manufacturers in Ghitorni Wardrobe Designs – Wardrobe Dealers & Manufacturers in Golf Links Wardrobe Designs – Wardrobe Dealers & Manufacturers in Greater Kailash Wardrobe Designs – Wardrobe Dealers & Manufacturers in Greater Noida Wardrobe Designs – Wardrobe Dealers & Manufacturers in Green Park Wardrobe Designs – Wardrobe Dealers & Manufacturers in Gulmohar Park Wardrobe Designs – Wardrobe Dealers & Manufacturers in Gurgaon Wardrobe Designs – Wardrobe Dealers & Manufacturers in Hauz Khas Wardrobe Designs – Wardrobe Dealers & Manufacturers in Jaipur Wardrobe Designs – Wardrobe Dealers & Manufacturers in Janak Puri – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Kalkaji Wardrobe Designs – Wardrobe Dealers & Manufacturers in Karol Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Mayur Vihar Wardrobe Designs – Wardrobe Dealers & Manufacturers in Meena Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Mehrauli Wardrobe Designs – Wardrobe Dealers & Manufacturers in Neeti Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Noida Wardrobe Designs – Wardrobe Dealers & Manufacturers in Panchsheel Wardrobe Designs – Wardrobe Dealers & Manufacturers in Punjabi Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Rajinder Nagar Wardrobe Designs – Wardrobe Dealers & Manufacturers in Rajouri Garden Wardrobe Designs – Wardrobe Dealers & Manufacturers in Rishikesh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Sainik Farms Wardrobe Designs – Wardrobe Dealers & Manufacturers in Sarita Vihar Wardrobe Designs – Wardrobe Dealers & Manufacturers in Shanti Niketan Wardrobe Designs – Wardrobe Dealers & Manufacturers in Vaishali Wardrobe Designs – Wardrobe Dealers & Manufacturers in Vasant Kunj Wardrobe Designs – Wardrobe Dealers & Manufacturers in Vasant Vihar wardrobe-dealers-delhi-gurgaon-india wardrobe-designs-gallery-delhi-gurgaon-noida Wardrobe Dealers & Manufacturers in Safdarjung Enclave, Delhi Wardrobe Designs – Dealers & Manufacturers in New Friends Colony Wardrobe Designs – Dealers & Manufacturers in Pamposh Enclave Wardrobe Designs – Wardrobe Dealers & Manufacturers in Alaknanda – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Anand Lok – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Anand Niketan – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Asiad Village – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Chanakyapuri Wardrobe Designs – Wardrobe Dealers & Manufacturers in Chirag Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in CR Park Wardrobe Designs – Wardrobe Dealers & Manufacturers in Defence Colony Wardrobe Designs – Wardrobe Dealers & Manufacturers in Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in East of Kailash Wardrobe Designs – Wardrobe Dealers & Manufacturers in Faridabad",
    "Mandir-manufacturers-delhi-gurgaon Modular Kitchen Dealers & Manufacturers in Alaknanda – New Delhi Modular Kitchen Dealers & Manufacturers in Anand Lok – New Delhi Modular Kitchen Dealers & Manufacturers in Anand Niketan – New Delhi Modular Kitchen Dealers & Manufacturers in Ashok Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Asiad Village – New Delhi Modular Kitchen Dealers & Manufacturers in Chanakyapuri – New Delhi Modular Kitchen Dealers & Manufacturers in Chirag Delhi – New Delhi Modular Kitchen Dealers & Manufacturers in Civil Lines Modular Kitchen Dealers & Manufacturers in CR Park – New Delhi Modular Kitchen Dealers & Manufacturers in Defence Colony Modular Kitchen Dealers & Manufacturers in Dehradun Modular Kitchen Dealers & Manufacturers in Dwarka – New Delhi Modular Kitchen Dealers & Manufacturers in East of Kailash – New Delhi Modular Kitchen Dealers & Manufacturers in Faridabad Modular Kitchen Dealers & Manufacturers in Greater Kailash – New Delhi Modular Kitchen Dealers & Manufacturers in Greater Noida Modular Kitchen Dealers & Manufacturers in Green Park – New Delhi Modular Kitchen Dealers & Manufacturers in Gulmohar Park – Delhi Modular Kitchen Dealers & Manufacturers in Gurgaon – Gurugram Modular Kitchen Dealers & Manufacturers in Haridwar Modular Kitchen Dealers & Manufacturers in Hauz Khas – New Delhi Modular Kitchen Dealers & Manufacturers in Jaipur Modular Kitchen Dealers & Manufacturers in Janak Puri – Delhi Modular Kitchen Dealers & Manufacturers in Kalindi Kunj – New Delhi Modular Kitchen Dealers & Manufacturers in Kalkaji – New Delhi Modular Kitchen Dealers & Manufacturers in Karol Bagh – Delhi Modular Kitchen Dealers & Manufacturers in Khan Market – New Delhi Modular Kitchen Dealers & Manufacturers in Mayur Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Meena Bagh Modular Kitchen Dealers & Manufacturers in Mehrauli – Delhi Modular Kitchen Dealers & Manufacturers in Model Town – New Delhi Modular Kitchen Dealers & Manufacturers in Neeti Bagh Modular Kitchen Dealers & Manufacturers in New Delhi Modular Kitchen Dealers & Manufacturers in New Friends Colony Modular Kitchen Dealers & Manufacturers in Noida Modular Kitchen Dealers & Manufacturers in Pamposh Enclave – Delhi Modular Kitchen Dealers & Manufacturers in Panchsheel – New Delhi Modular Kitchen Dealers & Manufacturers in Patel Nagar Modular Kitchen Dealers & Manufacturers in Pitam Pura – Delhi Modular Kitchen Dealers & Manufacturers in Preet Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Punjabi Bagh Modular Kitchen Dealers & Manufacturers in Rajinder Nagar Modular Kitchen Dealers & Manufacturers in Rajokri – New Delhi Modular Kitchen Dealers & Manufacturers in Rajouri Garden – New Delhi Modular Kitchen Dealers & Manufacturers in Rishikesh Modular Kitchen Dealers & Manufacturers in Safdarjung Enclave – New Delhi Modular Kitchen Dealers & Manufacturers in Sainik Farms – New Delhi Modular Kitchen Dealers & Manufacturers in Saket – New Delhi Modular Kitchen Dealers & Manufacturers in Sarita Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Shanti Niketan – New Delhi Modular Kitchen Dealers & Manufacturers in Vaishali – New Delhi Modular Kitchen Dealers & Manufacturers in Vasant Vihar – New Delhi",
    "White Colour Modular Kitchen Designs Yellow Colour Modular Kitchen Designs in Delhi Gurgaon Noida India Silver Colour Modular Kitchen Designs Sky Blue Modular Kitchens Designs in Delhi Gurgaon Noida India Orange Modular Kitchen Designs in Delhi Gurgaon Noida India Pink Modular Kitchen Designs in Delhi Gurgaon Noida India Purple Modular Kitchen Design collection in Delhi and India Red Colour Modular Kitchen Designs Beige Colour Modular Kitchen designs in Delhi Gurgaon Noida India Black Modular Kitchen Designs in Delhi & India Blue Colour Modular Kitchens in Delhi Gurgaon Noida India Brown Colour Modular Kitchens in Delhi Gurgaon Noida India Cappuccino Cream colour modular kitchen designs in delhi india Charcoal Modular Kitchen Designs Colourful Modular Kitchen in Delhi gurgaon Noida India Green Colour Modular Kitchen Designs Grey Colour Modular Kitchen Designs in Delhi Maroon Modular Kitchen Designs in Delhi Gurgaon Noida India",
  ];

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",

      marginRight: theme.spacing(1),
      color: "#99adc9",
      fontFamily: "BioRhyme",

      "&.Mui-selected": {
        color: "#ffffff",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );

  return (
    <div className="container mx-auto mt-8 p-0">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="auto" // Add this to make tabs span the full width
        className="text-center whitespace-nowrap" // Add this to center the text in tabs
      >
        <StyledTab
          label="LOCATION - WARDROBE DESIGNS"
          className="sm:text-xl text-sm font-[500] my-2"
        />
        <StyledTab
          label="LOCATION - WARDROBE DESIGNS"
          className="sm:text-xl text-sm font-[500] my-2"
        />
        <StyledTab
          label="LOCATION - WARDROBE DESIGNS"
          className="sm:text-xl text-sm font-[500] my-2"
        />
      </Tabs>
      <Box width="100%" className="mt-2">
        {value === 0 && <ParagraphTab text={paragraphs[0]} />}
        {value === 1 && <ParagraphTab text={paragraphs[1]} />}
        {value === 2 && <ParagraphTab text={paragraphs[2]} />}
      </Box>
    </div>
  );
};

const DesignDropdown = ({
  id,
  heading,
  links,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === id;

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : id);
  };

  return (
    <div className="relative inline-block text-left">
      <button className="focus:outline-none" onClick={toggleDropdown}>
        <span className="cursor-pointer text-black hover:text-blue-700 font-bold">
          {heading}
        </span>
        <svg
          className={`ml-2 h-4 w-4 inline-block transform ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="z-10 absolute mt-2 bg-[#87fff0] border rounded-lg shadow-md w-64">
          <ul>
            {links.map((link, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-[#4f9ecc] rounded-lg"
              >
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
const DesignIdeasDropdownContainer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownData = [
    {
      id: 1,
      heading: "Design Ideas",
      links: [
        { label: "Modular Kitchens", url: "/modular-kitchen-designs" },
        { label: "Wardrobes", url: "/wardrobe-designs" },
        { label: "Vanities", url: "/vanity-designs" },
        { label: "Dressers", url: "/dressers-designs" },
        { label: "TV Units", url: "/tv-unit-designs" },
        { label: "Crockery Units", url: "/crockery-unit-designs" },
        { label: "Glass Partitions", url: "/glass-partition-designs" },
        // Add other links as needed
      ],
    },
    {
      id: 2,
      heading: "Interior",
      links: [
        {
          label: "1bhk residence interior designs",
          url: "/1bhk-apartment-interior-designs",
        },
        {
          label: "2bhk residence interior designs",
          url: "/2bhk-apartment-interior-designs",
        },
        {
          label: "3bhk residence interior designs",
          url: "/3bhk-apartment-interior-designs",
        },
        {
          label: "4bhk residence interior designs",
          url: "/4bhk-apartment-interior-designs",
        },
        { label: "Villa interior designs", url: "/villa-interior-designs" },
        {
          label: "Farmhouse interior designs ",
          url: "/farmhouse-interior-designs",
        },
        {
          label: "Penthouse interior designs ",
          url: "/penthouse-interior-designs",
        },
        {
          label: "Studio apartment interior designs ",
          url: "/studio-apartment-interior-designs",
        },
        {
          label: "Bungalow interior designs ",
          url: "/bungalow-interior-designs",
        },
        {
          label: "Duplex Residence interior Designs ",
          url: "/duplex-interior-designs",
        },
        { label: "Cottage Interior Designs", url: "/cottage-interior-designs" },
      ],
    },
    {
      id: 3,
      heading: "Architecture",
      links: [
        { label: "Consultancy", url: "/architectural-consultancy" },
        { label: "Designing & Planning", url: "/architectural-brand-in-india" },
        {
          label: "End to End Structural Projects ",
          url: "/top-architects-in-india",
        },
        {
          label: "Luxury Residences ",
          url: "/commercial-architectural-delhi-india",
        },
        { label: "Renovations", url: "/home-renovation-services" },
      ],
    },
    {
      id: 4,
      heading: "Modular Kitchen",
      links: [
        { label: "Types of Modular Kitchen", url: "/modular-kitchen-types" },
        { label: "Modular Kitchen Designs", url: "/modular-kitchen-designs" },
        {
          label: "Luxury Modular Kitchen ",
          url: "/luxury-modular-kitchen-india",
        },
        {
          label: "Kitchen Renovation ",
          url: "/modular-kitchen-renovation-services",
        },
        { label: "Get Estimate ", url: "/modular-kitchen-price-estimator" },
      ],
    },
    {
      id: 5,
      heading: "Wardrobes",
      links: [
        { label: "Types of Wardrobes ", url: "/types-of-wardrobe-designs" },
        { label: "Luxury Wardrobes", url: "/luxury-wardrobe-designs-india" },
        { label: "Wardrobe Designs", url: "/wardrobe-designs" },
        {
          label: "Lacquer Glass Wardrobe Designs",
          url: "/lacquer-glass-wardrobe-designs",
        },
        {
          label: "Wardrobe Renovation Services ",
          url: "/wardrobe-renovation-services",
        },
      ],
    },
    {
      id: 6,
      heading: "Modular Interior",
      links: [
        { label: "Mandir", url: "/mandir-designs" },
        { label: "Chest of Drawers", url: "/chest-of-drawer-designs" },
        { label: "Bar Units", url: "/Bar-unit-designs" },
        { label: "Side Tables", url: "/side-table-designs" },
        { label: "Foldable Beds ", url: "/foldable-area-designs" },
        { label: "Foyer Cabinets ", url: "/foyer-area-designs" },
        { label: "Bathroom Vanities ", url: "/vanity-designs" },
      ],
    },
    // Add data for other dropdowns
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 gap-y-8">
      {dropdownData.map((dropdown) => (
        <DesignDropdown
          key={dropdown.id}
          id={dropdown.id}
          heading={dropdown.heading}
          links={dropdown.links}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      ))}
    </div>
  );
};
export class Footer extends Component {
  render() {
    return (
      <div className="gradient">
        <div className="mt-22 container">
          {/* <WaveGradient /> */}
          <div className=" row">
            <div className="text-black col-lg-12 flex items-center justify-center">
              <button className="display-center run rounded-full border-dotted border-2 border-black py-12 mt-4 md:py-48 hover:bg-black hover:text-white">
                <a href="tel:+919899264978" className="">
                  Call Us Today! <br />
                  <span className="button2 pb-4">
                    We can talk about how big this button is.
                  </span>
                </a>
              </button>
            </div>
          </div>

          <h1 className="text-4xl md:text font-semibold text-center text-black pt-16">
            Know The Trinity Brands
          </h1>

          <div className="flex flex-col items-center md:flex-row justify-center gap-6 md:gap-32 w-full mt-5">
            {/* Brand 1 */}
            <a href="https://www.designindiankitchen.com" target="_blank" rel="noopener noreferrer">
              <div className="text-center flex flex-col items-center justify-center">

                <Image
                  src="/dkilogo.png"
                  alt=""
                  width={200}
                  height={80}
                />
                <p className="text-green-500 text-2xl font-medium">
                  Design Indian Kitchen
                </p>

              </div>
            </a>

            {/* Brand 2 */}
            <a href="https://www.designindianhomes.com" target="_blank" rel="noopener noreferrer">
              <div className="text-center flex flex-col items-center justify-center">
                <Image
                  src="/desig indian homes.gif"
                  alt=""
                  width={200}
                  height={80}

                />
                <p className="text-green-500 text-2xl font-medium">
                  Design Indian Home
                </p>
              </div>
            </a>

            {/* Brand 3 */}
            <a href="https://www.designindianwardrobes.com" target="_blank" rel="noopener noreferrer">
              <div className="text-center flex flex-col items-center justify-center">
                <Image
                  src="/footer-logo-multi.png"
                  alt=""
                  width={300}
                  height={80}

                />
                <p className="text-green-500 text-2xl font-medium">
                  Design Indian Wardrobe
                </p>
              </div>
            </a>
          </div>

          {/* Features Section */}
          <div
            className="flex flex-col items-center md:flex-row justify-center    p-10 gap-6 mt-10 text-black"
            style={{ alignItems: "center" }}
          >
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image src="/warranty.png" alt="" width={108} height={80} />
              </div>

              <h1 className="font-bold text-center text-sm">
                Flat 10 year warranty
              </h1>
              <p className="text-sm">
                Choose interiors designed with superior quality material,
                leaving no room for defects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center mt-4 md:mt-0">
              <div className="flex justify-center">
                <Image
                  src="/fast-delivery.png"
                  alt=""
                  width={128}
                  height={80}
                />
              </div>

              <h1 className="font-bold text-center text-sm">45-day delivery</h1>
              <p className="text-sm">
                Get beautiful interiors for your new home in just 45 days.
                That’s our delivery guarantee.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center mt-4 md:mt-0">
              <div className="flex justify-center">
                <Image
                  src="/team-building.png"
                  alt=""
                  width={128}
                  height={80}
                />
              </div>
              <h1 className="font-bold text-center text-sm">
                600+ design experts
              </h1>
              <p className="text-sm">
                Explore design ideas and co-create your dream home with our
                experienced designers
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center mt-4 md:mt-0">
              <div className="flex justify-center">
                <Image
                  src="/customer-service.png"
                  alt=""
                  width={128}
                  height={80}
                />
              </div>
              <h1 className="font-bold text-center text-sm">
                Post-installation service
              </h1>
              <p className="text-sm">
                Complete your design journey and get unwavering support from our
                dedicated care team.
              </p>
            </div>
          </div>

          {/* Social Media and Copyright Section */}
          {/* add hr */}
          <hr className="mb-12 border-t-2 border-black" />
          <div className="flex flex-col md:flex-row justify-center gap-8  text-black">

            {/* Social Media Icons */}
            <div className="text-left">
              <Image
                src="/desig indian homes.gif"
                alt="footer logo"
                width={128}
                height={80}
              />
              <div className="flex gap-4 mt-4 hover">
                <SocialIcon
                  network="twitter"
                  url="www.vimeo.com"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <SocialIcon
                  network="facebook"
                  url="www.vimeo.com"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <SocialIcon
                  network="instagram"
                  url="www.vimeo.com"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <SocialIcon
                  network="linkedin"
                  url="www.vimeo.com"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
              <p className="mt-8">
                © Copyright <strong>Design Indian Homes</strong> 2023. <br />{" "}
                All Rights Reserved
              </p>
            </div>

            <div className="px-0 mx-0">

              <DesignIdeasDropdownContainer />
            </div>


            <div>
              <Image
                src="/homes-gif-logo-optimize.gif"
                alt=""
                width={300}
                height={100}
              />
            </div>
          </div>
          <div>
            {/* <h1 className="text-6xl md:text-lg font-extrabold text-center my-16">
              WE ARE DELHI BASED
            </h1> */}
            <div className="flex flex-col md:flex-row justify-center gap-36 mt-16  text-black">
              <div>
                <h1 className="text-4xl font-bold ">THE BRAND</h1>
                <ul className="text-lg font-bold mt-4">
                  <li className="mb-2">
                    <Link href="/home-renovation-services-in-delhi-gurgaon-noida-india">
                      Renovation
                    </Link>
                  </li>
                  <Link href="/virtual-interior-designing-meeting">
                    <li className="mb-2">Book a Virtual Meeting</li>
                  </Link>
                  <Link href="/about-best-interior-designers-architects">
                    <li> About Us</li>
                  </Link>
                  <Link href="/largest-interior-designing-brand">
                    <li className="mb-2">The Team</li>
                  </Link>
                  <Link href="/collaborate-with-architects-interior-designers">
                    <li>Collaborate with Us</li>
                  </Link>
                  <Link href="/customer-reviews-interior-designs">
                    {" "}
                    <li className="mb-2">Reviews</li>
                  </Link>
                  <Link href="/interior-designing-plans-for-residences">
                    <li className="mb-2"> Our Packages </li>
                  </Link>
                  <Link href="/why-choose-the-best-interior-designers">
                    <li className="mb-2">Why Choose Us</li>
                  </Link>
                  <Link href="/join-the-largest-interior-designing-brand">
                    <li className="mb-2">Join As a Designer</li>
                  </Link>
                  <Link href="/book-with-top-interior-designers-architects">
                    <li className="mb-2">Book a Design Visit</li>
                  </Link>
                </ul>
              </div>
              <div>
                <h1 className="text-4xl font-bold">COLLABORATE</h1>
                <ul className="text-lg font-bold mt-4">
                  <Link href="/join-us">
                    <li className="mb-2"> PARTNER WITH US</li>
                  </Link>
                  <Link href="/offer">
                    <li className="mb-2">REFER FOR REWARDS</li>
                  </Link>
                  <Link href="/join-us">
                    <li className="mb-2"> JOIN AS-A DESIGNER</li>
                  </Link>
                  <Link href="">
                    <li className="mb-2">
                      FOR - ARCHITECTS & <br /> INTERIOR DESIGNERS
                    </li>
                  </Link>
                </ul>
              </div>
              <div>
                <h1 className="text-4xl font-bold">LETS CONNECT</h1>
                <form onSubmit={null} className="mt-4">
                  <input
                    type="text"
                    name="name"
                    value={null}
                    placeholder="Name"
                    className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
                    onChange={null}
                  />

                  <br />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={null}
                    className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
                    onChange={null}
                  />

                  <br />

                  <input
                    type="text"
                    name="contactNumber"
                    value={null}
                    placeholder="Mobile Number"
                    className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
                    onChange={null}
                  />

                  <br />

                  <textarea
                    name="message"
                    value={null}
                    placeholder="Message"
                    onChange={null}
                    className="w-full mb-8 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
                  />

                  <br />
                  <button
                    type="submit"
                    // className="py-2 px-6 hover:text-white hover:bg-black"
                    // style={{ border: "1px solid black" }}
                    className="w-full rounded-full border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 transition-all duration-300 bg-gradient-to-r from-lime-300 to-green-400"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div
              className="flex flex-col md:flex-row justify-center text-black"
              style={{ gap: "110px", marginTop: "100px" }}
            >
              <div style={{ width: "300px" }}>
                <h1 className="font-bold text-2xl uppercase">Contact Us</h1>
                <div className="mt-8 text-sm">
                  <p className="font-extrabold mb-2 underline">DESIGNING & OPERATIONS OFFICE -</p>
                  <p className="mb-6">
                    25/42, A BLOCK, MIDDLE CIRCLE,
                    CONNAUGHT PLACE, NEW DELHI - 110001 NEAR RAJIV CHOWK METRO
                    STN, GATE NO.8{" "}
                  </p>
                  <p className="font-extrabold mb-2 underline">  CORPORATE INDUSTRIAL UNIT -</p>
                  <p className="mb-6">
                    G - 984, NARELA DSIIDC INDUSTRIAL
                    AREA, NEW DELHI - 110040
                  </p>
                  <p className="font-extrabold mb-2 underline">MOBILE PHONE NUMBER -</p>
                  <p className="mb-6">
                    0-9899264978 /
                    0-9582827928/ 0-9899239097

                  </p>
                  <p className="font-extrabold mb-2 underline">LANDLINE NUMBER -</p>
                  <p className="mb-6">

                    01144127897


                  </p>
                  <p className="font-extrabold mb-2 underline">EMAIL -</p>
                  <p className="mb-6">



                    ENQUIRY@DESIGNINDIANKITCHEN.COM

                  </p>
                  <p className="font-extrabold mb-2 underline">TIMING -</p>
                  <p className="mb-6">




                    MONDAY - SATURDAY:<br />  10:30 AM - 7:30 PM <br />
                    SUNDAY:<br /> 11:00 AM - 7:00 PM
                    ONLY FOR SITE VISITS
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-2xl">OTHER BUSINESS SITES</h1>
                <ul className="mt-8 text-sm">
                  <li className="mb-4 font-bold">
                    <a>DESIGN INDIAN KITCHEN</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>DESIGN INDIAN WARDROBE</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>MODULAR KITCHEN IN DELHI</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>MODULAR KITCHEN IN GURGAON</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>DESIGN INDIAN HOMES</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>MODULAR KITCHEN IN NOIDA</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>THE DESIGNER LOUNGE</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>DEVOTIONAL INDIA</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>TALLY SOLUTION</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-2xl">CHECK US OUT</h1>
                <ul className="mt-8 text-sm">
                  <li className="mb-4 font-bold">
                    <a>CUSTOMER REVIEWS</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>THE MODULAR PROCESS</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>REQUEST A BROCHURE</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>BOOK A VISIT TODAY</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>CORPORATE PRESENCE OF OUR BRAND</a>
                  </li>
                  <li className="mb-4 font-bold">
                    <a>GET QUOTES</a>
                  </li>
                </ul>

                <div className="flex">
                  <div>
                    <ul className="border-l-4 border-black pl-2">
                      <li className="mb-2 font-bold">
                        ORGANIZATION & INDUSTRIAL BUSINESS
                      </li>
                      <li className="mb-2 font-bold">OPERATED SINCE 2008.</li>
                      <li className="mb-2 font-bold">ALL RIGHTS RESERVED.</li>
                      <li className="mb-2 font-bold">ALL WRONGS REVERSED.</li>
                      <li className="mb-2 font-bold">DATA PRIVACY</li>
                      <li className="mb-2 font-bold">ND 9:16 AM</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-2 font-bold">WORK</li>
                      <li className="mb-2 font-bold">ABOUT</li>
                      <li className="mb-2 font-bold">CAREERS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-1 md:p-4 text-black">
            <hr className="flex justify-center h-2 w-11/12 border-1 border-black ml-4 md:ml-14" />


          </div>
        </div>

        <div className="location mx-4 sm:mx-12 my-16">
          <LocationsTabs />
        </div>

        <div className="text-center text-black text-sm  py-4 bg-white mb-16 sm:mb-0">
          <p>
            DESIGN INDIAN HOMES | ALL RIGHTS RESERVED 2024-25 CRAFTED WITH LOVE
            BY IN HOUSE BRAND - <a
              href="https://www.designerlounge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-bold underline"
            >
              THE DESIGNER LOUNGE
            </a> <br /> <span className="text-blue-500 underline">PRIVACY</span> | <span className="text-blue-500 underline">LEGAL</span> | <span className="text-blue-500 underline">SITEMAP</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Image from "next/image";
// Sample data for images
const tabData = [
  // Data for Tab 1
  [" /images/a.png", " /images/b.png", " /images/c.png", " /images/d.png"],
  [" /images/e.png", " /images/f.png", " /images/g.png", " /images/h.png"],
  [" /images/i.png", " /images/j.png", " /images/k.png", " /images/l.png"],
  // Data for Tab 2 (and so on...)
  // ...
];

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: 400,
    fontSize: 24,

    marginRight: theme.spacing(1),
    color: "#4B5563",
    fontFamily: "BioRhyme",
    fontSize: "20px",
    "&.Mui-selected": {
      color: "#68D391",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <>
      <div className="div">
        <section class="bordered bordersec"></section>
        <div className="main-hero">
          <div className="cover">
            <div className="box ai"></div>
            <div className="box bi"></div>
          </div>
        </div>
        <div className="mt-16">
          {/* <h1>End-to-End Interior Solutions</h1> */}
          <div className="flex justify-center items-center sm:my-8">
            <div style={containerStyle}>
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                  End-to-End Interior Solutions
                </h1>
              </div>
              <img
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
                alt="Paint Brush"
                style={backgroundImageStyle}
              />
            </div>
          </div>
          <h3 className="font-bold text-center">Our Interior services </h3>
        </div>
        <Container maxWidth="md" className="mt-8">
          <Box className=" flex justify-center sm:px-8 py-4 sm:py-8">
            <StyledTabs
              value={value}
              onChange={handleChange}
              allowScrollButtonsMobile
              scrollButtons="auto"
              aria-label="styled tabs example"
              className="flex justify-center"
            >
              <StyledTab label="Exterior " />
              <StyledTab label="Interior " />
              <StyledTab label="Complete " />
            </StyledTabs>
          </Box>

          {/* Display the images based on the selected tab */}
          {tabData.map((tabImages, index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 justify-center">
                {tabImages.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    className="w-60 h-48 rounded-lg"
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </Container>
      </div>{" "}
    </>
  );
};

// Custom TabPanel component to conditionally render content
const TabPanel = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </Box>
  );
};

export default ResponsiveTabs;

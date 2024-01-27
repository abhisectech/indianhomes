'use client'
import React, { useState } from 'react'
import { Tabs, Tab, Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'

// Sample data for images
const tabData = [
  // Data for Tab 1
  [
    '/images/boho.webp',
    '/images/boho.webp',
    '/images/boho.webp',
    '/images/boho.webp',
  ],
  [
    '/images/contemporary.webp',
    '/images/contemporary.webp',
    '/images/contemporary.webp',
    '/images/contemporary.webp',
  ],
  [
    '/images/industrial.webp',
    '/images/industrial.webp',
    '/images/industrial.webp',
    '/images/industrial.webp',
  ],
  // Data for Tab 2 (and so on...)
  // ...
]

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 100,
    fontSize: 22,
    marginRight: theme.spacing(1),
    color: '#3d372c',
    '&.Mui-selected': {
      color: '#95805a',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="">
        <h1 className="text-center text-4xl text-gray-700">
          <span className="text-[#95805a] italic">Spaces</span> by Design Indian
          Homes
        </h1>
      </div>
      <Container maxWidth="md" className="mt-8">
        <Box sx={{ bgcolor: '' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            aria-label="styled tabs example"
          >
            <StyledTab label="Boho" />
            <StyledTab label="Contemporary" />
            <StyledTab label="Industrial" />
            <StyledTab label="Glam" />
            <StyledTab label="Scandinavian" />
            <StyledTab label="Traditional" />
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>

        {/* Display the images based on the selected tab */}
        {tabData.map((tabImages, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {tabImages.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Image ${imgIndex + 1}`}
                  className="w-full h-96 rounded-lg"
                />
              ))}
            </div>
          </TabPanel>
        ))}
      </Container>
    </>
  )
}

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
  )
}

export default ResponsiveTabs

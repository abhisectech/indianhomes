'use client'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
export default function TitlebarBelowMasonryImageList() {
  const [screenSize, setScreenSize] = useState('')

  const updateScreenSize = () => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      setScreenSize('lg')
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      setScreenSize('md')
    } else {
      setScreenSize('sm')
    }
  }

  useEffect(() => {
    // Initial screen size determination
    updateScreenSize()

    // Watch for changes in screen size using matchMedia
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleMediaQueryChange = (event) => {
      updateScreenSize() // Update screen size when media query changes
      console.log('Screen Width:', window.innerWidth)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  let col = 3
  if (screenSize === 'sm') {
    col = 2
  }
  return (
    <MaxWidthWrapper className="my-16 mb-24">
      <h1 className="text-4xl text-center mb-12">
        Design Indian Homes{' '}
        <span className="text-[#95805a] italic">Offerings</span>
      </h1>
      {/* <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }} */}

      <Box
        sx={{
          width: '100%',
          height: 450,
          overflowY: 'scroll',
        }}
        className="sectiondemo"
      >
        <ImageList
          cols={col} // Adjust the number of columns for mobile view
          gap={8}
          sx={{
            '@media (min-width: 600px)': {
              cols: 2, // Set the number of columns for larger screens
            },
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&h=268&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&h=268&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="rounded-lg"
              />
              {/* <ImageListItemBar
                position="below"
                title={item.title}
                className="text-3xl"
              /> */}
              <h2 className="text-xl text-center text-[#95805a] font-[200]">
                {item.title}
              </h2>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </MaxWidthWrapper>
  )
}

const itemData = [
  {
    img: '/images/spacesaving.png',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
]

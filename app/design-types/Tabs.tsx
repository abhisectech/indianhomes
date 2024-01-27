'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Box from '@mui/material/Box'
import { designTypesData } from './designTypeData'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DesignTypeCard from './designTypeCard'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <div>{children}</div>
          {/* <Typography>{children}</Typography> */}
        </div>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
interface TabsProps {
  id: number
}

export default function BasicTabs({ id }: TabsProps) {
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState(id)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          {designTypesData.map((page, index) => (
            <Link
              key={page.id}
              href={`/design-types/${page.slug}`}
              scroll={false}
            >
              <div style={{ whiteSpace: 'nowrap', width: 'max-content' }}>
                <Tab label={page.name} {...a11yProps(index)} />
              </div>
            </Link>
          ))}
        </Tabs>
      </Box>
      {designTypesData.map((page, index) => {
        // console.log(page.items);

        return (
          <CustomTabPanel key={page.id} value={value} index={index}>
            <div className="flex items-center bg-white p-4">
              <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
              <h1 className="text-3xl font-bold">{page.heading}</h1>
            </div>
            <p className="text-gray-700 text-sm px-7">{page.desc}</p>
            <div className="flex">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
                {page.items &&
                  page.items.map((design) => (
                    <DesignTypeCard key={design.designId} data={design} />
                  ))}
              </div>
            </div>
          </CustomTabPanel>
        )
      })}
    </Box>
  )
}
// 'use client'
// import React, { useState } from 'react'
// import { pagesData } from './pagesData'
// import Link from 'next/link'

// interface Page {
//   id: number
//   name: string
//   heading: string
//   desc: string
// }

// interface TabsProps {
//   id: number
// }

// // { id }: TabsProps

// const CustomTabs: React.FC<TabsProps> = ({id}) => {
//   const [activeTab, setActiveTab] = useState<number>(id)

//   const handleTabClick = (index: number) => {
//     setActiveTab(index)
//   }

//   return (
//     <div className="tabs-container">
//       <div className="tabs">
//         {pagesData.map((page, index) => (
//           <Link href={page.slug?page.slug:'/'} key={page.id}>
//             <div
//               className={`tab ${index === activeTab ? 'active' : ''}`}
//               onClick={() => handleTabClick(index)}
//             >
//               {page.name}
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="tab-content-container">
//         {pagesData.map((page, index) => (
//           <div
//             key={page.id}
//             className={`tab-content ${index === activeTab ? 'active' : ''}`}
//           >
//             <div className="flex items-center bg-white p-4">
//               <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
//               <h1 className="text-3xl font-bold">{page.heading}</h1>
//             </div>
//             <p className="text-gray-700 text-sm px-7">{page.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CdesignType

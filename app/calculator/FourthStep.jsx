import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Download } from 'lucide-react'
const YourAccordion = () => {
  const accordionData = [
    {
      title: 'Living and Dining 1',
      imageSrc: '/images/bed-square.svg', // Adjust the image source
      area: '140 SqFt.',
      sections: [
        {
          heading: 'False Ceiling',
          area: '140 SqFt.',
          desc: 'Gypsum board ceiling with heavy duty channel Boards (USG Boral) | Wires (KEI or similar) | Lights (Orient or similar)',
        },
        {
          heading: 'Wall',
          area: '343 SqFt.',
          desc: 'Premium Emulsion with basic putty repairing and one highlight wall Paint (Asian Paints or similar)',
        },
      ],
    },
    {
      title: 'Passage 1',
      imageSrc: '/images/bed-square.svg', // Adjust the image source
      area: '140 SqFt.',
      sections: [
        {
          heading: 'False Ceiling',
          area: '140 SqFt.',
          desc: 'Gypsum board ceiling with heavy duty channel Boards (USG Boral) | Wires (KEI or similar) | Lights (Orient or similar)',
        },
        {
          heading: 'Wall',
          area: '343 SqFt.',
          desc: 'Premium Emulsion with basic putty repairing and one highlight wall Paint (Asian Paints or similar)',
        },
      ],
    },
    
    // Add more data for additional accordions
  ]

  return (
    <div>
      {accordionData.map((accordion, index) => (
        <Accordion key={index} className="mb-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <img
              src={accordion.imageSrc}
              alt={`Accordion ${index + 1}`}
              className="h-6 mr-4 self-center"
            />
            <div>
              <h6 className="text-lg font-bold">{accordion.title}</h6>
              <p className="text-gray-400 text-xs">{accordion.area}</p>
            </div>
          </AccordionSummary>
          <AccordionDetails className="shadow-lg">
            <div className="flex flex-col space-y-4 sm:mx-10">
              {accordion.sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="border-b-[1px] border-b-gray-300"
                >
                  <h6 className="font-semibold text-lg">{section.heading}</h6>
                  <p className="text-gray-400 text-xs mb-2">{section.area}</p>
                  <p className="text-gray-600 text-xs mb-2">{section.desc}</p>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
const FourthStep = () => {
  return (
    <div>
      <div className="p-4 mx-4 bg-blue-500 flex justify-between rounded-lg shadow-lg text-white">
        <div>
          <p className="sm:text-lg">Estimated budget</p>
        </div>
        <div className="text-right">
          <h3 className="text-lg">₹44,765</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold m-4">Selected components</h2>
      <div className="rounded-xl sm:m-4">
        <YourAccordion />
      </div>
      <h2 className="text-xl font-bold m-4">Documents</h2>
      <div>
        <div className="bg-white rounded-lg flex justify-between p-4 m-4">
          <p>Project Budget</p>
          <button className="flex items-center text-blue-500">
            <span className="mr-2">
              <Download className="h-4 w-4" />
            </span>
            Download
          </button>
        </div>
        <div className="bg-white rounded-lg flex justify-between p-4 m-4">
          <p>Project Scope</p>
          <button className="flex items-center text-blue-500">
            <span className="mr-2">
              <Download className="h-4 w-4" />
            </span>
            Download
          </button>
        </div>
      </div>
      <div className="m-4">
        <p className="text-blue-500 text-xs">Disclaimer:</p>
        <p className="text-xs">
          Indicative rates based on market averages. Actual costs vary based on
          professional choice, measurements, materials, and additional charges
          like taxes, design fees, appliances, and site expenses.
        </p>
      </div>
    </div>
  )
}

export default FourthStep

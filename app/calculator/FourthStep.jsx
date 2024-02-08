import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Download } from 'lucide-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const FourthStep = () => {
  const [spaceData, setSpaceData] = useState([])
  const [firstStepData, setFirstStepData] = useState([])
  const [totalRoomPrice, setTotalRoomPrice] = useState(0)

  // Fetch spaceData and firstStepData from localStorage on component mount
  useEffect(() => {
    const localStorageSpaceData = localStorage.getItem('spaceData')
    const localStorageFirstStepData = localStorage.getItem('firstStepData')

    if (localStorageSpaceData && localStorageFirstStepData) {
      const parsedSpaceData = JSON.parse(localStorageSpaceData)
      const parsedFirstStepData = JSON.parse(localStorageFirstStepData)

      setSpaceData(parsedSpaceData)
      setFirstStepData(parsedFirstStepData)

      const total = parsedSpaceData.reduce(
        (acc, room) => acc + (room.roomPrice || 0),
        0
      )
      setTotalRoomPrice(total)
    }
  }, [])

  // Function to generate and download PDF

  const handleDownloadPDF = () => {
    const doc = new jsPDF()

    // Add company logo
    const companyLogo = '/logo.png'
    doc.addImage(companyLogo, 'PNG', 10, 10, 25, 25)

    // Add company name
    const companyName = 'Design Indian Homes'
    doc.setFontSize(32)
    doc.setTextColor(40, 40, 150) // Set color to dark blue
    doc.setFont('helvetica', 'bold')
    doc.text(companyName, 50, 30)

    doc.setDrawColor(0) // Reset draw color to black

    // Add Your Details section
    const yourDetailsData = Object.entries(firstStepData)
      .filter(([key]) => key !== 'selectedOptionSet4')
      .map(([key, value]) => ({
        Label:
          key === 'selectedOptionSet1'
            ? 'House Type'
            : key === 'selectedOptionSet2'
            ? 'Number of Bedrooms'
            : key === 'selectedOptionSet3'
            ? 'New or Renovation'
            : key === 'textInput'
            ? 'City'
            : key.replace(/([A-Z])/g, ' $1').trim(),
        Value: value,
      }))

    const yourDetailsColumns = [
      { header: 'Label', dataKey: 'Label' },
      { header: 'Value', dataKey: 'Value' },
    ]

    doc.setFontSize(16)
    doc.setTextColor(100) // Set text color to gray
    doc.text('Your Details-', 10, 70)
    doc.autoTable({
      startY: 80,
      body: yourDetailsData,
      columns: yourDetailsColumns,
      theme: 'grid', // Use grid theme for a stylish look
    })

    // Add Your Requirements section
    const yPosition = doc.autoTable.previous.finalY + 10
    doc.setFontSize(16)
    doc.setTextColor(100) // Set text color to gray
    doc.text('Your Requirements-', 10, yPosition)

    const requirementsColumns = [
      { header: 'Rooms', dataKey: 'Rooms' },
      { header: 'Area', dataKey: 'Area' },
      { header: 'Package', dataKey: 'Package' },
      { header: 'Room Price Estimation', dataKey: 'Room Price Estimation' },
      { header: 'Selected Features', dataKey: 'Selected Features' },
    ]

    const spaceDataFormatted = spaceData.map((room, index) => ({
      Rooms: room.name,
      Area: room.area,
      Package: room.selectedPackage || '-',
      'Room Price Estimation': room.roomPrice ? `Rs. ${room.roomPrice}` : '-',
      'Selected Features': room.selectedPolygon
        ? room.selectedPolygon
            .map(
              (feature) => feature.charAt(0).toUpperCase() + feature.slice(1)
            )
            .join(', ')
        : '-',
    }))
    doc.autoTable({
      startY: yPosition + 10,
      body: spaceDataFormatted,
      columns: requirementsColumns,
      theme: 'grid', // Use grid theme for a stylish look
    })

    // Add horizontal line
    const hrPosition = doc.autoTable.previous.finalY + 10
    doc.setDrawColor(150) // Set draw color to light gray
    doc.line(10, hrPosition, 200, hrPosition)

    // Add Total Price Estimate
    const totalPricePosition = hrPosition + 20
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(40, 40, 150) // Set text color to dark blue
    doc.text('Total Price Estimate', 10, totalPricePosition)
    doc.setTextColor(0) // Reset text color to black
    doc.text(`Rs. ${totalRoomPrice}`, 100, totalPricePosition)

    // Save the PDF
    doc.save('Project_Scope.pdf')
  }

  return (
    <div>
      <div className="p-4 mx-4 bg-blue-500 flex justify-between rounded-lg shadow-lg text-white">
        <div>
          <p className="sm:text-lg">Estimated budget</p>
        </div>
        <div className="text-right">
          <h3 className="text-lg">₹{totalRoomPrice}</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold m-4">Selected components</h2>
      <div className="rounded-xl sm:m-4">
        {spaceData.map((room, index) => (
          <Accordion key={index} className="mb-4">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <img
                src="/images/bed-square.svg"
                alt={`Accordion ${index + 1}`}
                className="h-6 mr-4 self-center"
              />
              <div>
                <h6 className="text-lg font-bold">{room.name}</h6>
                <p className="text-gray-400 text-xs">{room.area} SqFt.</p>
              </div>
            </AccordionSummary>
            <AccordionDetails className="shadow-lg">
              <div className="flex flex-col space-y-4 sm:mx-10">
                {room.selectedPolygon &&
                  room.selectedPackage &&
                  room.roomPrice && (
                    <>
                      <div className="border-b-[1px] border-b-gray-300">
                        <h6 className="font-semibold text-lg">
                          Selected Package
                        </h6>
                        <p className="text-gray-400 text-xs capitalize">
                          {room.selectedPackage}
                        </p>
                      </div>
                      <div className="border-b-[1px] border-b-gray-300">
                        <h6 className="font-semibold text-lg">
                          Room Price Estimate
                        </h6>
                        <p className="text-gray-400 text-xs">
                          ₹{room.roomPrice}
                        </p>
                      </div>
                      <div className="border-b-[1px] border-b-gray-300">
                        <h6 className="font-semibold text-lg">
                          Selected Features
                        </h6>
                        <ul>
                          {room.selectedPolygon.map((polygon, index) => (
                            <li key={index}>
                              <p className="capitalize">{polygon}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <h2 className="text-xl font-bold m-4">Documents</h2>
      <div>
        {/* <div className="bg-white rounded-lg flex justify-between p-4 m-4">
          <p>Project Budget</p>
          <button className="flex items-center text-blue-500">
            <span className="mr-2">
              <Download className="h-4 w-4" />
            </span>
            Download
          </button>
        </div> */}
        <div className="bg-white rounded-lg flex justify-between p-4 m-4">
          <p>Project Scope</p>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center text-blue-500"
          >
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

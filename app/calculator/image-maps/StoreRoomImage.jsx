'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
const SvgMap = ({ data, name }) => {
  const [selectedPolygon, setSelectedPolygon] = useState([])
  const [selectedPackage, setSelectedPackage] = useState('premium') // Default to premium
  const [spaceSquareFootage, setSpaceSquareFootage] = useState({}) // New state for square footage
  const [updatedData, setUpdatedData] = useState(data)

  const [roomPrice, setRoomPrice] = useState(0)
  // let roomPrice = 0
  console.log('roomPrice: ', roomPrice)
  const updateData = () => {
    setUpdatedData((prevData) =>
      prevData.map((item) =>
        item.name === name
          ? { ...item, selectedPolygon, selectedPackage, roomPrice }
          : item
      )
    )
  }
  useEffect(() => {
    updateData()
  }, [selectedPolygon, selectedPackage, roomPrice])

  const pricing = {
    premium: {
      Walls: { pricePerSqFt: 55 },
      Door: { price: 20000 },
      upvcWindow: { pricePerSqFt: 800 },
      FalseCeiling: { pricePerSqFt: 185 },
      Electrical: { price: 5000 },
      Flooring: { pricePerSqFt: 497 },
    },
    luxury: {
      Walls: { pricePerSqFt: 65 },
      Door: { price: 25000 },
      upvcWindow: { pricePerSqFt: 1100 },
      FalseCeiling: { pricePerSqFt: 210 },
      Electrical: { price: 13000 },
      Flooring: { pricePerSqFt: 498 },
    },
    ultraLuxury: {
      Walls: { pricePerSqFt: 90 },
      Door: { price: 36000 },
      upvcWindow: { pricePerSqFt: 1500 },
      FalseCeiling: { pricePerSqFt: 250 },
      Electrical: { price: 18000 },
      Flooring: { pricePerSqFt: 499 },
    },
  }

  const initialSquareFootage = {
    FalseCeiling: 185,
    electrical: 10,
    Flooring: 48,
    Door: 0,
    upvcWindow: 10,
    Walls: 65,
  }
  const [editableSquareFootage, setEditableSquareFootage] =
    useState(initialSquareFootage)
 
   const handlePolygonClick = (polygonId) => {
     const isSelected = selectedPolygon.includes(polygonId)

     // Check if the polygon is already selected
     if (isSelected) {
       // Polygon is already selected, remove it from the selected polygons
       setSelectedPolygon((prevSelected) =>
         prevSelected.filter((id) => id !== polygonId)
       )

       // Subtract the price of the deselected polygon from the room price
       const priceOfDeselectedPolygon = calculateSpacePrice(
         polygonId,
         selectedPackage
       )
       setRoomPrice(
         (prevRoomPrice) => prevRoomPrice - parseFloat(priceOfDeselectedPolygon)
       )
     } else {
       // Polygon is not selected, add it to the selected polygons
       setSelectedPolygon((prevSelected) => [...prevSelected, polygonId])

       // Add the price of the selected polygon to the room price
       const priceOfSelectedPolygon = calculateSpacePrice(
         polygonId,
         selectedPackage
       )
       setRoomPrice(
         (prevRoomPrice) => prevRoomPrice + parseFloat(priceOfSelectedPolygon)
       )
     }

     // Update the data
     updateData()
   }
  const handleSquareFootageChange = (polygonId, value) => {
    setSpaceSquareFootage((prevSquareFootage) => ({
      ...prevSquareFootage,
      [polygonId]: parseFloat(value) || 0,
    }))
    updateData()
  }

const calculateSpacePrice = (polygonId, selectedPackage) => {
  const component = pricing[selectedPackage]?.[polygonId]
  if (!component) return 0 // Return 0 if the component doesn't exist

  // Check if the component has price per square foot
  if ('pricePerSqFt' in component) {
    const pricePerSqFt = component.pricePerSqFt || 0
    const squareFootage = editableSquareFootage[polygonId] || 0
    return (pricePerSqFt * squareFootage).toFixed(2)
  } else {
    // If not, return the fixed price directly
    return component.price.toFixed(2)
  }
}
    const handleEditSquareFootage = (polygonId) => {
      const newSquareFootage = prompt(
        `Enter new square footage for ${polygonId}:`,
        editableSquareFootage[polygonId]
      )

      if (!isNaN(newSquareFootage) && newSquareFootage !== null) {
        const updatedSquareFootage = {
          ...editableSquareFootage,
          [polygonId]: parseFloat(newSquareFootage),
        }
        setEditableSquareFootage(updatedSquareFootage)

        // Recalculate room price
        const priceOfSelectedPolygon = calculateSpacePrice(
          polygonId,
          selectedPackage
        )
        const updatedRoomPrice =
          parseFloat(roomPrice) - parseFloat(priceOfSelectedPolygon) // subtract old price
        setRoomPrice(
          updatedRoomPrice +
            parseFloat(newSquareFootage) *
              parseFloat(pricing[selectedPackage][polygonId].pricePerSqFt)
        ) // add new price
        updateData() // Update the data after room price is updated
      }
    }
  const handleTabChange = (selectedTab) => {
    setSelectedPackage(selectedTab)
    updateData()
  }

  const renderTab = (tabName) => {
    const isActive = selectedPackage === tabName

    return (
      <button
        key={tabName}
        onClick={() => handleTabChange(tabName)}
        className={`border px-4 py-3 text-base focus:outline-none rounded-lg ${
          isActive ? 'bg-green-500 text-white' : 'bg-white text-black'
        }`}
      >
        {tabName}
      </button>
    )
  }
  console.log('updatedData: ', updatedData)
  return (
    <>
      <div className="bg-white p-4 flex items-center w-full rounded-t-lg shadow-lg">
        <button className="inline-flex items-center mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="inline text-lg">{name}</h3>
      </div>
      <div className="p-4 m-4 bg-blue-500 flex justify-between rounded-lg shadow-lg text-white">
        <div>
          <p className="text-xs">Room budget</p>
          <h3>₹{roomPrice}</h3>
        </div>
        <div className="text-right">
          <p className="text-xs">Total budget</p>
          <h3>₹44,765</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div>
      </div>
      <div className="m-4">
        <p>Tap the desired components and add to your project&apos;s scope</p>
      </div>
      <div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2899 1681"
          style={{
            backgroundImage:
              'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/store.jpg")',
            backgroundSize: 'cover',
          }}
        >
          {/* false ceiling*/}
          <polygon
            points="150,0,621,333,1902,361,1914,349,2731,0"
            fill={
              selectedPolygon.includes('FalseCeiling') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('FalseCeiling')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="1453.6"
            y="165.6"
            width="339.50599670410156"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>

          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="1518.6"
            y="208.6"
            fontSize={40}
            id="FalseCeiling"
            onClick={() => handlePolygonClick('FalseCeiling')}
            className="cursor-pointer"
            style={{ color: 'black' }}
          >
            False Ceiling
          </text>

          {/* ------Electrical----------------- */}

          <polygon
            points="1589,671,1825,677,1830,774,1587,764"
            fill={
              selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Electrical')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="1697.75"
            y="678.5"
            width="272.2762451171875"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="1762.75"
            y="721.5"
            fontSize={40}
            className="cursor-pointer"
            id="Electrical"
            onClick={() => handlePolygonClick('Electrical')}
            style={{ color: 'black' }}
          >
            Electrical
          </text>
          {/* ---Flooring---------- */}
          <polygon
            points="626,1135,19,1666,2734,1676,1886,1158"
            fill={
              selectedPolygon.includes('Flooring') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Flooring')}
            style={{ cursor: 'pointer' }}
          />
          <rect
            x="1306.25"
            y="1365.75"
            width="252.80421447753906"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="1371.25"
            y="1408.75"
            fontSize={40}
            className="cursor-pointer"
            id="Flooring"
            onClick={() => handlePolygonClick('Flooring')}
            style={{ color: 'black' }}
          >
            Flooring
          </text>
          {/* --------------Door---------- */}
          <polygon
            points="618,431,918,443,913,1138,624,1133"
            fill={selectedPolygon.includes('Door') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Door')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="758.25"
            y="743.25"
            width="191.31358337402344"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="1"
            fontWeight={400}
            x="823.25"
            y="786.25"
            fontSize={40}
            id="Door"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('Door')}
            style={{ color: 'black' }}
          >
            Door
          </text>

          {/* -------------- UPVC Window ----------- */}
          <polygon
            points="2106,520,2788,410,2747,1358,2096,1051"
            fill={
              selectedPolygon.includes('upvcWindow') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('upvcWindow')}
            style={{ cursor: 'pointer' }}
          />
          <rect
            x="2424.25"
            y="791.75"
            width="372.249755859375"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="2489.25"
            y="834.75"
            fontSize={40}
            id="upvcWindow"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('upvcWindow')}
            style={{ color: 'black' }}
          >
            UPVC Window
          </text>
          {/* -------------- Walls ----------- */}
          <polygon
            points="142,0,613,331,624,1140,9,1666,-1,0"
            fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Walls')}
            style={{ cursor: 'pointer' }}
          />
          <polygon
            points="616,336,618,425,923,441,916,1143,1884,1156,2739,1676,2898,1681,2895,1432,2096,1051,2104,520,2793,407,2747,1361,2893,1432,2898,-3,2731,-3,1904,356,1899,774,1832,769,1592,761,1589,666,1827,674,1830,769,1899,774,1902,364"
            fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Walls')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="267.4"
            y="584.4"
            width="177.42694854736328"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="332.4"
            y="627.4"
            fontSize={40}
            id="Walls"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('Walls')}
            style={{ color: 'black' }}
          >
            Walls
          </text>

          {/* -------------------------------------- */}
        </svg>
        <div className="flex justify-center text-3xl font-bold mt-4">
          <h2>Select Your Packages</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="flex gap-32 justify-center mt-4">
            {renderTab('premium')}
            {renderTab('luxury')}
            {renderTab('ultraLuxury')}
          </div>
        </div>
        <div className="mt-8">
          {selectedPolygon.map((polygon) => (
            <div
              className="flow-root"
              key={polygon}
              style={{
                border: '1px solid #000',
                borderRadius: '5px',
                padding: '20px',
                marginBottom: '10px',
                marginLeft: '20px',
                marginRight: '20px',
                backgroundColor: 'white',
                marginTop: '10px',
              }}
            >
              <div className="float-left">
                <span>{polygon} </span>
                {polygon === 'FalseCeiling' ||
                polygon === 'Flooring' ||
                polygon === 'Walls' ||
                polygon === 'crockeryUnit' ||
                polygon == 'upvcWindow' ||
                polygon === 'falseCeiling' ||
                polygon === 'diningTableSet' ? (
                  <span
                    style={{ cursor: 'pointer', fontSize: '12px' }}
                    onClick={() => handleEditSquareFootage(polygon)}
                  >
                    ✏️ Edit
                  </span>
                ) : null}
              </div>
              <div></div>
              <div className="float-right">
                {pricing[selectedPackage]?.[polygon]?.pricePerSqFt ? (
                  <span style={{ color: 'green', fontSize: '20px' }}>
                    ₹{calculateSpacePrice(polygon, selectedPackage)}
                  </span>
                ) : (
                  <span style={{ color: 'green', fontSize: '20px' }}>
                    ₹{pricing[selectedPackage]?.[polygon]?.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
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
      <div className="bg-white flex justify-center py-4 sm:px-12 w-full rounded-b-lg shadow-lg">
        <button className="text-lg shadow-md hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Save
        </button>
      </div>
    </>
  )
}

export default SvgMap

'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSpaceData } from '../../../components/redux/actions/secondStepActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const SvgMap = ({ data, name }) => {
  const router = useRouter()
  const pricing = {
    premium: {
      Walls: { pricePerSqFt: 55 },
      Door: { price: 20000 },
      StudyTables: { pricePerSqFt: 800 },
      upvcWindow: { pricePerSqFt: 800 },
      FalseCeiling: { pricePerSqFt: 185 },
      Electrical: { price: 5000 },
      Flooring: { pricePerSqFt: 497 },
    },
    luxury: {
      Walls: { pricePerSqFt: 65 },
      Door: { price: 25000 },
      StudyTables: { pricePerSqFt: 1100 },
      upvcWindow: { pricePerSqFt: 1100 },
      FalseCeiling: { pricePerSqFt: 210 },
      Electrical: { price: 13000 },
      Flooring: { pricePerSqFt: 498 },
    },
    ultraLuxury: {
      Walls: { pricePerSqFt: 90 },
      Door: { price: 36000 },
      StudyTables: { pricePerSqFt: 1500 },
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
    StudyTables: 50,
    Door: 0,
    upvcWindow: 10,
    Walls: 65,
  }
  console.log('data: ', data)
  console.log('name: ', name)
  const [selectedPolygon, setSelectedPolygon] = useState([])
  const [selectedPackage, setSelectedPackage] = useState('premium') // Default to premium
  const [spaceSquareFootage, setSpaceSquareFootage] = useState({}) // New state for square footage

  const [updatedData, setUpdatedData] = useState(data)
  const [roomPrice, setRoomPrice] = useState(0)
  // let roomPrice = 0

  // to reset the selectedPolygon and roomPrice to back to inital state when package is changed
  useEffect(() => {
    // Reset selectedPolygon to an empty array
    setSelectedPolygon([])

    // Reset roomPrice to 0
    setRoomPrice(0)
  }, [selectedPackage])
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
  const handleSquareFootageChange = (polygonId, value) => {
    setSpaceSquareFootage((prevSquareFootage) => ({
      ...prevSquareFootage,
      [polygonId]: parseFloat(value) || 0,
    }))
    updateData()
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
        } ${
          isActive
            ? 'hover:bg-green-600 hover:text-white'
            : 'hover:bg-gray-200 hover:text-black'
        }`}
      >
        {tabName}
      </button>
    )
  }

  console.log('updatedData: ', updatedData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateSpaceData(updatedData))
  }, [dispatch, updatedData])

  const spaceData = useSelector((state) => state.secondStep.spaceData)
  console.log('Space Data from redux:', spaceData)

  const handleSave = () => {
    // Retrieve existing spaceData from localStorage
    const localStorageSpaceData = localStorage.getItem('spaceData')

    // Check if there is existing spaceData in localStorage
    if (localStorageSpaceData) {
      // Parse the existing spaceData
      const parsedSpaceData = JSON.parse(localStorageSpaceData)

      // Find the index of the item with the same name as the current page
      const index = parsedSpaceData.findIndex((item) => item.name === name)

      // If an item with the same name exists, update its data
      if (index !== -1) {
        parsedSpaceData[index] = {
          ...parsedSpaceData[index],
          selectedPolygon,
          selectedPackage,
          roomPrice,
        }

        // Update the localStorage with the updated spaceData
        localStorage.setItem('spaceData', JSON.stringify(parsedSpaceData))
        alert('Space data updated successfully!')
      } else {
        // If no item with the same name exists, show an alert
        alert(`No data found for ${name} in localStorage`)
      }
    } else {
      // If no spaceData exists in localStorage, set it with the current data
      localStorage.setItem('spaceData', JSON.stringify(spaceData))
      alert('Space data saved successfully!')
    }
    router.push('/calculator?step=2')
  }

  return (
    <>
      {/* <div className="bg-white p-4 flex items-center w-full rounded-t-lg shadow-lg">
        <button className="inline-flex items-center mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="inline text-lg">{name}</h3>
      </div> */}
      <div className="p-4 m-4 bg-blue-500 flex justify-between rounded-lg shadow-lg text-white">
        <div>
          <p className="text-xs">Room budget</p>
          <h3>₹{roomPrice}</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div>
        {/* <div className="text-right">
          <p className="text-xs">Total budget</p>
          <h3>₹44,765</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div> */}
      </div>
      <div className="m-4">
        <p>
          First select your Package then Tap the desired components and add to
          your project&apos;s scope
        </p>
      </div>
      <div>
        <div className="flex justify-center sm:text-3xl text-xl font-bold mt-8">
          <h2>Select Your Packages</h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-12 gap-4 justify-center my-4 mb-8  bg-white px-8 py-4">
          {renderTab('premium')}
          {renderTab('luxury')}
          {renderTab('ultraLuxury')}
        </div>

        <div className="flex justify-center sm:text-3xl text-xl font-bold my-4">
          <h2>Select Your Components</h2>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2437 1533"
          style={{
            backgroundImage:
              'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/study.jpg")',
            backgroundSize: 'cover',
          }}
        >
          {/* false ceiling*/}
          <polygon
            points="3,37,496,372,1672,362,2436,4,1620,6,1,2"
            fill={
              selectedPolygon.includes('FalseCeiling') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('FalseCeiling')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="1028"
            y="87.5"
            width="339.45452880859375"
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
            x="1093"
            y="130.5"
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
            points="156,543,346,586,352,674,150,676"
            fill={
              selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Electrical')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="241"
            y="576.75"
            width="272.2573547363281"
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
            x="306"
            y="619.75"
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
            points="483,1109,1678,1098,1687,1109,1682,1251,1799,1335,1799,1320,1900,1324,1898,1440,1837,1417,1825,1430,1822,1445,1829,1453,1848,1453,1853,1443,1876,1455,1861,1466,1842,1471,1822,1475,1803,1486,1794,1496,1794,1507,1797,1520,1812,1529,1825,1522,1835,1507,1829,1496,1848,1488,1865,1486,1876,1481,1891,1473,1874,1496,1863,1509,1857,1520,1853,1531,1792,1531,1870,1531,1891,1531,1885,1509,1915,1479,1977,1496,1975,1514,1988,1524,2005,1520,2010,1503,1997,1488,1975,1475,1947,1464,1928,1460,1936,1449,1945,1438,1952,1434,1964,1440,1977,1436,1980,1421,1967,1410,1943,1421,1932,1438,1919,1445,1921,1326,2038,1322,2035,1309,2152,1376,2147,1490,2171,1509,2421,1516,2419,1533,1736,1531,57,1531"
            fill={
              selectedPolygon.includes('Flooring') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Flooring')}
            style={{ cursor: 'pointer' }}
          />
          <rect
            x="1850.6470588235295"
            y="1403.1911764705883"
            width="252.7443389892578"
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
            x="1915.6470588235295"
            y="1446.1911764705883"
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
            points="496,456,778,459,774,1105,483,1105"
            fill={selectedPolygon.includes('Door') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Door')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="622.75"
            y="738.25"
            width="191.31922912597656"
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
            x="687.75"
            y="781.25"
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
            points="839,467,1332,465,1334,844,832,855"
            fill={
              selectedPolygon.includes('upvcWindow') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('upvcWindow')}
            style={{ cursor: 'pointer' }}
          />
          <rect
            x="1074.25"
            y="614.75"
            width="372.23468017578125"
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
            x="1139.25"
            y="657.75"
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
            points="3,39,492,372,483,1117,354,672,348,588,147,536,150,683,354,672,483,1117,53,1531,5,1531"
            fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Walls')}
            style={{ cursor: 'pointer' }}
          />
          <polygon
            points="496,372,1674,368,1672,558,1603,571,1601,747,1670,749,1670,906,1334,844,1340,461,834,463,828,853,1334,844,1670,906,1521,915,1527,1098,778,1100,778,456,492,454"
            fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Walls')}
            style={{ cursor: 'pointer' }}
          />
          <polygon
            points="1678,362,2432,13,2436,435,2324,437,2115,469,2111,543,1928,568,1930,523,1859,521,1670,560"
            fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Walls')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="251.09090909090907"
            y="762.2727272727273"
            width="177.40596771240234"
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
            x="316.09090909090907"
            y="805.2727272727273"
            fontSize={40}
            id="Walls"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('Walls')}
            style={{ color: 'black' }}
          >
            Walls
          </text>
          {/* -------------- Walls ----------- */}
          <polygon
            points="1607,575,1863,521,1928,525,1926,577,2115,543,2113,476,2320,439,2432,439,2421,1522,2175,1509,2150,1490,2152,1372,1889,1216,1814,1176,1818,1021,1687,975,1689,1102,1672,1096,1527,1102,1521,913,1674,909,1676,749,1603,747"
            fill={
              selectedPolygon.includes('StudyTables') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('StudyTables')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="1893.1304347826087"
            y="869.7826086956521"
            width="324.4213104248047"
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
            x="1958.1304347826087"
            y="912.7826086956521"
            fontSize={40}
            id="StudyTables"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('StudyTables')}
            style={{ color: 'black' }}
          >
            Study Table
          </text>

          {/* -------------------------------------- */}
        </svg>

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
                polygon === 'StudyTables' ? (
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
        <button
          onClick={handleSave}
          className="text-lg shadow-md hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Save
        </button>
      </div>
    </>
  )
}

export default SvgMap

'use client'
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Pencil } from 'lucide-react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
// import { updateSpaceData } from '@/components/redux/actions/secondStepActions'
import { updateSpaceData } from '../../components/redux/actions/secondStepActions'
import { useRouter } from 'next/navigation'

const ThirdStep = (props) => {
  const dispatch = useDispatch()
  const spaceCounts = useSelector((state) => state.space)
  const [area, setArea] = useState('')
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editSpaceName, setEditSpaceName] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [spaceData, setSpaceData] = useState([])
  const [spaceDataFromLs, setSpaceDataFromLs] = useState([])
  const [totalRoomPrice, setTotalRoomPrice] = useState(0)

  // Fetch spaceData and firstStepData from localStorage on component mount
  useEffect(() => {
    const localStorageSpaceData = localStorage.getItem('spaceData')

    if (localStorageSpaceData) {
      const parsedSpaceData = JSON.parse(localStorageSpaceData)
      setSpaceDataFromLs(parsedSpaceData)
      const total = parsedSpaceData.reduce(
        (acc, room) => acc + (room.roomPrice || 0),
        0
      )
      setTotalRoomPrice(total)
    }
  }, [])

  useEffect(() => {
    // Initialize spaceData based on spaceCounts
    const initialSpaceData = Object.entries(spaceCounts).flatMap(
      ([spaceName, count]) => {
        if (count > 0) {
          return Array.from({ length: count }, (_, index) => ({
            name: `${spaceName} ${index + 1}`,
            area: 192, // Set initial area as 192, you can adjust this as needed
          }))
        } else {
          return []
        }
      }
    )

    setSpaceData(initialSpaceData)
  }, [spaceCounts])

  console.log(spaceData)

  const handleEditArea = (spaceName) => {
    setEditSpaceName(spaceName)
    setEditModalOpen(true)
  }

  const handleSave = () => {
    console.log(editSpaceName, length, width, area)
    if (length && width) {
      // Calculate the area
      const calculatedArea = length * width
      // Update the area directly in spaceData if the space name matches the editSpaceName
      setSpaceData((prevSpaceData) =>
        prevSpaceData.map((space) =>
          space.name === editSpaceName
            ? { ...space, area: calculatedArea }
            : space
        )
      )
      setLength('')
      setWidth('')
    } else if (area) {
      // Update the area directly in spaceData using the provided value
      const intArea = parseInt(area, 10)
      // Update the area directly in spaceData using the provided value
      setSpaceData((prevSpaceData) =>
        prevSpaceData.map((space) =>
          space.name === editSpaceName ? { ...space, area: intArea } : space
        )
      )
      setArea('')
    }
    console.log(spaceData)
    // Close the modal
    setEditModalOpen(false)
  }

  const handleSubmit = () => {
    // console.log('Entered Areas:', areas)
    console.log('Redux Areas:', spaceCounts)
  }

  useEffect(() => {
    console.log('Redux Areas:', spaceCounts)
  }, [spaceCounts])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
    },
  }

  // Add a media query to adjust maxWidth for smaller screens
  const smallerScreensMediaQuery = '@media (max-width: 768px)'

  customStyles.content = {
    ...customStyles.content,
    [smallerScreensMediaQuery]: {
      maxWidth: '100%',
    },
  }

  const router = useRouter() // Add this line to use the useRouter hook

  // ... other code

  const handlePlanClick = (spaceName) => {
    // Encode the space name to make it URL-friendly
    const encodedSpaceName = encodeURIComponent(spaceName)

    // Pass the selected space to the parent component
    props.onPlanClick(spaceName)

    // Construct the URL with the encoded space name
    // router.push(`/calculator/image-maps/${encodedSpaceName}`)
  }

  useEffect(() => {
    dispatch(updateSpaceData(spaceData))
  }, [dispatch, spaceData])

  return (
    <div>
      <div className="p-4 m-4 bg-blue-500 flex justify-between rounded-lg shadow-lg text-white">
        <div>
          <p className="text-xs">Total budget</p>
          <h3>₹{totalRoomPrice}</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mx-4">Plan your spaces</h2>
      <p className="text-xs mb-4 mx-4 text-gray-700">
        Customise each space as per your choice
      </p>
      {spaceData.map((space, index) => {
        const hasSelectedPolygon = spaceDataFromLs.some(
          (item) =>
            item.name === space.name &&
            item.selectedPolygon &&
            item.selectedPolygon.length > 0
        )
        const roomPrice = spaceDataFromLs.find(
          (item) => item.name === space.name && item.roomPrice
        )
        return (
          <div key={`${space.name}-${index + 1}`} className="mx-4 mb-4">
            <div
              className={`flex items-center justify-between h-20 bg-white rounded-lg p-2`}
            >
              <div className="flex items-center">
                {/* Adjust the image source based on your requirements */}
                <img
                  src="/images/bed-square.svg"
                  alt={space.name}
                  className="h-12 w-8 mr-4"
                />
                <div>
                  <h3 className="text-sm font-bold">{space.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-xxs sm:text-xs text-gray-600">
                      {space.area}
                    </p>
                    <div>
                      <button
                        onClick={() => handleEditArea(space.name)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Pencil size={10} color="#4b5563" strokeWidth={2} />
                      </button>
                    </div>
                    <div className="ml-4 sm:hidden flex justify-center items-center">
                      <p className="text-xxs sm:text-xs text-gray-600 text-center">
                        {roomPrice ? `Room Price: ₹${roomPrice.roomPrice}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* plan */}
              <div className="m-4 flex">
                {roomPrice ? (
                  <div className="mx-0 sm:mx-8 hidden sm:flex justify-center items-center">
                    <p className=" text-sm text-gray-700 text-center">
                      Room Price:{' '}
                      <span className="font-semibold">
                        {' '}
                        {` ₹${roomPrice.roomPrice}`}
                      </span>
                    </p>
                  </div>
                ) : (
                  ''
                )}
                {
                  <button
                    className={`text-xxs border-gray-300 border-2 rounded py-1 px-2 hover:bg-green-500 hover:text-white ${
                      hasSelectedPolygon ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handlePlanClick(space.name)}
                  >
                    <Link
                      href={`/calculator/image-maps/${encodeURIComponent(
                        space.name
                      )}`}
                    >
                      PLAN
                    </Link>
                  </button>
                }
              </div>
            </div>
          </div>
        )
      })}

      {/* Modal for editing spaceName */}
      <Modal
        isOpen={editModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        contentLabel="Edit SpaceName Modal"
        style={customStyles}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{editSpaceName}</h2>
          <button
            onClick={() => setEditModalOpen(false)}
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Add your form inputs for editing the spaceName */}
        <div>
          <label htmlFor="lengthInput" className="text-gray-600">
            Length:
          </label>
          <input
            type="text"
            id="lengthInput"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Enter length..."
            className="border-2 border-blue-500 rounded-md p-2 w-full mb-4"
          />
        </div>
        <div>
          <label htmlFor="widthInput" className="text-gray-600">
            Width:
          </label>
          <input
            type="text"
            id="widthInput"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width..."
            className="border-2 border-blue-500 rounded-md p-2 w-full mb-4"
          />
        </div>
        <div>
          <h3 className="text-center">OR</h3>
        </div>
        <div>
          <label htmlFor="areaInput" className="text-gray-600">
            Area:
          </label>
          <input
            type="text"
            id="areaInput"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter area..."
            className="border-2 border-blue-500 rounded-md p-2 w-full mb-4"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </Modal>
      {/* <div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
        >
          Submit
        </button>
      </div> */}
    </div>
  )
}

export default ThirdStep

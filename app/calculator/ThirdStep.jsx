import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Pencil } from 'lucide-react'
import Link from 'next/link'
const ThirdStep = ({ spaceCounts }) => {
  const [areas, setAreas] = useState({})
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editSpaceName, setEditSpaceName] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')

  const handleEditArea = (spaceName) => {
    setEditSpaceName(spaceName)
    setEditModalOpen(true)
  }
  const handleAreaChange = (spaceName, value) => {
    setAreas((prevAreas) => ({
      ...prevAreas,
      [spaceName]: value,
    }))
  }
  const handleSave = () => {
    // Calculate the area based on length and width
    const calculatedArea = length && width ? length * width : ''

    // Set the area to the state
    setAreas((prevAreas) => ({
      ...prevAreas,
      [editSpaceName]: calculatedArea || '',
    }))

    // Close the modal
    setEditModalOpen(false)
  }
  const handleSubmit = () => {
    console.log('Entered Areas:', areas)
  }
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
  return (
    <div>
      <h2 className="text-xl font-bold mx-4">Plan your spaces</h2>
      <p className="text-xs mb-4 mx-4 text-gray-700">
        Customise each space as per your choice
      </p>
      {Object.entries(spaceCounts).map(([spaceName, count]) => (
        <div key={spaceName} className="mx-4 mb-4">
          {Array.from({ length: count }, (_, index) => (
            <div
              key={`${spaceName}-${index + 1}`}
              className={`flex items-center justify-between h-20 bg-white rounded-lg p-2 ${
                index + 1 !== count ? 'mb-4' : '' // Add margin except for the last section
              }`}
            >
              <div className="flex items-center">
                {/* Adjust the image source based on your requirements */}
                <img
                  src="/images/bed-square.svg"
                  alt={spaceName}
                  className="h-12 w-8 mr-4"
                />
                <div>
                  <h3 className="text-sm font-bold">{`${spaceName} ${
                    index + 1
                  }`}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-xxs sm:text-xs text-gray-600">
                      {areas[spaceName]
                        ? `${areas[spaceName]} SqFt.`
                        : `192 SqFt.`}
                    </p>
                    <div>
                      <button
                        onClick={() => handleEditArea(spaceName)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Pencil size={10} color="#4b5563" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* plan */}
              <div className="m-4">
                <Link href={`/calculator/${spaceName}`}>
                  <button className="text-xxs border-gray-300 border-2 rounded py-1 px-2 hover:bg-green-500 hover:text-white">
                    PLAN
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}

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
            value={areas[editSpaceName] || ''}
            onChange={(e) => handleAreaChange(editSpaceName, e.target.value)}
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
      <div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default ThirdStep

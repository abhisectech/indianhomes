'use state'
import React, { useState } from 'react'
import IncDecButton from './IncDecButton'
const FirstStepSection = () => {
  // State for options
  const [selectedOptionSet1, setSelectedOptionSet1] = useState(null)
  const [selectedOptionSet2, setSelectedOptionSet2] = useState(null)
  const [selectedOptionSet3, setSelectedOptionSet3] = useState(null)
  const [selectedOptionSet4, setSelectedOptionSet4] = useState(null)
  const [textInput, setTextInput] = useState('')

  // Handle button click for each option set
  const handleButtonClick = (option, setNumber, event) => {
    if (event) {
      event.preventDefault() // Prevent the default form submission behavior
    }
    switch (setNumber) {
      case 1:
        setSelectedOptionSet1(option)
        break
      case 2:
        setSelectedOptionSet2(option)
        break
      case 3:
        setSelectedOptionSet3(option)
        break
      case 4:
        setSelectedOptionSet4(option)
        break
      default:
        break
    }
  }

  // Handle input text change
  const handleTextInputChange = (e) => {
    setTextInput(e.target.value)
  }

  // Log the selected options and text input on button click (you can modify this logic)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Selected Option Set 1:', selectedOptionSet1)
    console.log('Selected Option Set 2:', selectedOptionSet2)
    console.log('Selected Option Set 3:', selectedOptionSet3)
    console.log('Selected Option Set 4:', selectedOptionSet4)
    console.log('Text Input:', textInput)
  }

  return (
    <div>
      <form className="m-4">
        {/* First set of options */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Select property type</h3>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={(event) => handleButtonClick('Apartment', 1, event)}
              className={`flex w-32 h-12 text-xs items-center p-2 rounded-md shadow-md hover:shadow-lg hover:border-[1px] hover:border-blue-400 ${
                selectedOptionSet1 === 'Apartment'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              }`}
            >
              <img
                src="/images/apartment-icon.svg"
                alt="Apartment"
                className="w-8 h-8 mr-2" // Adjust the size and spacing as needed
              />
              <span>Apartment</span>
            </button>

            <button
              type="button"
              onClick={(event) => handleButtonClick('Villa', 1, event)}
              className={`flex w-32 h-12 text-xs items-center p-2 rounded-md shadow-md hover:shadow-lg hover:border-[1px] hover:border-blue-400 ${
                selectedOptionSet1 === 'Villa'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              }`}
            >
              <img
                src="/images/villa-icon.svg"
                alt="Villa"
                className="w-8 h-8 mr-2" // Adjust the size and spacing as needed
              />
              <span>Villa</span>
            </button>
          </div>
        </div>

        {/* second field */}
        <div className="mb-8">
          <h3 className="text-lg font-bold">Select number of rooms</h3>
          <p className="text-xs text-gray-600 mb-4">
            Choose your BHK preference and move on to the next step
          </p>
          <div className="flex flex-wrap gap-4 ">
            <button
              type="button"
              onClick={(event) => handleButtonClick('1 BHK', 2, event)}
              className={`flex w-32 h-12 text-xs items-center p-2 rounded-md shadow-md hover:shadow-lg hover:border-[1px] hover:border-blue-400 ${
                selectedOptionSet2 === '1 BHK'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              }`}
            >
              <img
                src="/images/bed-icon.svg"
                alt="1 BHK"
                className="w-4 h-4 mr-4" // Adjust the size and spacing as needed
              />
              <span>1 BHK</span>
            </button>
            <button
              type="button"
              onClick={(event) => handleButtonClick('2 BHK', 2, event)}
              className={`flex w-32 h-12 text-xs items-center p-2 rounded-md shadow-md hover:shadow-lg hover:border-[1px] hover:border-blue-400 ${
                selectedOptionSet2 === '2 BHK'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              }`}
            >
              <img
                src="/images/bed-icon.svg"
                alt="2 BHK"
                className="w-4 h-4 mr-4" // Adjust the size and spacing as needed
              />
              <span>2 BHK</span>
            </button>
            <button
              type="button"
              onClick={(event) => handleButtonClick('3 BHK', 2, event)}
              className={`flex w-32 h-12 text-xs items-center p-2 rounded-md shadow-md hover:shadow-lg hover:border-[1px] hover:border-blue-400 ${
                selectedOptionSet2 === '3 BHK'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              }`}
            >
              <img
                src="/images/bed-icon.svg"
                alt="3 BHK"
                className="w-4 h-4 mr-4" // Adjust the size and spacing as needed
              />
              <span>3 BHK</span>
            </button>
            <button
              type="button"
              onClick={(event) => handleButtonClick('4+ BHK', 2, event)}
              className={`flex w-32 h-12 text-xs items-center p-2 rounded-md shadow-md hover:shadow-lg hover:border-[1px] hover:border-blue-400 ${
                selectedOptionSet2 === '4+ BHK'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              }`}
            >
              <img
                src="/images/bed-icon.svg"
                alt="4+ BHK"
                className="w-4 h-4 mr-4" // Adjust the size and spacing as needed
              />
              <span>4+ BHK</span>
            </button>
          </div>
        </div>
        {/* third input */}

        <div className="mb-8">
          <h3 className="text-lg font-bold">Home Interior Type</h3>
          <p className="text-xs text-gray-600 mb-4">
            What best describes your home interior need?
          </p>
          <div className="flex gap-2 bg-white p-2 w-fit rounded-lg">
            <button
              type="button"
              onClick={(event) => handleButtonClick('New', 3, event)}
              className={`rounded-lg w-32 h-12 text-xs   ${
                selectedOptionSet3 === 'New'
                  ? 'bg-green-400 text-white hover:text-white'
                  : 'bg-white hover:text-green-400'
              }`}
            >
              <span>New</span>
            </button>
            <button
              type="button"
              onClick={(event) => handleButtonClick('Renovation', 3, event)}
              className={`rounded-lg w-32 h-12 text-xs   ${
                selectedOptionSet3 === 'Renovation'
                  ? 'bg-green-400 text-white hover:text-white'
                  : 'bg-white hover:text-green-400'
              }`}
            >
              <span>Renovation</span>
            </button>
          </div>
        </div>

        {/* Input text field */}
        <div>
          <h3 className="text-lg font-bold mb-2">
            Your City <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            required
            placeholder="Type Your City..."
            value={textInput}
            onChange={handleTextInputChange}
            className="border-2 border-blue-500 rounded-md p-2 sm:w-1/3 text-xs"
          />
        </div>

        {/* Button to submit the form */}
        <button
          type="button"
          onClick={handleFormSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FirstStepSection

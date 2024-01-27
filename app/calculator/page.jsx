'use client'
import React, { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
} from '@mui/material'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import { useSpaceContext } from '../SpaceContext'
const steps = ['Property Details', 'Select Spaces', 'Plan Spaces', 'Finalise']

const YourStepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0)
   const { spaceCounts, setSpaceCounts } = useSpaceContext()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepClick = (step) => {
    setActiveStep(step)
  }
  const handleOpenWhatsApp = ()=>{
    
  }
  //   const handleTextInputChange = (event) => {
  //     const { value } = event.target
  //     setSelectedOptions((prevSelectedOptions) => ({
  //       ...prevSelectedOptions,
  //       textInput: value,
  //     }))
  //   }
  //   const handleButtonClick = (option, optionSet) => {
  //     setSelectedOptions((prevSelectedOptions) => ({
  //       ...prevSelectedOptions,
  //       [optionSet]: option,
  //     }))
  //   }
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FirstStep id='property-details'/>
          // handleButtonClick={handleButtonClick}
          // handleTextInputChange={handleTextInputChange}
        )
      case 1:
        return (
          <SecondStep
          id='select-spaces'
            spaceCounts={spaceCounts}
            setSpaceCounts={setSpaceCounts}
          />
        )
      case 2:
        return <ThirdStep id='plan-spaces' spaceCounts={spaceCounts} />
      case 3:
        return <FourthStep id='finalise'/>
      default:
        return null
    }
  }

  return (
    <MaxWidthWrapper>
      <Container className="border-2 border-blue-500 rounded-lg bg-slate-200 shadow-lg p-0">
        {/* Stepper component */}
        <div className="bg-white py-4 sm:px-12 w-full rounded-t-lg shadow-lg">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel onClick={() => handleStepClick(index)}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Content for each step */}
        <div className="mt-4 pt-4">
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
            </div>
          ) : (
            <div>
              {renderStepContent(activeStep)}
              {/* Your section content for each step goes here */}

              {/* Buttons for navigation */}
              <div className="mt-4 p-4 bg-white flex justify-evenly w-full rounded-b-lg shadow-lg">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                >
                  Back
                </Button>
                <Button
                  onClick={
                    activeStep === steps.length - 1
                      ? handleOpenWhatsApp
                      : handleNext
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  {activeStep === steps.length - 1
                    ? 'Chat on WhatsApp'
                    : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </MaxWidthWrapper>
  )
}

export default YourStepperComponent

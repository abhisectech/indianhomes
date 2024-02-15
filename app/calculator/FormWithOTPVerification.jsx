import React, { useState, useRef } from 'react'

const FormWithOTPVerification = ({ handleDownloadPDF }) => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [otpVerified, setOtpVerified] = useState(false)

  const inputRefs = useRef(Array.from({ length: 4 }, () => React.createRef()))
  // console.log('inputRefs', inputRefs)
  
  const handleOTPInputChange = (index, value) => {
    // Update the character at the specified index
    setOtp((prevOtp) => {
      // console.log('prevOtp', prevOtp)

      const newOtp = [...prevOtp]
      newOtp[index] = value
      // console.log('newOtp', newOtp)
      console.log('Current OTP:', newOtp.join(''))
      return newOtp
    })

    // Move to the next input box if available
    if (value && index < 3) {
      inputRefs.current[index + 1].current.focus()
    }
  }

  const handleSendOTP = () => {
    // Logic to send OTP to the provided mobile number
    setOtpSent(true)
  }

  const handleVerifyNumber = () => {
    // Logic to verify the mobile number

    handleSendOTP()
  }

  const handleVerifyOTP = () => {
    // Logic to verify the OTP

    console.log('OTP verified')
    setOtpVerified(true)
  }

  return (
    <div>
      <form className="space-y-4" onSubmit={handleDownloadPDF}>
        <div>
          <input
            type="text"
            id="nameInput"
            placeholder="Enter your name"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            id="addressInput"
            placeholder="Enter your address"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            id="numberInput"
            placeholder="Enter your number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="interestedInInput" className="text-gray-600 block">
            Interested In:
          </label>
          <select
            id="interestedInInput"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select an option</option>
            <option value="Renovation">Renovation</option>
            <option value="Kitchen Work">Kitchen Work</option>
            <option value="Wardrobe Work">Wardrobe Work</option>
            <option value="House Work">House Work</option>
          </select>
        </div>

        <div className="flex w-full justify-center">
          {!otpSent ? (
            <button
              type="button"
              onClick={handleVerifyNumber}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full"
            >
              Verify Number
            </button>
          ) : (
            <div className="flex flex-col">
              {!otpVerified ? (
                <>
                  <hr
                    className="border-t-2 my
                  -4"
                  />
                  <div className="flex justify-center">
                    {[...Array(4)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={otp[index]}
                        onChange={(e) =>
                          handleOTPInputChange(index, e.target.value)
                        }
                        className="w-12 h-12 text-center border border-gray-300 rounded-md mr-2"
                        style={{
                          width: '3rem',
                        }}
                        ref={inputRefs.current[index]}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleVerifyOTP}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mt-4"
                  >
                    Enter OTP
                  </button>
                </>
              ) : null}
            </div>
          )}
        </div>

        {otpVerified && (
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full"
            >
              Download
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default FormWithOTPVerification

'use client'
import React, { useState } from 'react'

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    Category: '',
  })
  const [btnText, setBtnText] = useState('Submit')

 
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }



  const handleSubmit = async (event) => {
    event.preventDefault()

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    formDataToSend.append('file', selectedFile)

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setBtnText('Done')
        console.log('Form data and file uploaded successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
      } else {
        setBtnText('Something Went Wrong')
        console.error('Form data and file upload failed.')
      }
    } catch (error) {
      setBtnText('Something Went Wrong')
      console.error('Error during form data and file upload:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Select File:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-input bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-md shadow-sm tracking-wide"
              onChange={handleFileChange}
            />
          </div>

          {/* Right Column */}
          <div className="mb-4">
            <label
              htmlFor="Category"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Category:
            </label>
            <select
              id="Category"
              name="Category"
              className="form-input-select"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="option1" selected>
                Category 1
              </option>
              <option value="option2">Category 2</option>
              <option value="option3">Category 3</option>
              <option value="option4">Category 4</option>
              <option value="option5">Category 5</option>
              <option value="option6">Category 6</option>
              <option value="option7">Category 7</option>
              <option value="option8">Category 8</option>
              <option value="option9">Category 9</option>
              <option value="option10">Category 10</option>
              <option value="option11">Category 11</option>
              <option value="option12">Category 12</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {btnText}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FileUploadForm

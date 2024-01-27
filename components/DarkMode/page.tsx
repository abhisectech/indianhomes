'use client'
// components/DarkModeToggle.tsx

import { useEffect, useState } from 'react'

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    // Toggle the dark mode state
    setDarkMode(!darkMode)

    // Toggle the 'dark' class on the body
    document.body.classList.toggle('dark', !darkMode)
  }

  useEffect(() => {
    // Set dark mode based on user's preference from localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.body.classList.toggle('dark', isDarkMode)
  }, [])

  useEffect(() => {
    // Save the user's preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkMode

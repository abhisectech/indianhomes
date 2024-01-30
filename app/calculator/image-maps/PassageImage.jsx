'use client'

import React, { useState } from 'react'

const SvgMap = () => {
  const [selectedPolygon, setSelectedPolygon] = useState([])

  const handlePolygonClick = (polygonId) => {
    const isSelected = selectedPolygon.includes(polygonId)

    setSelectedPolygon((prevSelected) =>
      isSelected
        ? prevSelected.filter((id) => id !== polygonId)
        : [...prevSelected, polygonId]
    )
  }

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2810 1794"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/passage.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="292,5,374,2,845,2,895,2,1774,2,1821,5,2245,2,2377,2,1709,496,1704,501,962,481,954,484"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1319.3333333333333"
          y="122.33333333333334"
          width="339.54766845703125"
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
          x="1384.3333333333333"
          y="165.33333333333334"
          fontSize={40}
          id="false-ceiling"
          onClick={() => handlePolygonClick('false-ceiling')}
          className="cursor-pointer"
          style={{ color: 'black' }}
        >
          False Ceiling
        </text>

        {/* ------Electrical----------------- */}

        <polygon
          points="1910,672,2096,653,2089,787,1898,757"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1988.25"
          y="674.25"
          width="272.29750061035156"
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
          x="2053.25"
          y="717.25"
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
          points="947,1040,1709,1052,2784,1792,6,1792,-1,1662"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1079"
          y="1424.6"
          width="252.82774353027344"
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
          x="1144"
          y="1467.6"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>

       
        {/* -------------- Walls ----------- */}

        <polygon
          points="282,0,959,486,945,1037,-1,1660,-1,-2"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="962,484,1714,504,1717,489,2387,-2,2806,-2,2809,1779,2786,1787,1932,1203,2096,779,2096,650,1905,670,1905,757,2094,779,1932,1203,1709,1050,945,1040"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="426.8"
          y="593.2"
          width="177.43206024169922"
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
          x="491.8"
          y="636.2"
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

      <div>
        Selected Polygon:{' '}
        {selectedPolygon.map((polygon) => `${polygon},`) || 'None'}
      </div>
    </div>
  )
}

export default SvgMap

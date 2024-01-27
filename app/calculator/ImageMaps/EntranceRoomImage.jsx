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
        viewBox="0 0 3022 2192"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/entranceLobby.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="119,99,1064,692,2076,686,3013,123,3013,3,7,-3"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1538.6666666666667"
          y="223.66666666666669"
          width="339.62062072753906"
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
          x="1603.6666666666667"
          y="266.6666666666667"
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
          points="1777,1007,2001,1001,2001,1087,1774,1097"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1878.25"
          y="1005"
          width="272.3708801269531"
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
          x="1943.25"
          y="1048"
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
          points="986,1517,1075,1442,2089,1447,2254,1565,2249,1677,2706,2069,2983,2075,2983,2179,517,2147,992,1695"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1873.4"
          y="1738.3"
          width="252.87432861328125"
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
          x="1938.4"
          y="1781.3"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>

        {/* -------------- Door ----------- */}
        <polygon
          points="1352,804,1737,804,1737,1444,1363,1442"
          fill={selectedPolygon.includes('Door') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Door')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1537.25"
          y="1080.5"
          width="191.39341735839844"
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
          x="1602.25"
          y="1123.5"
          fontSize={40}
          id="Door"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Door')}
          style={{ color: 'black' }}
        >
          Door
        </text>
        {/* -------------- Walls ----------- */}

        <polygon
          points="1,2187,199,2139,84,894,976,926,992,1506,1075,1442,1363,1442,1355,804,1739,798,1742,1450,2089,1450,2081,1087,2001,1087,1777,1100,1779,1004,2004,999,2001,1087,2081,1087,2089,1450,2254,1562,2257,1001,2724,958,3021,964,3021,123,2070,692,1056,686,-1,40"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1613.3333333333333"
          y="1066.8148148148148"
          width="177.4520492553711"
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
          x="1678.3333333333333"
          y="1109.8148148148148"
          fontSize={40}
          id="Walls"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Walls')}
          style={{ color: 'black' }}
        >
          Walls
        </text>
        {/* -------------- Console ----------- */}
        <polygon
          points="84,886,976,926,989,1706,514,2147,436,2141,196,2139"
          fill={selectedPolygon.includes('Console') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Console')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="522.5"
          y="1614.5"
          width="253.942626953125"
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
          x="587.5"
          y="1657.5"
          fontSize={40}
          id="Console"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Console')}
          style={{ color: 'black' }}
        >
          Console
        </text>
        {/* -------------- Shoe Rack ----------- */}
        <polygon
          points="2260,1004,2722,958,3002,961,2978,2075,2708,2077,2249,1682"
          fill={selectedPolygon.includes('Shoe Rack') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Shoe Rack')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2643.1666666666665"
          y="1416.5"
          width="299.7728729248047"
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
          x="2708.1666666666665"
          y="1459.5"
          fontSize={40}
          id="Shoe Rack"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Shoe Rack')}
          style={{ color: 'black' }}
        >
          Shoe Rack
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

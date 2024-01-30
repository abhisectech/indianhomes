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
        viewBox="0 0 2616 1648"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/mandir.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="332,2,822,337,2016,335,2615,55,2613,0"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1669.6"
          y="102.80000000000001"
          width="339.5174255371094"
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
          x="1734.6"
          y="145.8"
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
          points="2197,638,2421,613,2416,712,2190,723"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2296"
          y="628.5"
          width="272.2860870361328"
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
          x="2361"
          y="671.5"
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
          points="817,1103,1106,1103,1108,1181,1700,1172,1700,1093,2042,1089,2613,1431,2615,1646,248,1648"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1539.888888888889"
          y="1231"
          width="252.7732696533203"
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
          x="1604.888888888889"
          y="1274"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>
        {/* --------------Mandir---------- */}
        <polygon
          points="1402,435,1117,571,1108,1179,1700,1170,1686,571"
          fill={selectedPolygon.includes('Mandir') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Mandir')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1392.6"
          y="742.2"
          width="230.7173309326172"
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
          x="1457.6"
          y="785.2"
          fontSize={40}
          id="Mandir"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Mandir')}
          style={{ color: 'black' }}
        >
          Mandir
        </text>

        {/* -------------- UPVC Window ----------- */}
        <polygon
          points="144,273,657,465,683,968,205,1304"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="412.25"
          y="709.5"
          width="372.2545471191406"
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
          x="477.25"
          y="752.5"
          fontSize={40}
          id="UPVC Window"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ color: 'black' }}
        >
          UPVC Window
        </text>
        {/* -------------- Walls ----------- */}
        <polygon
          points="805,337,1385,335,1404,432,1117,573,812,573"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="810,576,1120,576,1106,1100,817,1103"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1385,340,1406,432,1690,569,1697,1093,2037,1084,2613,1424,2615,737,2418,710,2187,726,2192,640,2425,608,2418,710,2615,737,2615,62,2037,328,2016,335"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="803,331,817,1100,246,1646,-3,1648,-3,1373,205,1304,685,966,662,460,142,268,205,1304,-3,1373,-1,-2,325,-2"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1094.6"
          y="407"
          width="177.45012664794922"
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
          x="1159.6"
          y="450"
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

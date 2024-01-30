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
        viewBox="0 0 3069 2035"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/balcony.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="514,5,2295,0,1856,371,1053,369"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1419.5"
          y="143.25"
          width="339.6063995361328"
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
          x="1484.5"
          y="186.25"
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
          points="2734,631,2975,593,2967,778,2731,723"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2841.75"
          y="638.25"
          width="272.3408508300781"
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
          x="2906.75"
          y="681.25"
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
          points="1106,962,1860,967,2134,1152,2063,1265,1993,1244,1898,1228,1849,1230,1800,1244,1770,1268,1754,1287,1738,1306,1730,1325,1659,1298,1648,1320,1643,1358,1640,1401,1640,1439,1638,1469,1635,1507,1638,1545,1635,1569,1638,1601,1638,1629,1635,1656,1627,1683,1662,1691,1711,1694,1705,1653,1757,1661,1833,1672,1868,1675,1917,1680,1971,1694,1963,1734,1993,1734,2042,1734,2069,1729,2077,1691,2117,1675,2234,1225,3047,1769,3045,2032,0,2032,3,1707,694,1241,830,1585,811,1618,830,1634,895,1631,917,1637,914,1607,998,1615,1063,1618,1158,1615,1174,1615,1188,1648,1272,1645,1266,1596,1266,1490,1444,1488,1441,1531,1383,1539,1359,1561,1369,1593,1402,1601,1440,1615,1475,1612,1508,1607,1529,1577,1516,1545,1483,1536,1483,1466,1486,1414,1486,1333,1536,1325,1590,1301,1614,1263,1601,1236,1563,1222,1482,1203,1433,1203,1400,1211,1354,1222,1322,1244,1316,1284,1338,1303,1365,1317,1398,1328,1444,1330,1444,1363,1446,1398,1444,1431,1444,1461,1446,1488,1267,1490,1262,1295,1192,1290,1170,1260,1145,1241,1110,1225,1080,1222,1042,1217,991,1217,948,1211,923,1209,896,1214,880,1190,863,1165,845,1141"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1455.1100917431193"
          y="1406.2477064220184"
          width="252.86639404296875"
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
          x="1520.1100917431193"
          y="1449.2477064220184"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>

        {/* -------------- UPVC Window ----------- */}
        <polygon
          points="2021,463,2024,921,2601,1225,2615,298"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2305.25"
          y="683.75"
          width="372.3712463378906"
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
          x="2370.25"
          y="726.75"
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
          points="1861,366,2309,-3,3060,-3,3065,588,2975,591,2734,626,2612,612,2615,290,2021,463,2024,927,2604,1230,2612,612,2734,626,2731,729,2748,729,2970,778,2975,591,3065,588,3051,1767,2238,1222,2257,1127,2230,1097,2192,1084,2162,1108,2135,1149,1864,967"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2522.4615384615386"
          y="720.8846153846154"
          width="177.46387481689453"
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
          x="2587.4615384615386"
          y="763.8846153846154"
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

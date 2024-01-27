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
        viewBox="0 0 2437 1533"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/study.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="3,37,496,372,1672,362,2436,4,1620,6,1,2"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1028"
          y="87.5"
          width="339.45452880859375"
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
          x="1093"
          y="130.5"
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
          points="156,543,346,586,352,674,150,676"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="241"
          y="576.75"
          width="272.2573547363281"
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
          x="306"
          y="619.75"
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
          points="483,1109,1678,1098,1687,1109,1682,1251,1799,1335,1799,1320,1900,1324,1898,1440,1837,1417,1825,1430,1822,1445,1829,1453,1848,1453,1853,1443,1876,1455,1861,1466,1842,1471,1822,1475,1803,1486,1794,1496,1794,1507,1797,1520,1812,1529,1825,1522,1835,1507,1829,1496,1848,1488,1865,1486,1876,1481,1891,1473,1874,1496,1863,1509,1857,1520,1853,1531,1792,1531,1870,1531,1891,1531,1885,1509,1915,1479,1977,1496,1975,1514,1988,1524,2005,1520,2010,1503,1997,1488,1975,1475,1947,1464,1928,1460,1936,1449,1945,1438,1952,1434,1964,1440,1977,1436,1980,1421,1967,1410,1943,1421,1932,1438,1919,1445,1921,1326,2038,1322,2035,1309,2152,1376,2147,1490,2171,1509,2421,1516,2419,1533,1736,1531,57,1531"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1850.6470588235295"
          y="1403.1911764705883"
          width="252.7443389892578"
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
          x="1915.6470588235295"
          y="1446.1911764705883"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>
        {/* --------------Door---------- */}
        <polygon
          points="496,456,778,459,774,1105,483,1105"
          fill={selectedPolygon.includes('Door') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Door')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="622.75"
          y="738.25"
          width="191.31922912597656"
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
          x="687.75"
          y="781.25"
          fontSize={40}
          id="Door"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Door')}
          style={{ color: 'black' }}
        >
          Door
        </text>

        {/* -------------- UPVC Window ----------- */}
        <polygon
          points="839,467,1332,465,1334,844,832,855"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1074.25"
          y="614.75"
          width="372.23468017578125"
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
          x="1139.25"
          y="657.75"
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
          points="3,39,492,372,483,1117,354,672,348,588,147,536,150,683,354,672,483,1117,53,1531,5,1531"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="496,372,1674,368,1672,558,1603,571,1601,747,1670,749,1670,906,1334,844,1340,461,834,463,828,853,1334,844,1670,906,1521,915,1527,1098,778,1100,778,456,492,454"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1678,362,2432,13,2436,435,2324,437,2115,469,2111,543,1928,568,1930,523,1859,521,1670,560"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="251.09090909090907"
          y="762.2727272727273"
          width="177.40596771240234"
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
          x="316.09090909090907"
          y="805.2727272727273"
          fontSize={40}
          id="Walls"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Walls')}
          style={{ color: 'black' }}
        >
          Walls
        </text>
        {/* -------------- Walls ----------- */}
        <polygon
          points="1607,575,1863,521,1928,525,1926,577,2115,543,2113,476,2320,439,2432,439,2421,1522,2175,1509,2150,1490,2152,1372,1889,1216,1814,1176,1818,1021,1687,975,1689,1102,1672,1096,1527,1102,1521,913,1674,909,1676,749,1603,747"
          fill={
            selectedPolygon.includes('Study Table') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Study Table')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1893.1304347826087"
          y="869.7826086956521"
          width="324.4213104248047"
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
          x="1958.1304347826087"
          y="912.7826086956521"
          fontSize={40}
          id="Study Table"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Study Table')}
          style={{ color: 'black' }}
        >
          Study Table
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

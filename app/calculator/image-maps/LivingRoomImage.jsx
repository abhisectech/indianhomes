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
        viewBox="0 0 2782 1790"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/living.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="281,5,906,452,1594,472,2161,10"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1225.5"
          y="191.75"
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
          x="1290.5"
          y="234.75"
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
          points="2501,861,2719,885,2717,1001,2498,971"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2598.75"
          y="886.5"
          width="272.35179138183594"
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
          x="2663.75"
          y="929.5"
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
          points="1463,1074,1643,1072,1788,1168,1788,1193,2206,1500,2292,1512,2498,1532,2781,1709,2778,1788,1,1785,4,1751,109,1667,119,1689,210,1694,210,1667,269,1667,235,1748,254,1748,286,1667,397,1667,407,1701,417,1711,424,1672,537,1670,571,1751,596,1743,562,1672,675,1674,682,1699,736,1642,729,1608,1021,1124,1060,1114,1060,1082,1090,1079,812,1652,1874,1657"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="924.7027027027027"
          y="1512.3783783783783"
          width="252.87924194335938"
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
          x="989.7027027027027"
          y="1555.3783783783783"
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
          points="1051,578,1449,585,1454,873,1053,868"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1241.75"
          y="683"
          width="372.4190979003906"
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
          x="1306.75"
          y="726"
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
          points="901,455,896,920,847,925,822,858,805,851,773,858,151,991,171,-2,267,-2"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="908,457,1594,472,1591,900,1459,875,1451,583,1048,578,1048,870,1461,875,1589,900,1346,900,1346,1072,1056,1074,1048,925,1036,922,1043,507,903,502"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1594,467,2161,10,2302,10,2773,7,2778,895,2724,885,2501,856,2459,843,2456,595,2007,647,2004,932,2456,1030,2461,843,2503,856,2498,971,2717,1003,2722,885,2776,895,2773,1701,2510,1534,2515,1242,1935,1006,1945,979,1950,947,1940,922,1928,897,1918,870,1918,846,1901,834,1884,836,1876,846,1874,861,1867,878,1859,740,1881,735,1803,644,1736,639,1712,666,1695,686,1677,696,1640,725,1640,745,1643,772,1643,787,1643,821,1645,838,1648,870,1645,890,1667,900,1707,912,1734,920,1781,937,1803,944,1830,937,1830,959,1832,979,1840,998,1842,1008,1783,1015,1785,1094,1594,981"
          fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="615.8888888888889"
          y="607.4444444444445"
          width="177.44766998291016"
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
          x="680.8888888888889"
          y="650.4444444444445"
          fontSize={40}
          id="Walls"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Walls')}
          style={{ color: 'black' }}
        >
          Walls
        </text>
        {/* -------------- Sofa ----------- */}
        <polygon
          points="159,991,788,851,805,856,822,863,842,932,1043,927,1053,1119,1021,1116,726,1611,736,1645,684,1692,680,1667,559,1670,480,1465,532,1468,530,1456,399,1453,417,1429,417,1404,407,1392,397,1379,390,1357,402,1343,417,1333,434,1330,444,1306,424,1274,409,1281,385,1269,367,1274,340,1271,323,1279,318,1296,321,1308,323,1323,335,1335,350,1335,362,1343,367,1355,358,1382,348,1392,338,1421,338,1436,353,1451,328,1453,296,1451,276,1451,269,1465,284,1468,299,1470,313,1470,340,1470,267,1665,205,1665,200,1692,117,1697,112,1662,104,1252,151,1210"
          fill={selectedPolygon.includes('Sofa') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sofa')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="422.271186440678"
          y="1323.457627118644"
          width="185.75792694091797"
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
          x="487.271186440678"
          y="1366.457627118644"
          fontSize={40}
          id="Sofa"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Sofa')}
          style={{ color: 'black' }}
        >
          Sofa
        </text>
        {/* -------------- Side Tables ----------- */}
        <polygon
          points="279,1458,530,1458,527,1472,483,1470,589,1748,574,1750,466,1472,409,1472,421,1703,407,1708,390,1470,358,1475,249,1743,235,1743,338,1473,276,1470"
          fill={
            selectedPolygon.includes('Side Tables') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Side Tables')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="398.1875"
          y="1524.8125"
          width="318.18113708496094"
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
          x="463.1875"
          y="1567.8125"
          fontSize={40}
          id="Side Tables"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Side Tables')}
          style={{ color: 'black' }}
        >
          Side Tables
        </text>
        {/* -------------- Mandir ----------- */}
        <polygon
          points="1739,644,1805,642,1879,740,1854,740,1862,888,1844,910,1832,937,1800,942,1645,893,1640,725"
          fill={selectedPolygon.includes('Mandir') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Mandir')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1780"
          y="763.1"
          width="230.75132751464844"
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
          x="1845"
          y="806.1"
          fontSize={40}
          id="Mandir"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Mandir')}
          style={{ color: 'black' }}
        >
          Mandir
        </text>
        {/* -------------- Console ----------- */}
        <polygon
          points="1348,900,1591,897,1591,1074,1564,1070,1567,949,1365,954,1365,1074,1346,1074"
          fill={selectedPolygon.includes('Console') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Console')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1457.125"
          y="956"
          width="253.96104431152344"
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
          x="1522.125"
          y="999"
          fontSize={40}
          id="Console"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Console')}
          style={{ color: 'black' }}
        >
          Console
        </text>
        {/* -------------- TV Panel ----------- */}
        <polygon
          points="1930,1013,2510,1244,2508,1532,2206,1500,1783,1193,1788,1015,1842,1011,1857,1023,1879,1030,1894,1033,1913,1030,1923,1023"
          fill={selectedPolygon.includes('TV Panel') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('TV Panel')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1992.75"
          y="1094.25"
          width="268.12290954589844"
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
          x="2057.75"
          y="1137.25"
          fontSize={40}
          id="TV Panel"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('TV Panel')}
          style={{ color: 'black' }}
        >
          TV Panel
        </text>
        {/* -------------- Centre Table ----------- */}
        <polygon
          points="1122,1106,1395,1106,1510,1379,1510,1551,1024,1569,1033,1392"
          fill={
            selectedPolygon.includes('Centre Table') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Centre Table')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1255.6666666666667"
          y="1307.5"
          width="342.0301055908203"
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
          x="1320.6666666666667"
          y="1350.5"
          fontSize={40}
          id="Centre Table"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Centre Table')}
          style={{ color: 'black' }}
        >
          Centre Table
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

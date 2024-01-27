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
        viewBox="0 0 2763 1717"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/kitchen.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="104,186,1227,354,1224,318,1273,310,1380,322,1383,376,1842,454,2674,283,2759,269,2762,7,104,0"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1511.090909090909"
          y="218.72727272727275"
          width="339.50189208984375"
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
          x="1576.090909090909"
          y="261.72727272727275"
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
          points="782,835,1007,823,1014,882,787,896"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1678,784,1783,779,1788,818,1683,821"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="887.5"
          y="816"
          width="272.2518615722656"
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
          x="952.5"
          y="859"
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
          points="13,1717,524,1566,528,1544,1856,1165,2757,1492,2762,1715"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1396.6666666666667"
          y="1490.1666666666667"
          width="252.76547241210938"
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
          x="1461.6666666666667"
          y="1533.1666666666667"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>
        {/* --------------Kitchen Cabinets---------- */}
        <polygon
          points="511,1116,1846,906,1861,918,1886,918,2479,1028,2474,1338,1866,1121,524,1487"
          fill={
            selectedPolygon.includes('Kitchen Cabinets')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Kitchen Cabinets')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="111,242,106,454,494,513,509,764,1187,755,1168,430,480,320,480,300"
          fill={
            selectedPolygon.includes('Kitchen Cabinets')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Kitchen Cabinets')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1427,486,1517,479,1937,550,1949,742,1515,752,1434,750,1432,708,1515,708,1549,703,1551,669,1434,674"
          fill={
            selectedPolygon.includes('Kitchen Cabinets')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Kitchen Cabinets')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1670.875"
          y="1061"
          width="422.7219543457031"
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
          x="1735.875"
          y="1104"
          fontSize={40}
          id="Kitchen Cabinets"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Kitchen Cabinets')}
          style={{ color: 'black' }}
        >
          Kitchen Cabinets
        </text>
        {/* -------Counter Top-------- */}
        <polygon
          points="514,1055,594,1043,726,1031,770,1028,770,977,773,938,1180,901,1178,931,1083,943,1209,982,1534,933,1488,911,1488,887,1529,889,1536,879,1529,874,1507,869,1864,835,2278,882,2283,906,2144,889,2076,923,2359,970,2435,933,2315,911,2315,884,2562,911,2469,996,2469,1026,1856,909,1844,901,514,1116"
          fill={
            selectedPolygon.includes('Counter Top') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Counter Top')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1589.71875"
          y="896.46875"
          width="333.9831848144531"
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
          x="1654.71875"
          y="939.46875"
          fontSize={40}
          id="Counter Top"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Counter Top')}
          style={{ color: 'black' }}
        >
          Counter Top
        </text>
        {/* ------ Plumbing--------- */}
        <polygon
          points="2138,894,2278,906,2280,891,2282,879,2273,867,2256,865,2258,848,2282,855,2290,830,2297,811,2312,801,2329,796,2346,791,2365,796,2365,811,2353,821,2341,808,2326,818,2314,828,2309,850,2307,862,2334,860,2334,874,2312,874,2313,889,2310,913,2434,933,2363,967,2082,926"
          fill={selectedPolygon.includes('Plumbing') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Plumbing')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2292.862068965517"
          y="814.3793103448276"
          width="274.9379577636719"
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
          x="2357.862068965517"
          y="857.3793103448276"
          fontSize={40}
          id="Plumbing"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Plumbing')}
          style={{ color: 'black' }}
        >
          Plumbing
        </text>
        {/* ----Kitchen Walls------ */}
        <polygon
          points="506,764,1183,760,1180,711,1168,427,485,320,106,237,104,191,1224,354,1229,681,1180,674,1180,708,1219,716,1427,711,1432,757,1512,755,1856,750,1954,747,1942,550,1515,471,1429,491,1432,672,1383,674,1383,383,1837,457,2757,269,2762,420,2759,935,2318,882,2315,874,2337,874,2340,860,2310,855,2318,828,2718,852,2691,430,2015,530,2030,811,2288,828,2283,850,2257,848,2252,865,2269,865,2274,874,1854,833,1688,852,1685,823,1793,823,1785,779,1676,782,1690,852,1478,872,1436,869,1383,862,1363,872,1366,884,1331,884,1319,869,1261,869,1258,855,1239,855,1234,869,1192,869,1163,889,1180,889,1178,899,770,938,768,896,1019,884,1009,821,780,833,787,894,768,896,770,884,597,874,506,884"
          fill={
            selectedPolygon.includes('Kitchen Walls') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Kitchen Walls')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1516.4666666666667"
          y="705.8666666666667"
          width="353.4207458496094"
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
          x="1581.4666666666667"
          y="748.8666666666667"
          fontSize={40}
          id="Kitchen Walls"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Kitchen Walls')}
          style={{ color: 'black' }}
        >
          Kitchen Walls
        </text>
        {/* -------------- UPVC Window ----------- */}
        <polygon
          points="2017,535,2689,432,2715,850,2476,835,2462,484,2335,498,2342,598,2466,579,2474,835,2322,826,2340,808,2352,821,2371,813,2366,791,2342,789,2320,796,2303,804,2291,826,2239,821,2176,816,2064,808,2030,811"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2330.5454545454545"
          y="692.2727272727273"
          width="372.2722473144531"
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
          x="2395.5454545454545"
          y="735.2727272727273"
          fontSize={40}
          id="UPVC Window"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ color: 'black' }}
        >
          UPVC Window
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

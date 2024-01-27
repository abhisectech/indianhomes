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
        viewBox="0 0 3081 2099"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/living%3Adining.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="943,523,1841,427,2059,515,3074,403,3074,16,7,19,7,397"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1562.142857142857"
          y="285.57142857142856"
          width="339.62501525878906"
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
          x="1627.142857142857"
          y="328.57142857142856"
          fontSize={40}
          id="false-ceiling"
          onClick={() => handlePolygonClick('false-ceiling')}
          className="cursor-pointer"
          style={{ color: 'black' }}
        >
          False Ceiling
        </text>

        {/* ------walls----------------- */}

        <polygon
          points="940,528,1833,430,1858,1154,1773,1146,1765,1113,1811,1113,1806,1100,1751,1097,1762,1081,1762,1051,1819,1045,1773,939,1708,945,1694,972,1634,961,1637,915,1626,787,1670,781,1828,770,1822,702,1667,713,1670,781,1624,787,1618,569,1174,596,1185,779,1626,787,1637,917,1144,882,1136,901,1074,890,951,923"
          fill={selectedPolygon.includes('walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="181,419,753,504,766,1105,636,1138,388,1070,388,1211,208,1260,205,1103,573,1015,562,564,189,534"
          fill={selectedPolygon.includes('walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1836,425,1860,1157,1882,1141,1885,945,2021,855,2143,852,2116,961,2236,967,2247,953,2522,980,2527,994,2579,997,2582,812,2394,803,2391,866,2195,863,2192,798,2024,806,1909,869,1912,518,2021,553,2024,806,2192,798,2192,724,2301,607,2399,724,2396,803,2582,812,2758,822,2767,795,2761,765,2769,768,2772,746,2772,793,2780,822,2799,825,2810,806,2810,790,2799,771,2791,754,2791,733,2807,724,2835,741,2851,749,2824,784,2821,814,2832,828,2862,828,2867,667,2620,684,2590,659,2592,550,3077,504,3074,409,2059,518"
          fill={selectedPolygon.includes('walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('walls')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1576.8125"
          y="836.84375"
          width="177.44397735595703"
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
          x="1641.8125"
          y="879.84375"
          fontSize={40}
          className="cursor-pointer"
          id="walls"
          onClick={() => handlePolygonClick('walls')}
          style={{ color: 'black' }}
        >
          Wall
        </text>
        {/* ---electrical---------- */}
        <polygon
          points="1667,713,1822,705,1825,770,1667,779"
          fill={
            selectedPolygon.includes('electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('electrical')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1735.25"
          y="698.75"
          width="272.3520965576172"
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
          x="1800.25"
          y="741.75"
          fontSize={40}
          className="cursor-pointer"
          id="electrical"
          onClick={() => handlePolygonClick('electrical')}
          style={{ color: 'black' }}
        >
          Electrical
        </text>
        {/* --------------flooring---------- */}
        <polygon
          points="309,1233,211,1266,205,1277,178,1288,159,1285,146,1290,127,1299,110,1304,108,1290,50,1307,39,2099,3074,2099,3080,1179,2788,1135,2778,1157,2805,1190,2832,1225,2848,1244,2859,1274,2886,1299,2843,1350,2783,1522,2761,1628,2753,1704,2753,1778,2758,1819,2764,1873,2729,1870,2729,1843,2720,1794,2720,1772,2712,1734,2707,1775,2682,1772,2666,1715,2669,1672,2671,1633,2530,1587,2538,1947,2508,1933,2494,1478,2051,1383,2056,1764,2029,1751,2021,1473,1855,1418,1860,1587,1833,1582,1825,1386,1817,1369,1819,1350,2086,1075,2105,1073,2122,1073,2138,1075,2149,1086,2211,999,2113,991,2103,1029,2043,1026,2040,1007,1980,1059,1969,1094,1969,1127,1972,1149,1977,1165,1942,1162,1882,1162,1885,1138,1858,1157,1773,1146,1825,1307,1811,1307,1757,1143,1711,1135,1700,1263,1686,1263,1697,1135,1689,1133,1683,1184,1613,1220,1580,1280,1564,1280,1591,1231,1572,1239,1572,1258,1526,1285,1466,1277,1460,1252,995,1143,995,1152,978,1152,932,1143,919,1075,897,1084,883,1078,859,1084,851,1081,826,1092,802,1092,769,1103,644,1138,755,1165,753,1201,897,1146,1449,1271,1449,1375,1210,1500,747,1334,742,1391,989,1489,954,1702,818,1778,225,1457,211,1288"
          fill={selectedPolygon.includes('flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('flooring')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="2530,1029,2538,1176,2631,1187,2644,1141,2652,1113,2595,1103,2579,1048,2579,1032"
          fill={selectedPolygon.includes('flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1691.017391304348"
          y="1300.486956521739"
          width="252.86029052734375"
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
          x="1756.017391304348"
          y="1343.486956521739"
          fontSize={40}
          id="flooring"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>
        {/* -------Crockery Unit-------- */}
        <polygon
          points="2867,664,2614,681,2587,653,2587,542,2625,542,3080,501,3080,1173,2778,1133,2764,1089,2748,1056,2729,1032,2707,1015,2674,1067,2652,1111,2595,1100,2579,1045,2584,814,2756,822,2761,836,2772,844,2780,836,2780,819,2799,822,2805,841,2821,844,2827,836,2829,822,2867,825"
          fill={
            selectedPolygon.includes('Crockery Unit') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Crockery Unit')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2741.6785714285716"
          y="827.1785714285714"
          width="359.8363342285156"
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
          x="2806.6785714285716"
          y="870.1785714285714"
          fontSize={40}
          id="Crockery Unit"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Crockery Unit')}
          style={{ color: 'black' }}
        >
          Crockery Unit
        </text>
        {/* ------ Sofa--------- */}
        <polygon
          points="1074,893,1134,898,1142,882,1632,920,1634,966,1645,958,1689,975,1651,1056,1689,1054,1686,1097,1629,1092,1624,1103,1632,1108,1662,1111,1594,1228,1566,1241,1569,1258,1526,1285,1463,1274,1468,1250,992,1135,995,1152,981,1152,929,1143,900,939,987,915,1033,904"
          fill={selectedPolygon.includes('Sofa') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sofa')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1618,1217,1678,1111,1686,1111,1686,1184"
          fill={selectedPolygon.includes('Sofa') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sofa')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1379.851851851852"
          y="1030.6666666666667"
          width="185.75089263916016"
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
          x="1444.851851851852"
          y="1073.6666666666667"
          fontSize={40}
          id="Sofa"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Sofa')}
          style={{ color: 'black' }}
        >
          Sofa
        </text>
        {/* ----Dining Table Set------ */}
        <polygon
          points="2092,1073,2111,1070,2127,1075,2143,1086,2154,1089,2252,950,2527,975,2538,1171,2576,1176,2601,1179,2628,1190,2652,1135,2663,1100,2674,1070,2693,1048,2709,1021,2742,1040,2756,1067,2767,1089,2772,1113,2780,1130,2780,1160,2797,1168,2805,1182,2816,1195,2829,1209,2837,1228,2848,1241,2859,1260,2862,1277,2878,1285,2884,1296,2873,1312,2859,1329,2840,1361,2829,1399,2813,1432,2805,1467,2788,1506,2780,1541,2769,1568,2769,1595,2761,1628,2758,1663,2753,1702,2753,1731,2750,1767,2753,1794,2758,1840,2761,1868,2734,1870,2729,1808,2720,1759,2712,1740,2709,1772,2682,1770,2669,1696,2674,1669,2674,1631,2628,1620,2527,1587,2535,1944,2505,1933,2494,1478,2048,1380,2056,1756,2032,1748,2021,1470,1852,1416,1860,1582,1833,1579,1825,1380,1819,1367,1822,1353"
          fill={
            selectedPolygon.includes('Dining Table Set')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Dining Table Set')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2564.108108108108"
          y="1364.554054054054"
          width="407.6828308105469"
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
          x="2629.108108108108"
          y="1407.554054054054"
          fontSize={40}
          id="Dining Table Set"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Dining Table Set')}
          style={{ color: 'black' }}
        >
          Dining Table Set
        </text>
        {/* -------------- Centre Table ----------- */}
        <polygon
          points="750,1244,750,1201,900,1146,1447,1274,1441,1375,1207,1503,744,1329"
          fill={
            selectedPolygon.includes('Centre Table') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Centre Table')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1024.142857142857"
          y="1253"
          width="342.01243591308594"
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
          y="1296"
          x="1089.142857142857"
          fontSize={40}
          id="Centre Table"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Centre Table')}
          style={{ color: 'black' }}
        >
          Centre Table
        </text>
        {/* -------Mandir-------- */}
        <polygon
          points="2301,610,2192,724,2192,858,2396,863,2394,713"
          fill={selectedPolygon.includes('Mandir') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Mandir')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2285"
          y="710.6"
          width="230.7521209716797"
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
          x="2350"
          y="753.6"
          fontSize={40}
          id="Mandir"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Mandir')}
          style={{ color: 'black' }}
        >
          Mandir
        </text>
        {/* ---TV Panel------ */}
        <polygon
          points="388,1252,336,1228,216,1290,225,1457,821,1780,957,1699,989,1495,744,1391,744,1437,755,1446,548,1361,529,1397,505,1448,543,1467,540,1489,469,1465,431,1440,437,1424,475,1437,480,1383,513,1348,388,1296"
          fill={selectedPolygon.includes('TV Panel') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('TV Panel')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="536.9545454545455"
          y="1385.6363636363637"
          width="268.13323974609375"
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
          x="601.9545454545455"
          y="1428.6363636363637"
          fontSize={40}
          id="TV Panel"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('TV Panel')}
          style={{ color: 'black' }}
        >
          TV Panel
        </text>
        {/* -------UPVC Window----------- */}
        <polygon
          points="186,536,562,566,573,1010,203,1103"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="371"
          y="760.75"
          width="372.3948059082031"
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
          x="436"
          y="803.75"
          fontSize={40}
          id="UPVC Window"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ color: 'black' }}
        >
          UPVC Window
        </text>
        {/* ---------side tables-------- */}
        <polygon
          points="1629,1097,1806,1103,1811,1116,1762,1116,1828,1309,1811,1307,1749,1111,1713,1116,1705,1260,1686,1263,1702,1111,1675,1111,1580,1280,1564,1282,1664,1111,1629,1108"
          fill={
            selectedPolygon.includes('side-tables') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('side-tables')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1697.125"
          y="1132.0625"
          width="318.2036437988281"
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
          x="1762.125"
          y="1175.0625"
          fontSize={40}
          id="side-tables"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('side-tables')}
          style={{ color: 'black' }}
        >
          Side Tables
        </text>
        {/* --------Console-------- */}
        <polygon
          points="2024,849,1890,939,1882,1157,1975,1162,1969,1127,1972,1094,1977,1062,1988,1015,1999,986,2015,945,2045,923,2043,1021,2100,1024,2116,964,2122,923,2130,898,2141,866,2138,852"
          fill={selectedPolygon.includes('Console') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Console')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2019.2222222222222"
          y="946.2777777777778"
          width="253.9395294189453"
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
          x="2084.222222222222"
          y="989.2777777777778"
          fontSize={40}
          id="Console"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Console')}
          style={{ color: 'black' }}
        >
          Console
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

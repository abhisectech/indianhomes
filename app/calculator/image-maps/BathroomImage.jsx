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
        viewBox="0 0 2450 1702"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/bathroom.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="34,167,704,518,921,518,921,385,722,372,300,2"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="992,383,1081,524,1823,539,2449,184,2250,15,1789,401"
          fill={
            selectedPolygon.includes('false-ceiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('false-ceiling')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="590.3333333333334"
          y="284"
          width="339.5609588623047"
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
          x="655.3333333333334"
          y="327"
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
          points="1860,738,1971,730,1968,806,1856,808,1856,786,1858,767,1860,751"
          fill={
            selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1879.857142857143"
          y="726.4285714285714"
          width="272.30894470214844"
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
          x="1944.857142857143"
          y="769.4285714285714"
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
          points="689,1174,917,1171,917,1420,936,1420,1079,1169,1239,1169,1228,1195,1235,1204,1254,1206,1269,1208,1289,1208,1310,1202,1317,1204,1310,1184,1302,1167,1455,1165,1473,1178,1503,1195,1568,1230,1916,1232,1936,1230,2423,1516,2429,1672,5,1657,62,1553"
          fill={selectedPolygon.includes('Flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1272.44"
          y="1234.16"
          width="252.82188415527344"
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
          x="1337.44"
          y="1277.16"
          fontSize={40}
          className="cursor-pointer"
          id="Flooring"
          onClick={() => handlePolygonClick('Flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>
        {/* --------------Shower Enclosure---------- */}
        <polygon
          points="925,290,945,288,1081,533,1077,1169,934,1418,919,1418"
          fill={
            selectedPolygon.includes('Shower-Enclosure')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Shower-Enclosure')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="970.1666666666666"
          y="809.6666666666666"
          width="438.0788879394531"
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
          x="1035.1666666666665"
          y="852.6666666666666"
          fontSize={40}
          id="Shower-Enclosure"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Shower-Enclosure')}
          style={{ color: 'black' }}
        >
          Shower Enclosure
        </text>
        {/* -------Bathroom Vanity-------- */}
        <polygon
          points="1523,977,1469,977,1462,1178,1568,1234,1951,1230,1949,1033,1808,972,1800,974,1802,992,1791,1007,1769,1005,1776,989,1782,976,1717,974,1700,1009,1683,1018,1665,1026,1642,1024,1618,1026,1598,1022,1570,1018,1553,1007,1538,994"
          fill={
            selectedPolygon.includes('Bathroom Vanity')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Bathroom Vanity')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1674.0869565217392"
          y="985.7826086956522"
          width="412.3992614746094"
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
          y="1028.7826086956522"
          x="1739.0869565217392"
          fontSize={40}
          id="Bathroom Vanity"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Bathroom Vanity')}
          style={{ color: 'black' }}
        >
          Bathroom Vanity
        </text>
        {/* ------ Plumbing--------- */}
        <polygon
          points="55,925,430,886,427,1091,53,1223"
          fill={selectedPolygon.includes('Plumbing') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Plumbing')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="231.25"
          y="988.25"
          width="274.9938201904297"
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
          x="296.25"
          y="1031.25"
          fontSize={40}
          id="Plumbing"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Plumbing')}
          style={{ color: 'black' }}
        >
          Plumbing
        </text>
        {/* ----Walls Tiles------ */}
        <polygon
          points="42,169,696,515,923,520,923,630,873,628,871,604,837,589,828,591,819,600,813,611,795,613,776,621,778,628,791,621,804,624,811,624,826,628,832,634,834,637,837,630,828,619,821,613,832,602,843,600,860,608,867,619,867,639,871,725,873,823,873,845,841,842,845,851,858,851,856,868,804,873,798,881,795,896,811,896,813,881,852,879,845,903,860,905,865,886,873,877,888,881,888,864,869,868,867,851,888,849,886,840,880,840,878,801,873,667,871,628,923,630,917,1174,696,1171,687,1174,62,1550,57,1221,430,1091,430,888,412,890,393,890,367,892,345,894,324,896,302,896,282,899,265,901,252,903,235,905,222,907,200,907,183,909,168,912,150,914,131,914,114,918,92,918,77,918,64,922,51,925,53,907,51,888,51,864,51,845,51,823,51,808,49,788,49,769,49,751,49,732,49,710,49,691,47,671,44,647,44,630,47,611,44,591,42,567,42,550,44,531,44,509,42,489,42,463,42,444,44,424,44,405,42,379,44,355,44,331,42,312,42,290,44,253"
          fill={
            selectedPolygon.includes('Walls-Tiles') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls-Tiles')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1083,526,1821,537,1810,972,1800,974,1800,955,1784,957,1784,966,1765,961,1763,968,1782,970,1722,972,1707,968,1687,972,1663,970,1639,966,1639,957,1652,957,1661,957,1659,951,1648,944,1650,929,1670,927,1689,927,1711,927,1730,927,1771,927,1774,896,1780,643,1471,645,1471,925,1490,925,1605,927,1601,944,1601,953,1570,953,1583,957,1585,968,1525,964,1525,979,1468,979,1466,1167,1432,1165,1304,1167,1295,1152,1339,1089,1323,1091,1326,1000,1263,1000,1263,972,1285,970,1291,944,1233,946,1233,974,1265,972,1263,1000,1215,1000,1215,1085,1207,1091,1211,1107,1215,1122,1222,1139,1243,1150,1243,1169,1075,1167,1081,797,1178,801,1386,799,1386,641,1174,637,1178,801,1081,797"
          fill={
            selectedPolygon.includes('Walls-Tiles') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls-Tiles')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1821,535,2447,182,2449,1533,2323,1455,2343,481,1994,598,1968,1260,1947,1236,1971,730,1858,734,1856,806,1968,801,1958,1035,1951,1033,1810,974"
          fill={
            selectedPolygon.includes('Walls-Tiles') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Walls-Tiles')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="468.704347826087"
          y="702.6086956521739"
          width="277.5487976074219"
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
          x="533.704347826087"
          y="745.6086956521739"
          fontSize={40}
          id="Walls-Tiles"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Walls-Tiles')}
          style={{ color: 'black' }}
        >
          Walls Tiles
        </text>
        {/* -------------- UPVC Window ----------- */}
        <polygon
          points="1178,639,1391,641,1384,797,1181,799"
          fill={
            selectedPolygon.includes('UPVC Window') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1273.5"
          y="676"
          width="372.342529296875"
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
          y="719"
          x="1338.5"
          fontSize={40}
          id="UPVC Window"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('UPVC Window')}
          style={{ color: 'black' }}
        >
          UPVC Window
        </text>
        {/* --------door----------- */}
        <polygon
          points="1994,598,2341,481,2323,1459,1968,1252"
          fill={selectedPolygon.includes('Door') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Door')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="2146.5"
          y="904.5"
          width="191.37267303466797"
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
          x="2211.5"
          y="947.5"
          fontSize={40}
          id="Door"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Door')}
          style={{ color: 'black' }}
        >
          Door
        </text>
        {/* ----------sanitary and cp----------- */}
        <polygon
          points="1217,1003,1326,1000,1326,1087,1336,1096,1330,1115,1323,1135,1315,1143,1295,1154,1300,1169,1306,1182,1310,1193,1313,1204,1300,1206,1285,1208,1261,1208,1237,1202,1230,1195,1235,1180,1243,1165,1246,1154,1239,1145,1224,1139,1215,1126,1213,1111,1207,1098,1217,1087"
          fill={
            selectedPolygon.includes('Sanitary and CP')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sanitary and CP')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1527,968,1583,968,1583,955,1572,953,1594,951,1594,966,1601,966,1601,953,1603,935,1609,925,1620,925,1635,922,1646,927,1650,940,1646,946,1635,948,1631,940,1624,944,1620,955,1622,964,1631,966,1635,959,1644,953,1659,955,1655,957,1639,961,1637,968,1657,970,1674,968,1702,968,1717,970,1713,983,1704,996,1694,1007,1672,1016,1652,1020,1616,1022,1585,1024,1562,1013,1546,1003"
          fill={
            selectedPolygon.includes('Sanitary and CP')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sanitary and CP')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="780,628,795,621,808,621,821,626,832,632,834,637,832,619,819,611,828,602,839,600,856,608,865,611,867,634,867,656,867,676,867,710,873,845,834,845,841,849,845,851,860,851,858,868,826,868,811,870,798,879,795,896,800,896,811,894,813,881,834,879,852,877,847,888,849,907,860,907,860,886,871,879,888,879,886,866,862,866,867,851,888,849,878,836,873,600,834,587,813,608,793,611"
          fill={
            selectedPolygon.includes('Sanitary and CP')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sanitary and CP')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1237,951,1291,944,1285,974,1233,972"
          fill={
            selectedPolygon.includes('Sanitary and CP')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('Sanitary and CP')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1261.1153846153845"
          y="1099.5"
          width="403.6517333984375"
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
          x="1326.1153846153845"
          y="1142.5"
          fontSize={40}
          id="Sanitary and CP"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('Sanitary and CP')}
          style={{ color: 'black' }}
        >
          Sanitary and CP
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

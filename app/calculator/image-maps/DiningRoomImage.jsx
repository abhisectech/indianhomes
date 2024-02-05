'use client'

import React, { useState } from 'react'

const SvgMap = () => {
  const [selectedPolygon, setSelectedPolygon] = useState([])
  const [selectedPackage, setSelectedPackage] = useState('ultraLuxury'); // Default to premium
  const [spaceSquareFootage, setSpaceSquareFootage] = useState({}); // New state for square footage

  const pricing = {
    premium: {
      barUnit: { pricePerSqFt: 1250 },
      walls: { pricePerSqFt: 55 },
      upvcWindow: { pricePerSqFt: 800 },
      falseCeiling: { pricePerSqFt: 185 },
      electrical: { price: 5000 },
      crockeryUnit: { pricePerSqFt: 1300 },
      diningTableSet: { price: 50000 },
      flooring: { pricePerSqFt: 497 },
    },
    luxury: {
      barUnit: { pricePerSqFt: 1450 },
      walls: { pricePerSqFt: 65 },
      upvcWindow: { pricePerSqFt: 1100 },
      falseCeiling: { pricePerSqFt: 210 },
      electrical: { price: 13000 },
      crockeryUnit: { pricePerSqFt: 1600 },
      diningTableSet: { price: 85000 },
      flooring: { pricePerSqFt: 498 },
    },
    ultraLuxury: {
      barUnit: { pricePerSqFt: 1800 },
      walls: { pricePerSqFt: 90 },
      upvcWindow: { pricePerSqFt: 1500 },
      falseCeiling: { pricePerSqFt: 250 },
      electrical: { price: 18000 },
      crockeryUnit: { pricePerSqFt: 2000 },
      diningTableSet: { price: 150000 },
      flooring: { pricePerSqFt: 499 },
    },
  };

  const initialSquareFootage = {
    'falseCeiling': 185,
    'electrical': 13000,
    'flooring': 498,
    'upvcWindow': 1100,
    'walls': 65,
    'crockeryUnit': 50,
    'diningTableSet': 85000,
    'barUnit': 1450,
  };

  const handlePolygonClick = (polygonId) => {
    const isSelected = selectedPolygon.includes(polygonId)

    setSelectedPolygon((prevSelected) =>
      isSelected
        ? prevSelected.filter((id) => id !== polygonId)
        : [...prevSelected, polygonId]
    )
  }
  const handleSquareFootageChange = (polygonId, value) => {
    setSpaceSquareFootage((prevSquareFootage) => ({
      ...prevSquareFootage,
      [polygonId]: parseFloat(value) || 0,
    }));
  };

  const [editableSquareFootage, setEditableSquareFootage] = useState(initialSquareFootage);

  const calculateSpacePrice = (polygonId, selectedPackage) => {
    const pricePerSqFt = pricing[selectedPackage]?.[polygonId]?.pricePerSqFt || 0;
    const squareFootage = editableSquareFootage[polygonId] || 0;
    const calculatedPrice = pricePerSqFt * squareFootage;

    return calculatedPrice.toFixed(2);
  };

  const handleEditSquareFootage = (polygonId) => {
    const newSquareFootage = prompt(`Enter new square footage for ${polygonId}:`, editableSquareFootage[polygonId]);

    if (!isNaN(newSquareFootage) && newSquareFootage !== null) {
      const updatedSquareFootage = { ...editableSquareFootage, [polygonId]: parseFloat(newSquareFootage) };
      setEditableSquareFootage(updatedSquareFootage);
    }
  };

  const handleTabChange = (selectedTab) => {
    setSelectedPackage(selectedTab);
  };

  const renderTab = (tabName) => {
    const isActive = selectedPackage === tabName;

    return (
      <button
        key={tabName}
        onClick={() => handleTabChange(tabName)}
        className={`border px-4 py-3 text-base focus:outline-none rounded-lg ${isActive ? 'bg-green-500 text-white' : 'bg-white text-black'
          }`}
      >
        {tabName}
      </button>
    );
  };

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2856 1934"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/dining.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* false ceiling*/}
        <polygon
          points="319,58,1520,555,2522,227,2214,35,2110,15,983,5,892,0"
          fill={
            selectedPolygon.includes('falseCeiling') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('falseCeiling')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1498.5714285714287"
          y="84.85714285714286"
          width="339.6360778808594"
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
          x="1563.5714285714287"
          y="127.85714285714286"
          fontSize={40}
          id="falseCeiling"
          onClick={() => handlePolygonClick('falseCeiling')}
          className="cursor-pointer"
          style={{ color: 'black' }}
        >
          False Ceiling
        </text>

        {/* ------Electrical----------------- */}

        <polygon
          points="1555,759,1747,734,1745,812,1548,837"
          fill={
            selectedPolygon.includes('electrical') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('electrical')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1638.75"
          y="742.5"
          width="272.34413146972656"
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
          x="1703.75"
          y="785.5"
          fontSize={40}
          className="cursor-pointer"
          id="electrical"
          onClick={() => handlePolygonClick('electrical')}
          style={{ color: 'black' }}
        >
          Electrical
        </text>
        {/* ---Flooring---------- */}
        <polygon
          points="74,1309,105,1306,160,1374,491,1319,496,1281,582,1273,561,1553,576,1578,604,1571,614,1344,705,1397,677,1694,690,1705,713,1697,740,1399,801,1392,783,1515,801,1531,819,1526,829,1384,912,1374,902,1488,932,1503,927,1624,942,1642,965,1629,970,1523,1018,1546,1195,1503,1192,1677,1212,1692,1240,1674,1243,1495,1379,1473,1364,1793,1379,1813,1414,1795,1422,1470,1553,1440,1545,1586,1563,1596,1566,1720,1601,1737,1603,1425,1717,1402,1717,1647,1757,1654,1755,1402,1851,1372,1856,1594,1878,1604,1904,1586,1901,1304,2693,1417,2784,1346,2845,1359,2855,1931,82,1931"
          fill={selectedPolygon.includes('flooring') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('flooring')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1187.5"
          y="1490.0172413793102"
          width="252.8582305908203"
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
          x="1252.5"
          y="1533.0172413793102"
          fontSize={40}
          className="cursor-pointer"
          id="flooring"
          onClick={() => handlePolygonClick('flooring')}
          style={{ color: 'black' }}
        >
          Flooring
        </text>

        {/* -------------- UPVC Window ----------- */}
        <polygon
          points="862,492,1306,628,1293,1057,1288,1142,1164,1145,1167,1041,975,1041,978,1140,841,1140"
          fill={
            selectedPolygon.includes('upvcWindow') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('upvcWindow')}
          style={{ cursor: 'pointer' }}
        />
        <rect
          x="1087.111111111111"
          y="937.6666666666666"
          width="372.39862060546875"
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
          x="1152.111111111111"
          y="980.6666666666666"
          fontSize={40}
          id="upvcWindow"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('upvcWindow')}
          style={{ color: 'black' }}
        >
          UPVC Window
        </text>
        {/* -------------- Walls ----------- */}
        <polygon
          points="130,282,138,66,1311,517,1308,625,859,494,834,1155,922,1188,917,1248,738,1263,753,1011,738,996,599,1006,576,1268,496,1271,554,318,249,212"
          fill={selectedPolygon.includes('walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('walls')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="1518,598,2605,245,2698,406,2524,411,2529,971,2411,976,2413,888,2418,482,1883,618,1876,920,2411,888,2413,976,1694,988,1692,1067,1558,1059,1555,1092,1497,1084,1507,840,1550,842,1747,809,1752,729,1558,756,1550,842,1505,840"
          fill={selectedPolygon.includes('walls') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('walls')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="685.125"
          y="764.5"
          width="177.43875122070312"
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
          x="750.125"
          y="807.5"
          fontSize={40}
          id="walls"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('walls')}
          style={{ color: 'black' }}
        >
          Walls
        </text>
        {/* -------------- Crockery Unit ----------- */}
        <polygon
          points="2527,411,2693,411,2797,469,2784,1336,2688,1407,2527,1387"
          fill={
            selectedPolygon.includes('crockeryUnit') ? 'green' : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('crockeryUnit')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="2659.3333333333335"
          y="860.5"
          width="359.8287048339844"
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
          x="2724.3333333333335"
          y="903.5"
          fontSize={40}
          id="crockeryUnit"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('crockeryUnit')}
          style={{ color: 'black' }}
        >
          Crockery Unit
        </text>
        {/* -------------- Dining Table Set ----------- */}
        <polygon
          points="849,1145,978,1140,975,1044,1162,1046,1164,1140,1288,1147,1290,1062,1442,1057,1442,1087,1558,1092,1563,1064,1692,1067,1687,1150,1729,1157,1737,1104,1896,1097,1899,1584,1881,1599,1863,1591,1858,1369,1757,1404,1760,1644,1735,1652,1717,1647,1724,1404,1603,1420,1603,1727,1591,1735,1571,1722,1566,1594,1550,1594,1553,1437,1419,1468,1414,1793,1384,1803,1371,1788,1386,1460,1245,1490,1240,1672,1220,1687,1192,1677,1195,1498,1021,1546,975,1518,965,1629,942,1642,932,1621,935,1495,907,1475,910,1372,831,1384,819,1520,806,1531,788,1518,793,1392,735,1397,715,1692,693,1699,677,1689,705,1399,617,1339,604,1566,584,1576,564,1556,599,1006,751,999,740,1294,841,1288,912,1316,925,1183,844,1162"
          fill={
            selectedPolygon.includes('diningTableSet')
              ? 'green'
              : 'transparent'
          }
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('diningTableSet')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="1199.5633802816901"
          y="1377.5915492957747"
          width="407.68524169921875"
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
          x="1264.5633802816901"
          y="1420.5915492957747"
          fontSize={40}
          id="diningTableSet"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('diningTableSet')}
          style={{ color: 'black' }}
        >
          Dining Table Set
        </text>
        {/* -------------- Bar Unit ----------- */}
        <polygon
          points="132,285,246,214,551,320,493,1316,163,1377,110,1306,87,1304"
          fill={selectedPolygon.includes('barUnit') ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('barUnit')}
          style={{ cursor: 'pointer' }}
        />

        <rect
          x="244.57142857142858"
          y="831.5714285714286"
          width="251.84860229492188"
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
          x="309.57142857142856"
          y="874.5714285714286"
          fontSize={40}
          id="barUnit"
          className="cursor-pointer"
          onClick={() => handlePolygonClick('barUnit')}
          style={{ color: 'black' }}
        >
          Bar Unit
        </text>


        {/* -------------------------------------- */}
      </svg>
      <div className='flex justify-center text-3xl font-bold mt-4'>
        <h2>Select Your Packages</h2>
      </div>
      <div style={{ position: 'relative' }}>
        <div className="flex gap-32 justify-center mt-4">
          {renderTab('premium')}
          {renderTab('luxury')}
          {renderTab('ultraLuxury')}
        </div>
      </div>
      <div className='mt-8'>

        {selectedPolygon.map((polygon) => (
          <div className='flow-root' key={polygon} style={{
            border: '1px solid #000',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px',
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: 'white',
            marginTop: '10px',

          }}>
            <div className='float-left' >
              <span>{polygon} </span>
              {polygon === 'barUnit' || polygon === 'flooring' || polygon === 'walls' || polygon === 'crockeryUnit' || polygon == 'upvcWindow' || polygon === 'falseCeiling' || polygon === 'diningTableSet' ? (
                <span
                  style={{ cursor: 'pointer', fontSize: '12px' }}
                  onClick={() => handleEditSquareFootage(polygon)}
                >
                  ✏️ Edit
                </span>
              ) : null}
            </div>
            <div>

            </div>
            <div className='float-right'>
              {pricing[selectedPackage]?.[polygon]?.pricePerSqFt ? (

                <span style={{ color: 'green', fontSize: '20px' }}>₹{calculateSpacePrice(polygon, selectedPackage)}</span>
              ) : (
                <span style={{ color: 'green', fontSize: '20px' }}>₹{pricing[selectedPackage]?.[polygon]?.price.toFixed(2)}</span>
              )}
            </div>

          </div>


        ))}

      </div>

    </div>
  )
}

export default SvgMap

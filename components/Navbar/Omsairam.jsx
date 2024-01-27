"use client";
import React, { useRef, useEffect } from 'react';
import Marquee from "react-fast-marquee";
const Omsairam = () => {
  return (
    <div className="bg-black font-bold text-white" style={{ zIndex: '10000', position: 'fixed', width: '100%', top: 0 }}>
      <h1 className="text-center  text-white font-bold " style={{ fontSize: '8px' }}>ॐ साईं राम</h1>
      <Marquee
        className='text-xs' direction="left" speed={50} style={{ width: "100%", whiteSpace: "nowrap", height: '20px' }}
      >
        <div style={{ display: "inline-block" }}> 🙂 Largest Manufacturing Brand Across Noida - Delhi - NCR 🙂 Bring Us any Quote & Take Flat 7% Off.
          100% Guaranteed Quotes for all Modular Kitchens & Wardrobes.
        </div>
      </Marquee>
    </div>
  );
}

export default Omsairam;

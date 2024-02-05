  "use client";
  import React from 'react';
  import {useState} from 'react';
  import { useRouter } from 'next/navigation';
  import BedroomImage from './BedroomImage'
  import LivingandDiningImage from './LivingandDiningImage'
  import KitchenImage from './KitchenImage'
  import BathroomImage from './BathroomImage'
  import MandirRoomImage from './MandirRoomImage'
  import StoreRoomImage from './StoreRoomImage'
  import StudyRoomImage from './StudyRoomImage'
  import LivingRoomImage from './LivingRoomImage'
  import EntranceRoomImage from './EntranceRoomImage'
  import BalconyImage from './BalconyImage'
  import PassageImage from './PassageImage'
  import DiningRoom from './DiningRoomImage'
  import MaxWidthWrapper from '../../../components/MaxWidthWrapper'
  import { ArrowLeft } from 'lucide-react'
  const Page = () => {
    
      const router = useRouter();
      const { space } = router.query || {};
      const [selectedSpace, setSelectedSpace] = useState(space || 'Kitchen'); // Default to Bedroom if no space is provided
     
    
      const getImageComponent = () => {
        switch (selectedSpace) {
          case 'Bedroom':
            return <BedroomImage />;
          case 'Living and Dining':
            return <LivingandDiningImage />;
          case 'Kitchen':
            return <KitchenImage />;
          case 'Bathroom':
            return <BathroomImage />;
          case 'Mandir Room':
            return <MandirRoomImage />;
          case 'Store Room':
            return <StoreRoomImage />;
          case 'Study Room':
            return <StudyRoomImage />;
          case 'Living Room':
            return <LivingRoomImage />;
          case 'Entrance Room':
            return <EntranceRoomImage />;
          case 'Balcony':
            return <BalconyImage />;
          case 'Passage':
            return <PassageImage />;
          case 'DiningRoom':
            return <DiningRoom/>
          default:
            return null;
        }
      };
    
      const handleSpaceClick = (selectedSpace) => {
        setSelectedSpace(selectedSpace);
      };
    return (
      <>
        <MaxWidthWrapper>
          <div className="border-2 border-blue-500 rounded-lg bg-slate-200 shadow-lg p-0">
            <div className="bg-white p-4 flex items-center w-full rounded-t-lg shadow-lg">
              <button className="inline-flex items-center mr-4">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h3 className="inline text-lg">{selectedSpace}</h3>
            </div>
            <div className="p-4 m-4 bg-blue-500 flex justify-between rounded-lg shadow-lg text-white">
              <div>
                <p className="text-xs">Room budget</p>
                <h3>₹0</h3>
              </div>
              <div className="text-right">
                <p className="text-xs">Total budget</p>
                <h3>₹44,765</h3>
                <p className="text-xxs">
                  *All prices are inclusive of material and labour charges
                </p>
              </div>
            </div>
            <div className="m-4">
              <p>
                Tap the desired components and add to your project&apos;s scope
              </p>
            </div>

            {/* the image map */}
            {getImageComponent()}


            
            <div className="m-4">
              <p className="text-blue-500 text-xs">Disclaimer:</p>
              <p className="text-xs">
                Indicative rates based on market averages. Actual costs vary based
                on professional choice, measurements, materials, and additional
                charges like taxes, design fees, appliances, and site expenses.
              </p>
            </div>
            <div className="bg-white flex justify-center py-4 sm:px-12 w-full rounded-b-lg shadow-lg">
              <button className="text-lg shadow-md hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Save
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </>
    )
  }

  export default Page

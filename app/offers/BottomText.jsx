import React from 'react'

const BootomText = () => {
  return (
    <>
      <div className="mx-auto sm:my-16 my-4">
        <h3 className="text-2xl text-center">
          Buy Direct from Company &{' '}
          <span className="font-semibold">Save 30%</span>
        </h3>
        <p className="text-sm mt-4">
          DIH interior packages and offers are not limited to better factory
          price. Our commitment is for the wholehearted efforts to design,
          produce and implement suitable interior furnishing to match your
          dream. The whole team is trained and qualified to execute the order.
          We work on the selected home interior package, and customize it
          further as per client requirements. Because, each customer has unique
          needs, therefore, each of them requires custom designs for home
          interior. For example, there are situations where you like the overall
          home interior package, but do not want a particular item from the
          package. In situations like this, customization provides an option to
          remove the item from the package and select one that is more suitable
          for your needs. Likewise, changes and additions are possible as per
          measurement by paying extra charges. We will make it to fit your
          budget. Let us discuss and proceed towards making it happen the best
          possible way.
        </p>

        <div className="mt-12 sm:flex sm:justify-around items-center grid grid-cols-2 ml-8 gap-4 justify-center">
          <div className="w-32 h-32 border-2 border-gray-300 hover:border-none flex flex-col justify-center items-center gap-1 hover:bg-green-400 hover:text-white rounded-full p-4">
            <p className="text-sm font-semibold">100%</p>
            <p className="text-xs ">Customized</p>
          </div>
          <div className="w-32 h-32 border-2 border-gray-300 hover:border-none flex flex-col justify-center items-center gap-1 hover:bg-green-400 hover:text-white rounded-full p-4">
            <p className="text-sm font-semibold">Premium</p>
            <p className="text-xs ">Quality</p>
          </div>
          <div className="w-32 h-32 border-2 border-gray-300 hover:border-none flex flex-col justify-center items-center gap-1 hover:bg-green-400 hover:text-white rounded-full p-4">
            <p className="text-sm font-semibold">On-Time</p>
            <p className="text-xs ">Delivery</p>
          </div>
          <div className="w-32 h-32 border-2 border-gray-300 hover:border-none flex flex-col justify-center items-center gap-1 hover:bg-green-400 hover:text-white rounded-full p-4">
            <p className="text-sm font-semibold">Life-Time</p>
            <p className="text-xs ">Service</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BootomText

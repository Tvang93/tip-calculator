import React from "react";

const CalculatorComponent = () => {
  return (
    <>


      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div className="grow">
            <h2 className="text-start">Bill</h2>
            <input type="text" className="border-2 w-[100%]"/>
          </div>
          <div>
            <h2 className="text-start">Select Tip %</h2>
            <div className="grid grid-cols-3 gap-3">
            <button className="border-2">5%</button>
            <button className="border-2">10%</button>
            <button className="border-2">15%</button>
            <button className="border-2">20%</button>
            <button className="border-2">25%</button>
            <button className="border-2">Custom</button>
            </div>
          </div>
          <div>
            <h2 className="text-start">Number of People</h2>
            <input type="text" className="border-2 w-[100%]"/>
          </div>
        </div>


        <div className="bg-Verydarkcyan rounded-md flex flex-col justify-between p-5">
          <div>
            <div className="flex justify-between items-center">
              <div className="">
                <h2 className="text-start">Tip Amount</h2>
                <h3 className="text-start">/ person</h3>
              </div>
              <h1>$0.00</h1>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-start">Total</h2>
                <h3 className="text-start">/ person</h3>
              </div>
              <h1>$0.00</h1>
            </div>
          </div>
          <div className="">
            <button className="border-2 w-[100%]">reset</button>
          </div>
        </div>
      </div>


    </>
  );
};

export default CalculatorComponent;

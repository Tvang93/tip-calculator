import React from "react";

const CalculatorComponent = () => {
  return (
    <>


      <div className="grid lg:grid-cols-2 gap-4">
        <div className="text-Darkgrayishcyan">
          <div className="mb-4">
            <h2 className="text-start mb-2">Bill</h2>
            <input type="text" className="w-[100%] bg-Verylightgrayishcyan bg-[url:(../images/icon-dollar.svg)] py-2 px-4 text-end rounded-md" placeholder="0" src="../images/icon-dollar.svg" />
          </div>
          <div className="mb-4">
            <h2 className="text-start mb-2">Select Tip %</h2>
            <div className="grid grid-cols-3 gap-3">
              <button className="px-6 py-2 bg-Verydarkcyan rounded-md text-White">5%</button>
              <button className="px-6 py-2 bg-Verydarkcyan rounded-md text-White">10%</button>
              <button className="px-6 py-2 bg-Verydarkcyan rounded-md text-White">15%</button>
              <button className="px-6 py-2 bg-Verydarkcyan rounded-md text-White">20%</button>
              <button className="px-6 py-2 bg-Verydarkcyan rounded-md text-White">25%</button>
              <input type="text" className="w-[100%] bg-Verylightgrayishcyan px-6 text-end" placeholder="Custom"/>
            </div>
          </div>
          <div>
            <h2 className="text-start mb-2">Number of People</h2>
            <input type="text" className="w-[100%] bg-Verylightgrayishcyan py-2 px-4 text-end rounded-md" placeholder="0"/>
          </div>
        </div>


        <div className="bg-Verydarkcyan rounded-lg flex flex-col justify-between p-5">
          <div>
            <div className="flex justify-between items-center">
              <div className="">
                <h2 className="text-start text-White">Tip Amount</h2>
                <h3 className="text-start text-Grayishcyan">/ person</h3>
              </div>
              <h1 className="text-4xl text-green-500">$0.00</h1>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-start text-White">Total</h2>
                <h3 className="text-start text-Grayishcyan">/ person</h3>
              </div>
              <h1 className="text-4xl text-green-500">$0.00</h1>
            </div>
          </div>
          <div className="">
            <button className="w-[100%] rounded-md bg-green-500 text-Verydarkcyan">reset</button>
          </div>
        </div>
      </div>


    </>
  );
};

export default CalculatorComponent;

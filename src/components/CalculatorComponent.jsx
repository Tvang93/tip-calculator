import React, { useEffect, useState } from "react";

const CalculatorComponent = () => {
  const [bill, setBill] = useState(0);
  const [numofPeople, setnumofpeople] = useState(0);
  const [customPercent, setCustomPervcent] = useState(0);
  const [tipPercent, setTipPercent] = useState(0.00);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect(()=>{
  //   console.log(bill)
  //   console.log(typeof tip)
  //   let test = parseInt(tip)
  //   let addedAmount = Number(bill + (bill*test)
  //   console.log(addedAmount)
  //   setTotal(addedAmount)
  // }, [bill, tip])

  useEffect(()=>{
    setTip((tipPercent/100).toFixed(2));
  }, [tipPercent])

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="text-Darkgrayishcyan">
          <div className="mb-4">
            <h2 className="text-start mb-2">Bill</h2>
            <input
              type="number"
              className="w-[100%] bg-Verylightgrayishcyan bg-[url:(../images/icon-dollar.svg)] py-2 px-4 text-end rounded-md"
              placeholder="0"
              src="../images/icon-dollar.svg"
              onChange={(e)=>{setBill(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <h2 className="text-start mb-2">Select Tip %</h2>
            <div className="grid grid-cols-3 gap-3">
            <button 
              className="px-6 py-2 bg-Verydarkcyan rounded-md text-White"
              onClick={()=>{setTipPercent(5)}}
              >
                5%
              </button>
              <button 
              className="px-6 py-2 bg-Verydarkcyan rounded-md text-White"
              onClick={()=>{setTipPercent(10)}}
              >
                10%
              </button>
              <button 
              className="px-6 py-2 bg-Verydarkcyan rounded-md text-White"
              onClick={()=>{setTipPercent(15)}}
              >
                15%
              </button>
              <button 
              className="px-6 py-2 bg-Verydarkcyan rounded-md text-White"
              onClick={()=>{setTipPercent(20)}}
              >
                20%
              </button>
              <button 
              className="px-6 py-2 bg-Verydarkcyan rounded-md text-White"
              onClick={()=>{setTipPercent(25)}}
              >
                25%
              </button>
              <input
                type="text"
                className="bg-Verylightgrayishcyan px-6 text-end grow-0"
                placeholder="Custom"
              />
            </div>
          </div>
          <div>
            <h2 className="text-start mb-2">Number of People</h2>
            <input
              type="number"
              className="w-[100%] bg-Verylightgrayishcyan py-2 px-4 text-end rounded-md"
              placeholder="0"
            />
          </div>
        </div>

        <div className="bg-Verydarkcyan rounded-lg flex flex-col justify-between p-5">
          <div>
            <div className="flex justify-between items-center">
              <div className="">
                <h2 className="text-start text-White">Tip Amount</h2>
                <h3 className="text-start text-Grayishcyan">/ person</h3>
              </div>
              <h1 className="text-4xl text-green-500">${(bill*tip).toFixed(2)}</h1>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-start text-White">Total</h2>
                <h3 className="text-start text-Grayishcyan">/ person</h3>
              </div>
              <h1 className="text-4xl text-green-500">${(Number(bill)*(1+Number(tip))).toFixed(2)}</h1>
            </div>
          </div>
          <div className="">
            <button className="w-[100%] rounded-md bg-green-500 text-Verydarkcyan">
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorComponent;

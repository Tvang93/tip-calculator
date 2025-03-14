import React, { useEffect, useState } from "react";
import TipButtonComponent from "./TipButtonComponent";
import "../App.css";

const CalculatorComponent = () => {
  const [bill, setBill] = useState(0);
  const [numofPeople, setNumOfPeople] = useState(1);
  const [customPercent, setCustomPercent] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [tip, setTip] = useState(0);
  const [isReset, setIsReset] = useState(true)

  useEffect(() => {
    setTip((tipPercent / 100).toFixed(2));
  }, [tipPercent]);

  useEffect(() => {
    setTipPercent((Number(customPercent)))
  }, [customPercent]);

  const tipArr = [5, 10, 15, 20, 25];

  return (
    <>
      <form className="grid lg:grid-cols-2 gap-4 font-[SpaceMono] font-bold">
        <div className="text-Darkgrayishcyan p-2 lg:p-4">
          <div className="mb-8 text-start">
            <label htmlFor="billField" className="">
              Bill
            </label>
            <div className="relative flex mt-2">
              <img
                className="absolute self-center pl-4"
                src="./images/icon-dollar.svg"
                alt="dollar icon"
              />
              <input
                id="billField"
                type="number"
                className={`w-[100%] bg-Verylightgrayishcyan bg-[url:(../images/icon-dollar.svg)] py-2 px-4 text-end rounded-md text-2xl hover:cursor-pointer focus:outline-Strongcyan`}
                placeholder="0"
                src="../images/icon-dollar.svg"
                onChange={(e) => {setBill(Number(e.target.value)), setIsReset(false) }}
              />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-start mb-2">Select Tip %</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {tipArr.map((num, idx) => (
                <TipButtonComponent
                  customPercent={customPercent}
                  tipPercent={tipPercent}
                  key={idx}
                  num={num}
                  onClick={() => {
                    setTipPercent(num),
                    setCustomPercent(''),
                    setIsReset(false)
                  }}
                />
              ))}
              <input
                id="customTipField"
                type="text"
                className="bg-Verylightgrayishcyan text-center focus:pr-4 focus:text-end focus:outline-Strongcyan hover:cursor-pointer rounded-md text-2xl lg:w-[120px]"
                placeholder="Custom"
                value={customPercent}
                onChange={(e) => {setCustomPercent(e.target.value), setIsReset(false)}}
              />
            </div>
          </div>
          <div className="mb-4 lg:mb-0">
            <label
              htmlFor="numberOfPeopleField"
              className="flex justify-between"
            >
              <h2 className="text-start mb-2">Number of People</h2>
              <h2
                className={`${
                  numofPeople == 0 ? "block" : "hidden"
                } text-red-500`}
              >
                Can't be zero
              </h2>
            </label>
            <div className="relative flex">
              <img
                className="absolute self-center pl-4"
                src="./images/icon-person.svg"
                alt="person icon"
              />
              <input
                id="numberOfPeopleField"
                type="number"
                className={`w-[100%] bg-Verylightgrayishcyan py-2 px-4 text-end rounded-md text-2xl hover:cursor-pointer ${
                  numofPeople == 0
                    ? `focus:outline-red-500`
                    : `focus:outline-Strongcyan`
                }`}
                placeholder="0"
                onChange={(e) => {
                  setNumOfPeople(Number(e.target.value)),
                  setIsReset(false)
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-Verydarkcyan rounded-lg flex flex-col justify-between p-6 lg:p-10">
          <div>
            <div className="flex justify-between items-center my-4">
              <div className="">
                <h2 className="text-start text-White">Tip Amount</h2>
                <h3 className="text-start text-Grayishcyan">/ person</h3>
              </div>
              <h1 className="text-4xl text-Strongcyan">
                ${((bill * tip) / numofPeople).toFixed(2)}
              </h1>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div>
                <h2 className="text-start text-White">Total</h2>
                <h3 className="text-start text-Grayishcyan">/ person</h3>
              </div>
              <h1 className="text-4xl text-Strongcyan">
                ${((bill * (1 + Number(tip))) / numofPeople).toFixed(2)}
              </h1>
            </div>
          </div>
          <div>
            <button
              type="reset"
              className={`w-[100%] rounded-md bg-Strongcyan text-Verydarkcyan h-12 mt-8 text-xl font-black  ${isReset ? `brightness-50 hover:cursor-default` : `hover:brightness-125`}`}
              onClick={() => {
                if(!isReset){
                  setBill(0), setCustomPercent(0), setNumOfPeople(1), setTipPercent(0), setIsReset(true) ;
                }
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CalculatorComponent;

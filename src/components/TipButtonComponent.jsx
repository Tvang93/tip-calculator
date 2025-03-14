import React from "react";

const TipButtonComponent = (props) => {
  return (
    <>
      <button
        type="button"
        className="px-6 py-2 bg-Verydarkcyan rounded-md text-White hover:cursor-pointer hover:bg-Strongcyan hover:text-Verydarkcyan hover:brightness-125 focus:bg-Strongcyan focus:text-Verydarkcyan text-2xl"
        onClick={props.onClick}
      >
        {props.num}%
      </button>
    </>
  );
};

export default TipButtonComponent;

import React from "react";

const TipButtonComponent = (props) => {
  const isActive = props.tipPercent == props.num && props.customPercent != props.num

  return (
    <>
      <button
        type="reset"
        className={`px-6 py-2  hover:cursor-pointer rounded-md hover:bg-Strongcyan hover:text-Verydarkcyan hover:brightness-125 text-2xl ${!isActive ? `bg-Verydarkcyan  text-White` : `bg-Strongcyan text-Verydarkcyan`}`}
        onClick={props.onClick}
      >
        {props.num}%
      </button>
    </>
  );
};

export default TipButtonComponent;

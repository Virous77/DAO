import React from "react";

const Content = () => {
  return (
    <div>
      <h1 className=" text-2xl underline underline-offset-4 tracking-wide">
        DAO Dashboard
      </h1>

      <div className=" mt-6 shadow w-fit py-2 px-4 rounded-md">
        <div className=" flex items-center gap-3">
          <span className=" text-[14px]">Current DAO Balance :</span>
          <b>0 ETH</b>
        </div>
        <div className=" flex items-center gap-3">
          <span className=" text-[14px]">Your Contribution :</span>
          <b>0 ETH</b>
        </div>
      </div>
    </div>
  );
};

export default Content;

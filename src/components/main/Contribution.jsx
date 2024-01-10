import React, { useState } from "react";
import toast from "react-hot-toast";

const Contribution = () => {
  const [amount, setAmount] = useState({
    amount: null,
    loading: false,
  });

  const handleContribution = () => {
    if (+amount.amount === 0 || amount.amount === null) {
      return toast.error("Please enter a valid amount");
    }

    // setAmount({ ...amount, loading: true });
  };

  return (
    <div className=" text-xl underline underline-offset-4">
      <h1>Contribute Today</h1>

      <div className=" mt-6 p-2">
        <form onSubmit={(e) => e.preventDefault()} className=" w-full">
          <fieldset className=" w-full mb-2">
            <input
              type="number"
              placeholder="Enter ETH Amount"
              className=" w-full border-2 border-gray-300 rounded-md p-2 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              value={amount.amount}
              onChange={(e) => setAmount({ ...amount, amount: e.target.value })}
            />
          </fieldset>

          <button
            className=" bg-primary text-secondary rounded-sm py-2 px-6 text-[14px] hover:opacity-90"
            onClick={handleContribution}
          >
            Contribute
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contribution;

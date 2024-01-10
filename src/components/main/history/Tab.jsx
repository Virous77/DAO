import React, { useState } from "react";

const Tab = () => {
  const [tab, setTab] = useState("Open");
  return (
    <div>
      <ul className=" flex items-center gap-2 bg-primary rounded shadow w-fit">
        {["All", "Open", "Closed"].map((item) => (
          <li
            className={`text-center  w-[70px] p-2  rounded cursor-pointer hover:bg-primary hover:text-secondary ${
              tab === item
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } `}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;

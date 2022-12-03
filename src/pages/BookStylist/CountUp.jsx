import React from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpComponent = ({ id, endNumb, suffix, item }) => {
  useCountUp({
    ref: `counter${id}`,
    end: endNumb,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    suffix: suffix || "",
  });

  return (
    <div>
      <div className="text-6xl">
        <CountUp
          end={endNumb}
          enableScrollSpy
          scrollSpyOnce
          suffix={suffix || ""}
        />
      </div>
      <p id="counter" className="text-lg mt-4">
        {item}
      </p>
    </div>
  );
};

export default CountUpComponent;

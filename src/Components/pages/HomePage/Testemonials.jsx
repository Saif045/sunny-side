import React from "react";
import { thomas, emily, jennie, testemonials } from "../../data";
import { useState } from "react";

const Testemonials = () => {
  const [data, setData] = useState(testemonials);
  return (
    <div className="">
      <div className="p-6 xs:p-14 sm:p-10 md:p-20 lg:p-40">
        <div className="text-gray-500 font-semibold text-center mb-10">
          CLIENT TESTEMONIALS
        </div>

        <div className="grid sm:grid-cols-3 gap-16 sm:gap-6 ">
          <div className="flex flex-col  items-center ">
            <img
              className="w-10 sm:w-16 object-cover rounded-full "
              src={emily}
            />
            <p className="text-center my-6">{data.emily.text}</p>
            <p className=" font-bold">{data.emily.name}</p>
            <p>{data.emily.title}</p>
          </div>

          <div className="flex flex-col  items-center ">
            <img
              className="w-10 sm:w-16 object-cover rounded-full "
              src={thomas}
            />
            <p className="text-center my-6">{data.thomas.text}</p>
            <p className=" font-bold">{data.thomas.name}</p>
            <p>{data.thomas.title}</p>
          </div>

          <div className="flex flex-col  items-center ">
            <img
              className="w-10 sm:w-16 object-cover rounded-full "
              src={jennie}
            />
            <p className="text-center my-6">{data.jennie.text}</p>
            <p className=" font-bold"> {data.jennie.name}</p>
            <p>{data.jennie.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;

import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/Context";

function Donate() {
  const [amount, setAmount] = useState(0);

  const { sendTransaction } = useContext(Context);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  return (
    <div className="flex flex-col bg-[#280040] md:w-1/3 w-full rounded-2xl p-10 z-20 md:text-xl text-md text- space-y-8">
      <div className="text-bold text-center">DONATE</div>
      <div className="text-left my-4">
        Give me some <span className="text-[#88F4FF]">sip</span>
      </div>
      <div className="bg-[#635AD9]/20 border-[#F4F4F4] border-2 h-12 rounded-md flex items-center px-4 space-x-4 ">
        <FontAwesomeIcon icon={faGlassWhiskey} className="h-8" />
        <input
          type="number"
          placeholder="X "
          className="outline-none border-none bg-[#635AD9]/0"
          // value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <input
        className="px-2 bg-[#7338AC]/40  border-[#F4F4F4] outline-none border-2 h-12 rounded-md"
        type="text"
        placeholder="Name or username (optional)"
      />
      <input
        className="px-2 bg-[#7338AC]/40  border-[#F4F4F4] outline-none border-2 h-24 rounded-md"
        type="text"
        placeholder="Write your opinion (optional)"
      />
      <button
        type="button"
        className="h-12 bg-[#2C1250] text-white font-medium md:text-xl text-lg leading-tight md:border-2 border-1 border-[#693B93] rounded shadow-md hover:bg-[#693B93] hover:shadow-lg transition duration-150 ease-in-out "
        onClick={() => sendTransaction(amount)}
      >
        <div className=" flex justify-center items-center space-x-4">
          <FontAwesomeIcon icon={faHeart} className="h-6 w-6 fa-heart-o" />
          <span>Support</span>
        </div>
      </button>
    </div>
  );
}

export default Donate;

import React from "react";

const FormFreePass = () => {
  return (
    <>
      <div className="w-full h-[35%]  flex flex-col text-white  px-10 mt-5">
        <label htmlFor="">First name</label>
        <input className=" py-2 rounded-lg px-3 text-black" type="text" />
        <label htmlFor="">Last name</label>
        <input className=" py-2 rounded-lg px-3 text-black" type="text" />
        <label htmlFor="">Email</label>
        <input className=" py-2 rounded-lg px-3 text-black" type="email" />
        <label htmlFor="">Cell Phone</label>
        <input className="text-black px-3 py-2 rounded-lg" type="number" />
      </div>
      <div className="w-[50%] m-auto text-center  bg-[#00FB00] hover:bg-black hover:text-white transition duration-300  rounded-lg">
        <button className="text-[1.1vw] px-6 py-3 font-bold ">Submit</button>
      </div>
    </>
  );
};

export default FormFreePass;

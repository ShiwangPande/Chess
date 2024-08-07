import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

function Landing() {
    const navigate = useNavigate();
  return (
    <div className="  flex justify-center">
        <div className="pt-8 max-w-screen-lg">
      <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 p-5 mx-auto">
        <div className="flex justify-center">
          <img className="max-w-[30rem]"  src={"/standardboard.png"} alt="" />
        </div>
        <div className="mx-10">
          <h1 className="text-5xl my-4 text-center text-white font-bold">Play Chess Online on the #1 Site!
          </h1>
          {/* <p className="text-lg text-white mt-2">Play Chess Online on the #2 Site!</p> */}
          <div className="mt-6 mx-5 flex justify-center">
            <Button onClick={()=>{navigate('./game')}} >
            <img className="w-16" src={"./playwhite.svg"} alt="" />
            <div className="flex flex-col">
            <h1 className="text-white text-3xl font-bold">Play Online</h1>
        <span className="mt-1 text-sm font-thin">
          Play with someone at your level
        </span>
        </div> </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Landing;

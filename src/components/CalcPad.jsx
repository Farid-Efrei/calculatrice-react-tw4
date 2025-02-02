import React from "react";

export default function CalcPad({ onButtonClick }) {
  const handleClick = (e) => {
    // alert(e.target.value);
    onButtonClick(e.target.value);
  };
  return (
    <div>
      <form className=" ">
        <div className="justify-between flex gap-1 shadow mb-1  h-14 text-2xl rounded-lg font-bold">
          <input
            type="button"
            value="CE"
            onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg hover:bg-gray-400"
          />
          <input
            type="button"
            value="+/-"
            // onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="◀️"
            onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="/"
            onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg  hover:bg-gray-400 text-3xl"
          />
        </div>
        <div className="justify-between flex gap-1 shadow mb-1  h-14 text-2xl rounded-lg font-bold">
          <input
            type="button"
            value="7"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="8"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="9"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="*"
            onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg  hover:bg-gray-400 text-3xl"
          />
        </div>
        <div className="justify-between flex gap-1 shadow mb-1  h-14 text-2xl rounded-lg font-bold">
          <input
            type="button"
            onClick={handleClick}
            value="4"
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            onClick={handleClick}
            value="5"
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="6"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400 "
          />
          <input
            type="button"
            value="-"
            onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg  hover:bg-gray-400 text-4xl"
          />
        </div>
        <div className="justify-between flex gap-1 shadow mb-1  h-14 text-2xl rounded-lg font-bold">
          <input
            type="button"
            value="1"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="2"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="3"
            onClick={handleClick}
            className="w-full border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="+"
            onClick={handleClick}
            className="w-full border-1  bg-gray-800 border-black rounded-lg  hover:bg-gray-400 text-3xl"
          />
        </div>
        <div className="justify-between flex gap-1 shadow mb-1  h-14 text-2xl rounded-lg font-bold">
          <input
            type="button"
            value="0"
            onClick={handleClick}
            className=" w-1/4 border-1  bg-gray-600 border-black rounded-lg  hover:bg-gray-400"
          />
          <input
            type="button"
            value="."
            onClick={handleClick}
            className=" w-1/4  bg-gray-600 border-black rounded-lg border-1  hover:bg-gray-400"
          />
          <input
            type="button"
            value="="
            onClick={handleClick}
            className=" w-2/4 bg-amber-400 text-black border-black rounded-lg hover:bg-amber-600"
          />
        </div>
      </form>
    </div>
  );
}

// import React, { useEffect, useState } from 'react'

const RandomFood = ({ randomFood, designClass }) => {
  return (
    <div
      className={` flex justify-between ${designClass} basis-1 my-4  border drop-shadow-md  rounded-lg bg-whiteBackground`}
    >
      <div className="flex flex-col  justify-center px-6 py-5 w-[650px]">
        <h1 className="text-3xl text-start">{randomFood.name}</h1>
        <p className="text-sm text-textSecondColor pt-4">{randomFood.about}</p>
      </div>
      <div className="basis-1/2">
        <img
          src={randomFood.img}
          alt={randomFood.name}
          className={`object-cover h-full ${designClass}`}
        />
      </div>
    </div>
  );
};

export default RandomFood;

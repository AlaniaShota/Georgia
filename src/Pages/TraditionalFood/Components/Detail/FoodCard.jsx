import { useState } from "react";
import { Button } from "../../../../Components";

export const FoodCard = ({ foods, openModal, categoryFilter }) => {
  const loadMoreContentCount = 15;
  const [next, setNext] = useState(loadMoreContentCount);

  const displayedTraditionalFood = categoryFilter
    ? foods.filter((item) => item.type === categoryFilter)
    : foods;

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-7 my-20">
        {displayedTraditionalFood.slice(0, next).map((item) => (
          <div
            key={item.id}
            className="border drop-shadow-lg rounded-md bg-white"
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.name}
              className="object-cover rounded-t-md w-full h-52"
            />
            <div className="grid grid-cols-3  p-4">
              <div className="col-span-2">
                <h1 className="text-lg font-semibold">{item.name}</h1>
                {item.location ? (
                  <p className="font-light">{item.location}</p>
                ) : (
                  <p className="font-light">Most iconic:</p>
                )}
              </div>
              <div className="flex justify-end items-end mt-6">
                <Button border onClick={() => openModal(item.id)}>
                  <span className="font-medium text-darkBlueText">
                    SEE MORE
                  </span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {categoryFilter ? null : (
        <div className="flex justify-center items-center my-10">
          {next < foods?.length && (
            <Button border onClick={handleMoreItem}>
              <span className=" text-md text-darkBlueText">LOAD MORE</span>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

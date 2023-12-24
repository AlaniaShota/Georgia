import { useState } from "react";
import { Button } from "../../../Components/Button";
import { Link } from "react-router-dom";

export const HotelCard = ({ data, categoryFilter }) => {
  const loadMoreContentCount = 6;
  const [next, setNext] = useState(loadMoreContentCount);

  const displayedHotel = categoryFilter
    ? data.filter((item) => item.type === categoryFilter)
    : data;

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-7 my-20">
        {displayedHotel.slice(0, next).map((item) => (
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
              <div className="flex flex-col  items-end -my-1">
                <Link to={`/hotel/${item.id}`}>
                  <Button>
                    <span className=" text-darkBlueText font-bold">
                      REVERSE
                    </span>
                  </Button>
                </Link>
                <Link to={`/location/${item.link}`} target="_blank">
                  <Button>
                    <span className=" text-darkBlueText font-bold">
                      LOCATION
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {categoryFilter ? null : (
        <div className="flex justify-center items-center my-10">
          {next < data?.length && (
            <Button border onClick={handleMoreItem}>
              <span className=" text-md text-darkBlueText">LOAD MORE</span>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

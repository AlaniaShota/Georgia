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
      <div className="grid grid-cols-3 gap-7 min-2xl:gap-9 my-20">
        {displayedHotel.slice(0, next).map((item) => (
          <div
            key={item.id}
            className="border drop-shadow-lg rounded-md bg-white"
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.name}
              className="object-cover rounded-t-md w-full h-52 min-2xl:h-64"
            />
            <div className="grid grid-cols-3 p-4">
              <div className="col-span-3">
                <h1 className="lg:text-lg min-2xl:text-2xl sm:text-base font-semibold">
                  {item.name}
                </h1>
                <p className="lg:text-base min-2xl:text-xl sm:text-xs font-light py-2">
                  {item.location}
                </p>
              </div>
              <div className="col-span-3 ">
                <Link to={`/hotel/${item.id}`}>
                  <Button>
                    <span className="min-2xl:text-2xl min-2xl:font-semibold text-darkBlueText font-bold">
                      REVERSE
                    </span>
                  </Button>
                </Link>
                <Link
                  to={`/location/${item.link}`}
                  target="_blank"
                  className="ml-2"
                >
                  <Button>
                    <span className="min-2xl:text-2xl min-2xl:font-semibold text-darkBlueText font-bold">
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
              <span className="min-2xl:text-2xl text-md text-darkBlueText">
                LOAD MORE
              </span>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

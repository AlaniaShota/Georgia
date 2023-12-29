import { useState } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Card = ({ data, title, description }) => {
  const loadMoreContentCount = 3;

  const [next, setNext] = useState(loadMoreContentCount);

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  return (
    <>
      <div className="flex flex-col my-20 ">
        <h1 className="lg:text-3xl sm:text-lg font-semibold ">{title}</h1>
        <p className="lg:text-lg sm:text-base font-light py-3 ">
          {description}
        </p>
        <div className="grid grid-cols-3 lg:gap-16 sm:gap-5 mt-5">
          {data.slice(0, next).map((item) => (
            <div
              key={item.id}
              className="flex flex-col border drop-shadow-lg rounded-md !bg-white"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="rounded-t-md object-cover w-full lg:h-52 sm:h-36"
              />
              <div className="grid grid-cols-3 lg:p-4 sm:p-2 ">
                <div className="lg:col-span-2 sm:col-span-3">
                  {item.name ? (
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                  ) : null}
                  <p className="text-xs  text-BlackSecondColor font-light">
                    {item.location}
                  </p>
                </div>
                <div className=" col-span-1">
                  {item.visit ? (
                    <Link
                      to={item.visit}
                      target="_blank"
                      className="flex justify-end items-end lg:mt-6 sm:mt-1"
                    >
                      <Button>
                        <span className="text-darkBlueText font-medium">
                          WEBSITE
                        </span>
                      </Button>
                    </Link>
                  ) : null}
                  {item.status ? (
                    <Link
                      to={`/tour-guide/${item.id}`}
                      className="flex justify-end items-end my-1"
                    >
                      <Button>
                        <span className=" text-darkBlueText font-medium">
                          CONTACT
                        </span>
                      </Button>
                    </Link>
                  ) : null}
                  {item.link ? (
                    <div className="flex lg:flex-col sm:flex-row  items-end -my-1">
                      <Link to={`/hotel/${item.id}`}>
                        <Button>
                          <span className=" text-darkBlueText font-bold sm:pr-2 lg:pr-0">
                            Reverse
                          </span>
                        </Button>
                      </Link>
                      <Link to={`/location/${item.link}`} target="_blank">
                        <Button>
                          <span className=" text-darkBlueText font-bold">
                            Location
                          </span>
                        </Button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          {next < data?.length && (
            <Button border onClick={handleMoreItem}>
              <span className=" text-md text-darkBlueText ">LOAD MORE</span>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

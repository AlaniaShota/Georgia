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
      <div className="flex flex-col my-20">
        <h1 className="text-3xl font-semibold ">{title}</h1>
        <p className="text-lg font-light py-3 ">{description}</p>
        <div className="grid grid-cols-3 gap-16 mt-5">
          {data.slice(0, next).map((item) => (
            <div
              key={item.id}
              className="flex flex-col border drop-shadow-lg rounded-md !bg-white"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="rounded-t-md object-cover w-full h-52"
              />
              <div className="grid grid-cols-3  p-4">
                <div className="col-span-2">
                  {item.name ? (
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                  ) : null}
                  <p className="text-xs  text-BlackSecondColor font-light">
                    {item.location}
                  </p>
                  {item.first_name ? (
                    <h1 className="text-lg font-semibold">{item.first_name}</h1>
                  ) : null}
                </div>
                <div className=" col-span-1 items-center">
                  {item.visit ? (
                    <Link
                      to={item.visit}
                      target="_blank"
                      className="flex justify-end items-end mt-6"
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

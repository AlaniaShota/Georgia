import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "./../../Components/Header";
import { Button } from "../../Components";
import { UsersComments } from "../../Components/User/index";

export const Detail = () => {
  const [hotel, setHotel] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/hotels/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHotel(data.hotels));
  }, [params.id]);

  return (
    <>
      <Header titlePage={hotel.name} titleText={hotel.name} img={hotel.img} />
      <div className="m-auto w-10/12 my-20 min-2xl:w-9/12">
        <div className="flex flex-col items-start my-5 min-2xl:my-10">
          <h1 className="text-3xl min-2xl:text-4xl font-bold">{hotel.name}</h1>
          <p className="text-lg min-2xl:text-2xl font-medium mt-2">
            {hotel.location}
          </p>
          <h3 className="text-lg min-2xl:text-2xl font-bold my-2">
            Price: {hotel.price} Gel
          </h3>
          <Link to="/plane">
            <Button border>
              <span className="text-darkBlueText min-2xl:text-2xl text-lg font-medium">
                Reserve
              </span>
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-3">
            <img
              src={hotel.img}
              alt={hotel.name}
              loading="lazy"
              className="object-cover w-full rounded-md"
            />
          </div>
          {hotel.imgLibrary && hotel.imgLibrary.length > 0
            ? hotel.imgLibrary.map((item, index) => (
                <div key={index} className=" col-span-1">
                  <img
                    src={item}
                    alt={index}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))
            : null}
        </div>
        <div className="flex flex-col  my-10 ">
          <div className="min-2xl:w-9/12 w-10/12">
            <p className="min-2xl:text-2xl">{hotel.firstDescription}</p>
            <p className="pt-5 min-2xl:text-2xl">{hotel.secondDescription}</p>
          </div>

          <div className="flex flex-wrap items-center mt-5 min-2xl:mt-10">
            <span className="text-lg min-2xl:text-2xl font-bold">
              Most popular facilities:
            </span>
            {hotel.facilities && hotel.facilities.length > 0
              ? hotel.facilities.map((item, index) => (
                  <ul key={index} className="pl-3 inline-flex">
                    <li className="min-2xl:text-2xl">{item},</li>
                  </ul>
                ))
              : null}
          </div>
          <div className="flex items-center flex-wrap mt-5">
            <span className="text-lg min-2xl:text-2xl font-bold">
              Breakfast info:
            </span>
            {hotel.breakfast && hotel.breakfast.length > 0
              ? hotel.breakfast.map((item, index) => (
                  <ul key={index} className="pl-3 inline-flex">
                    <li className="min-2xl:text-2xl">{item}</li>
                  </ul>
                ))
              : null}
          </div>
          <div className="mt-4">
            <Link to="/plane">
              <Button border>
                <span className="text-darkBlueText text-lg min-2xl:text-2xl font-medium">
                  Reserve
                </span>
              </Button>
            </Link>
          </div>
          <UsersComments data={hotel.comments} img={hotel.img} />
        </div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./../../Components/Header";
import { UsersComments } from "../../Components";

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
      <div className="m-auto w-10/12 my-20">
        <div className="flex flex-col my-5">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <p className="text-lg font-medium my-2">{hotel.location}</p>
          <h3 className="text-lg font-bold">Price: {hotel.price} Gel</h3>
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-3">
            <img
              src={hotel.img}
              alt={hotel.name}
              loading="lazy"
              className="object-cover rounded-md"
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
        <div className=" my-10 ">
          <div className="flex flex-col ">
            <p>{hotel.firstDescription}</p>
            <p className="pt-5">{hotel.secondDescription}</p>
          </div>
          <div className="grid grid-cols-2 my-10">
            <div className="col-span-1 border">
              <span>Most popular facilities:</span>
              {hotel.facilities && hotel.facilities.length > 0
                ? hotel.facilities.map((item, index) => (
                    <ul key={index} className="pl-3 inline-flex">
                      <li className="">{item}</li>
                    </ul>
                  ))
                : null}
            </div>
            <div className="col-span-1 border">
              <span>Breakfast info:</span>
              {hotel.breakfast && hotel.breakfast.length > 0
                ? hotel.breakfast.map((item, index) => (
                    <ul key={index} className="pl-3 inline-flex">
                      <li className="">{item}</li>
                    </ul>
                  ))
                : null}
            </div>
          </div>
          <UsersComments data={hotel.comments} img={hotel.img} />
        </div>
      </div>
    </>
  );
};

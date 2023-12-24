import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./../../Components/Header";
import { Button, UsersComments } from "../../Components";
import { ReserveModal } from "./Components";

export const Detail = () => {
  const [hotel, setHotel] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const params = useParams();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch(`/api/hotels/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHotel(data.hotels));
  }, [params.id]);

  return (
    <>
      <Header titlePage={hotel.name} titleText={hotel.name} img={hotel.img} />
      <div className="m-auto w-10/12 my-20">
        <div className="flex flex-col items-start my-5">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <p className="text-lg font-medium mt-2">{hotel.location}</p>
          <h3 className="text-lg font-bold my-2">Price: {hotel.price} Gel</h3>
          <Button onClick={() => openModal()} border>
            <span className="text-darkBlueText text-lg font-medium">
              Reserve
            </span>
          </Button>
          <ReserveModal
            isOpen={!!showModal}
            closeModal={closeModal}
            openModalId={showModal}
          />
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
        <div className="flex flex-col  my-10 ">
          <div className=" w-10/12">
            <p>{hotel.firstDescription}</p>
            <p className="pt-5">{hotel.secondDescription}</p>
          </div>

          <div className="flex flex-wrap mt-5">
            <span className="text-lg font-bold">Most popular facilities:</span>
            {hotel.facilities && hotel.facilities.length > 0
              ? hotel.facilities.map((item, index) => (
                  <ul key={index} className="pl-3 inline-flex">
                    <li>{item}</li>
                  </ul>
                ))
              : null}
          </div>
          <div className="flex  flex-wrap mt-5">
            <span className="text-lg font-bold">Breakfast info:</span>
            {hotel.breakfast && hotel.breakfast.length > 0
              ? hotel.breakfast.map((item, index) => (
                  <ul key={index} className="pl-3 inline-flex">
                    <li>{item}</li>
                  </ul>
                ))
              : null}
          </div>
          <div className="mt-4">
            <Button onClick={() => openModal()} border>
              <span className="text-darkBlueText text-lg font-medium">
                Reserve
              </span>
            </Button>
          </div>
          <UsersComments data={hotel.comments} img={hotel.img} />
        </div>
      </div>
    </>
  );
};

import { Button } from "../../../../../Components";
import { useContext } from "react";
import { LocationContext } from "../../../../../Providers/ThemeProvider";

export const TourCard = ({ tourData, openModal }) => {
  const data = useContext(LocationContext);

  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-16 my-20">
        {tourData.map((item) => (
          <div
            key={item.id}
            className="border drop-shadow-lg rounded-lg bg-white"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover rounded-t-lg"
            />
            <div className="flex flex-col justify-between p-8 ">
              <h3 className="text-3xl mb-6">{item.title}</h3>
              <p className="font-light mb-5">{item.description}</p>
              <div>
                <Button border onClick={() => openModal(item.id)}>
                  <span className="text-lg text-darkBlueText">SEE MORE</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

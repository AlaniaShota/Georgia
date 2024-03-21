import { Button } from "../../../../Components";
import { Modal } from "../../../../Components/Modal/index";

export const FoodModal = ({ isOpen, closeModal, foods, openModalId }) => {
  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col bg-white rounded-md ">
          {foods.map(
            (item) =>
              openModalId === item.id && (
                <div
                  key={item.id}
                  className="grid grid-cols-2 items-center gap-x-20 h-full"
                >
                  <div className="grid-cols-1">
                    <img
                      src={item.img}
                      loading="lazy"
                      alt={item.name}
                      className="object-cover rounded-l-md h-630 min-2xl:h-737"
                    />
                  </div>
                  <div className=" grid-cols-2 text-right pr-10">
                    <h1 className="text-3xl min-2xl:text-4xl font-bold pb-1">
                      {item.name}
                    </h1>
                    <span className="text-BlackSecondColor min-2xl:text-lg">
                      {item.type}
                    </span>
                    <p className="font-light min-2xl:text-2xl text-lg py-4">
                      {item.about}
                    </p>
                    <div>
                      <Button border onClick={closeModal}>
                        <span className="text-lg min-2xl:text-2xl text-darkBlueText">
                          CLOSE
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </Modal>
    </>
  );
};

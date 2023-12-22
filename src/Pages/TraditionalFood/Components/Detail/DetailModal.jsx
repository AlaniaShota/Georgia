import { Button, Modal } from "../../../../Components";
import { RecommendationRestaurant } from "../Recommendation/RecommendationRestaurant";

export const DetailModal = ({ isOpen, closeModal, foods, openModalId }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {foods.map(
        (item) =>
          openModalId === item.id && (
            <>
              <img
                src={item.img}
                alt={item.name}
                className="rounded-t-lg object-contain"
              />
              {/* <Link to={`..${search}`} relative="path" className="flex mt-10 pl-4"> */}
              {/* <Button>
              <span className="text-darkBlueText font-medium">
                &larr; BACK TO {searchCategory}
              </span>
            </Button> */}
              {/* </Link> */}
              <div className="flex justify-between">
                <div className="flex flex-col flex-wrap justify-center items-start px-4">
                  {item.type ? (
                    <h6 className="text-BlackSecondColor font-light">
                      {item.type}
                    </h6>
                  ) : null}
                  <h1 className="text-4xl font-semibold">{item.name}</h1>
                  {item.location ? (
                    <h4 className="text-BlackSecondColor text-lg font-light">
                      {item.location}
                    </h4>
                  ) : (
                    <h4 className="text-BlackSecondColor font-medium">
                      Most iconic:
                    </h4>
                  )}
                </div>
                <div className="my-8 px-4">
                  <img
                    src={item.map}
                    alt={item.name}
                    className="object-cover w-[150px]"
                  />
                </div>
              </div>
              <p className="text-lg  px-4 pb-5">{item.about}</p>
              <Button border onClick={closeModal}>
                <span className="text-lg text-darkBlueText">CLOSE</span>
              </Button>
            </>
          ),
      )}
      <RecommendationRestaurant />
    </Modal>
  );
};

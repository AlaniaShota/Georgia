import { motion } from "framer-motion";
import { Button } from "../../../../../Components";
import Typical from "react-typical";

export const TourModal = ({ isOpen, closeModal, tourData, openModalId }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="border rounded-md drop-shadow-2xl p-4 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <div className="flex flex-col">
            {tourData.map(
              (item) =>
                openModalId === item.id && (
                  <div
                    key={item.id}
                    className="grid grid-cols-2 gap-x-40 gap-y-10 "
                  >
                    <div className="flex flex-col justify-evenly p-8 ">
                      <h1 className="text-3xl font-bold ">{item.title}</h1>
                      <p className="font-light ">{item.description}</p>
                      <div>
                        <Button border onClick={closeModal}>
                          <span className="text-lg text-darkBlueText">
                            Close
                          </span>
                        </Button>
                      </div>
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-lg drop-shadow-xl object-cover h-470"
                    />
                    <img
                      src={item.firstImg}
                      alt={item.marginiTitle}
                      className="rounded-lg drop-shadow-xl object-cover h-470"
                    />
                    <div className="flex flex-col justify-center text-right">
                      <h1 className="text-3xl font-bold  mb-9">
                        {item.firstTitle}
                      </h1>
                      <p className="font-light ">{item.firstDescription}</p>
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <h1 className="text-3xl font-bold mb-9">
                        {item.secondTitle}
                      </h1>
                      <p className="font-light ">{item.secondDescription}</p>
                    </div>
                    <img
                      src={item.secondImg}
                      alt={item.secondTitle}
                      className="rounded-lg drop-shadow-xl object-cover h-470"
                    />
                    <img
                      src={item.thirdImg}
                      alt={item.thirdTitle}
                      className="rounded-lg drop-shadow-xl object-cover h-470"
                    />
                    <div className="flex flex-col justify-center text-right ">
                      <h1 className="text-3xl font-bold  mb-9">
                        {item.thirdTitle}
                      </h1>
                      <p className="font-light ">{item.thirdDescription}</p>
                    </div>
                    <div className="flex flex-col justify-center text-left ">
                      <h1 className="text-3xl font-bold  mb-9">
                        {item.fourthTitle}
                      </h1>
                      <p className="font-light ">{item.fourthDescription}</p>
                    </div>
                    <img
                      src={item.fourthImg}
                      alt={item.fourthTitle}
                      className="rounded-lg drop-shadow-xl object-cover h-470"
                    />
                    <img
                      src={item.fifthImg}
                      alt={item.fourthTitle}
                      className="rounded-lg drop-shadow-xl object-cover h-470"
                    />
                    <div className="flex flex-col justify-center text-right ">
                      <h1 className="text-3xl font-bold  mb-9">
                        {item.fifthTitle}
                      </h1>
                      <p className="font-light ">{item.fifthDescription}</p>
                    </div>
                    {item.sixthTitle ? (
                      <>
                        <div className="flex flex-col justify-center text-left ">
                          <h1 className="text-3xl font-bold  mb-9">
                            {item.sixthTitle}
                          </h1>
                          <p className="font-light ">{item.sixthDescription}</p>
                        </div>
                        <img
                          src={item.sixthImg}
                          alt={item.sixthTitle}
                          className="rounded-lg drop-shadow-xl object-cover h-470"
                        />
                        <img
                          src={item.seventhImg}
                          alt={item.sixthTitle}
                          className="rounded-lg drop-shadow-xl object-cover h-470"
                        />
                        <div className="flex flex-col justify-center text-right ">
                          <h1 className="text-3xl font-bold  mb-9">
                            {item.seventhTitle}
                          </h1>
                          <p className="font-light ">
                            {item.seventhDescription}
                          </p>
                        </div>
                        <div className="flex flex-col justify-center text-left ">
                          <h1 className="text-3xl font-bold  mb-9">
                            {item.eighthTitle}
                          </h1>
                          <p className="font-light ">
                            {item.eighthDescription}
                          </p>
                        </div>
                        <img
                          src={item.eighthImg}
                          alt={item.eighthTitle}
                          className="rounded-lg drop-shadow-xl object-cover h-470"
                        />
                        <img
                          src={item.ninthImg}
                          alt={item.eighthTitle}
                          className="rounded-lg drop-shadow-xl object-cover h-470"
                        />
                        <div className="flex flex-col justify-center text-right ">
                          <h1 className="text-3xl font-bold  mb-9">
                            {item.ninthTitle}
                          </h1>
                          <p className="font-light ">{item.ninthDescription}</p>
                        </div>
                      </>
                    ) : null}
                  </div>
                ),
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

import { motion } from "framer-motion";
import { Button } from "../../../../../Components";

export const TourModal = ({ isOpen, closeModal, tourData, openModalId }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="flex justify-center items-center px-10 z-50 bg-black fixed inset-0  bg-opacity-50 backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            // ease: "linear",
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <div className="snap-y  snap-mandatory overflow-y-auto h-630 rounded-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
            <div className="flex flex-col bg-white ">
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
                        className="object-cover h-630 snap-center"
                      />
                      <img
                        // ref={(el) => (ref.current = el)}
                        src={item.firstImg}
                        alt={item.marginiTitle}
                        className="rounded-l-md object-cover h-630 snap-center "
                      />
                      <div className="flex flex-col justify-center p-8 text-right  ">
                        <h1 className="text-3xl font-bold  mb-9">
                          {item.firstTitle}
                        </h1>
                        <p className="font-light ">{item.firstDescription}</p>
                      </div>
                      <div className="flex flex-col justify-center p-8 text-left ">
                        <h1 className="text-3xl font-bold mb-9">
                          {item.secondTitle}
                        </h1>
                        <p className="font-light ">{item.secondDescription}</p>
                      </div>
                      <img
                        src={item.secondImg}
                        alt={item.secondTitle}
                        className=" object-cover h-630 snap-center"
                      />
                      <img
                        src={item.thirdImg}
                        alt={item.thirdTitle}
                        className="rounded-l-md object-cover h-630 snap-center"
                      />
                      <div className="flex flex-col justify-center p-8 text-right ">
                        <h1 className="text-3xl font-bold  mb-9">
                          {item.thirdTitle}
                        </h1>
                        <p className="font-light ">{item.thirdDescription}</p>
                      </div>
                      <div className="flex flex-col justify-center p-8 text-left ">
                        <h1 className="text-3xl font-bold  mb-9">
                          {item.fourthTitle}
                        </h1>
                        <p className="font-light ">{item.fourthDescription}</p>
                      </div>
                      <img
                        src={item.fourthImg}
                        alt={item.fourthTitle}
                        className="object-cover h-630 snap-center"
                      />
                      {item.fifthTitle ? (
                        <>
                          <img
                            src={item.fifthImg}
                            alt={item.fifthTitle}
                            className="rounded-l-md object-cover h-630 snap-center"
                          />
                          <div className="flex flex-col justify-center p-8 text-right ">
                            <h1 className="text-3xl font-bold  mb-9">
                              {item.fifthTitle}
                            </h1>
                            <p className="font-light ">
                              {item.fifthDescription}
                            </p>
                          </div>
                          {item.sixthTitle ? (
                            <>
                              <div className="flex flex-col justify-center p-8 text-left ">
                                <h1 className="text-3xl font-bold  mb-9">
                                  {item.sixthTitle}
                                </h1>
                                <p className="font-light ">
                                  {item.sixthDescription}
                                </p>
                              </div>
                              <img
                                src={item.sixthImg}
                                alt={item.sixthTitle}
                                className="object-cover h-630 snap-center"
                              />
                              {item.seventhTitle ? (
                                <>
                                  <img
                                    src={item.seventhImg}
                                    alt={item.seventhTitle}
                                    className="rounded-l-md object-cover h-630 snap-center"
                                  />
                                  <div className="flex flex-col justify-center p-8 text-right ">
                                    <h1 className="text-3xl font-bold  mb-9">
                                      {item.seventhTitle}
                                    </h1>
                                    <p className="font-light ">
                                      {item.seventhDescription}
                                    </p>
                                  </div>
                                  {item.eighthTitle ? (
                                    <>
                                      <div className="flex flex-col justify-center p-8 text-left ">
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
                                        className="object-cover h-630 snap-center"
                                      />
                                      {item.ninthTitle ? (
                                        <>
                                          <img
                                            src={item.ninthImg}
                                            alt={item.eighthTitle}
                                            className="rounded-l-md object-cover h-630 snap-center"
                                          />
                                          <div className="flex flex-col justify-center p-8 text-right ">
                                            <h1 className="text-3xl font-bold  mb-9">
                                              {item.ninthTitle}
                                            </h1>
                                            <p className="font-light ">
                                              {item.ninthDescription}
                                            </p>
                                          </div>
                                        </>
                                      ) : null}
                                    </>
                                  ) : null}
                                </>
                              ) : null}
                            </>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  ),
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

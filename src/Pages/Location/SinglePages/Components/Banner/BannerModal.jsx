import { Button } from "../../../../../Components";
import { motion } from "framer-motion";
export const BannerModal = ({
  isOpen,
  closeModal,
  bannerData,
  openModalId,
}) => {
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
              {bannerData.map(
                (item) =>
                  openModalId === item.id && (
                    <div
                      key={item.id}
                      className="grid grid-cols-2 gap-x-40 gap-y-10 "
                    >
                      <img
                        src={item.firstImg}
                        alt={item.firstTitle}
                        className="object-cover h-630 snap-center"
                      />
                      <div className="flex flex-col justify-evenly p-8 items-ce text-right">
                        <h1 className="text-3xl font-bold ">
                          {item.firstTitle}
                        </h1>
                        <p className="font-light ">{item.firstDescription}</p>
                        <div>
                          <Button border onClick={closeModal}>
                            <span className="text-lg text-darkBlueText">
                              CLOSE
                            </span>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center p-8 text-left  ">
                        <h1 className="text-3xl font-bold  ">
                          {item.secondTitle}
                        </h1>
                        <p className="font-light my-9">
                          {item.secondDescription}
                        </p>
                      </div>
                      <img
                        src={item.secondImg}
                        alt={item.secondTitle}
                        className="rounded-l-md object-cover h-630 snap-center "
                      />
                      <img
                        src={item.thirdImg}
                        alt={item.thirdTitle}
                        className="rounded-l-md object-cover h-630 snap-center "
                      />
                      <div className="flex flex-col justify-center p-8 text-right  ">
                        <h1 className="text-3xl font-bold  ">
                          {item.thirdTitle}
                        </h1>
                        <p className="font-light my-9">
                          {item.thirdDescription}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center p-8 text-left  ">
                        <h1 className="text-3xl font-bold  ">
                          {item.fourthTitle}
                        </h1>
                        <p className="font-light my-9">
                          {item.fourthDescription}
                        </p>
                      </div>
                      <img
                        src={item.fourthImg}
                        alt={item.fourthTitle}
                        className="rounded-l-md object-cover h-630 snap-center "
                      />
                      <img
                        src={item.fifthImg}
                        alt={item.fifthTitle}
                        className="rounded-l-md object-cover h-630 snap-center "
                      />
                      <div className="flex flex-col justify-center p-8 text-right  ">
                        <h1 className="text-3xl font-bold  ">
                          {item.fifthTitle}
                        </h1>
                        <p className="font-light my-9">
                          {item.fifthDescription}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center p-8 text-left  ">
                        <h1 className="text-3xl font-bold  ">
                          {item.sixthTitle}
                        </h1>
                        <p className="font-light my-9">
                          {item.sixthDescription}
                        </p>
                        <div>
                          <Button border onClick={closeModal}>
                            <span className="text-lg text-darkBlueText">
                              CLOSE
                            </span>
                          </Button>
                        </div>
                      </div>
                      <img
                        src={item.sixthImg}
                        alt={item.sixthTitle}
                        className="rounded-l-md object-cover h-630 snap-center "
                      />
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

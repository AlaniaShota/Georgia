import { Button } from "../../../../../Components";
import { ButtonTour } from "../ButtonViewMore";
import { Modal } from "../../../../../Components/Modal/index";

export const TourModal = ({ isOpen, closeModal, tourData, openModalId }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="flex flex-col bg-white ">
        {tourData.map(
          (item) =>
            openModalId === item.id && (
              <div
                key={item.id}
                className="grid grid-cols-2 gap-x-40 gap-y-10 min-2xl:gap-0"
              >
                <div className="flex flex-col justify-evenly p-8 min-2xl:h-full">
                  <h1 className="text-3xl min-2xl:text-4xl font-bold ">
                    {item.title}
                  </h1>
                  <p className="font-light min-2xl:text-2xl ">
                    {item.description}
                  </p>
                  <div>
                    <Button border onClick={closeModal}>
                      <span className="text-lg min-2xl:text-2xl text-darkBlueText">
                        CLOSE
                      </span>
                    </Button>
                  </div>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                />
                <img
                  src={item.firstImg}
                  alt={item.marginiTitle}
                  className="rounded-l-md object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center "
                />
                <div className="flex flex-col justify-center p-8 text-right  ">
                  <h1 className="text-3xl min-2xl:text-4xl font-bold  ">
                    {item.firstTitle}
                  </h1>
                  <p className="font-light min-2xl:text-2xl my-9">
                    {item.firstDescription}
                  </p>
                  <div>
                    <ButtonTour closeModal={closeModal} />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 text-left ">
                  <h1 className="text-3xl min-2xl:text-4xl font-bold">
                    {item.secondTitle}
                  </h1>
                  <p className="font-light min-2xl:text-2xl my-9">
                    {item.secondDescription}
                  </p>
                  <div>
                    <ButtonTour closeModal={closeModal} />
                  </div>
                </div>
                <img
                  src={item.secondImg}
                  alt={item.secondTitle}
                  className=" object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                />
                <img
                  src={item.thirdImg}
                  alt={item.thirdTitle}
                  className="rounded-l-md object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                />
                <div className="flex flex-col justify-center p-8 text-right ">
                  <h1 className="text-3xl min-2xl:text-4xl font-bold">
                    {item.thirdTitle}
                  </h1>
                  <p className="font-light min-2xl:text-2xl my-9">
                    {item.thirdDescription}
                  </p>
                  <div>
                    <ButtonTour closeModal={closeModal} />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 text-left ">
                  <h1 className="text-3xl min-2xl:text-4xl font-bold">
                    {item.fourthTitle}
                  </h1>
                  <p className="font-light min-2xl:text-2xl my-9">
                    {item.fourthDescription}
                  </p>
                  <div>
                    <ButtonTour closeModal={closeModal} />
                  </div>
                </div>
                <img
                  src={item.fourthImg}
                  alt={item.fourthTitle}
                  className="object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                />
                {item.fifthTitle ? (
                  <>
                    <img
                      src={item.fifthImg}
                      alt={item.fifthTitle}
                      className="rounded-l-md object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                    />
                    <div className="flex flex-col justify-center p-8 text-right ">
                      <h1 className="text-3xl min-2xl:text-4xl font-bold">
                        {item.fifthTitle}
                      </h1>
                      <p className="font-light min-2xl:text-2xl my-9">
                        {item.fifthDescription}
                      </p>
                      <div>
                        <ButtonTour closeModal={closeModal} />
                      </div>
                    </div>
                    {item.sixthTitle ? (
                      <>
                        <div className="flex flex-col justify-center p-8 text-left ">
                          <h1 className="text-3xl min-2xl:text-4xl font-bold">
                            {item.sixthTitle}
                          </h1>
                          <p className="font-light min-2xl:text-2xl my-9">
                            {item.sixthDescription}
                          </p>
                          <div>
                            <ButtonTour closeModal={closeModal} />
                          </div>
                        </div>
                        <img
                          src={item.sixthImg}
                          alt={item.sixthTitle}
                          className="object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                        />
                        {item.seventhTitle ? (
                          <>
                            <img
                              src={item.seventhImg}
                              alt={item.seventhTitle}
                              className="rounded-l-md object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                            />
                            <div className="flex flex-col justify-center p-8 text-right ">
                              <h1 className="text-3xl min-2xl:text-4xl font-bold">
                                {item.seventhTitle}
                              </h1>
                              <p className="font-light min-2xl:text-2xl my-9">
                                {item.seventhDescription}
                              </p>
                              <div>
                                <ButtonTour closeModal={closeModal} />
                              </div>
                            </div>
                            {item.eighthTitle ? (
                              <>
                                <div className="flex flex-col justify-center p-8 text-left ">
                                  <h1 className="text-3xl min-2xl:text-4xl font-bold">
                                    {item.eighthTitle}
                                  </h1>
                                  <p className="font-light min-2xl:text-2xl my-9">
                                    {item.eighthDescription}
                                  </p>
                                  <div>
                                    <ButtonTour closeModal={closeModal} />
                                  </div>
                                </div>
                                <img
                                  src={item.eighthImg}
                                  alt={item.eighthTitle}
                                  className="object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                                />
                                {item.ninthTitle ? (
                                  <>
                                    <img
                                      src={item.ninthImg}
                                      alt={item.eighthTitle}
                                      className="rounded-l-md object-cover h-630 min-2xl:h-full min-2xl:w-full snap-center"
                                    />
                                    <div className="flex flex-col justify-center p-8 text-right ">
                                      <h1 className="text-3xl min-2xl:text-4xl font-bold">
                                        {item.ninthTitle}
                                      </h1>
                                      <p className="font-light min-2xl:text-2xl my-9">
                                        {item.ninthDescription}
                                      </p>
                                      <div>
                                        <ButtonTour closeModal={closeModal} />
                                      </div>
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
            )
        )}
      </div>
    </Modal>
  );
};

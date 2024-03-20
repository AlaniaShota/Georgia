import { Modal } from "../../../../../Components/Modal/index";

export const BannerModal = ({
  isOpen,
  closeModal,
  openModalId,
  modalCategory,
  bannerData,
}) => {
  const handleClose = () => {
    closeModal();
  };

  const modalData = bannerData.find((item) => item.id === openModalId);
  let content = null;

  let categoryData = null;

  switch (modalCategory) {
    case "monument":
      categoryData = modalData.monument;
      break;
    case "culture":
      categoryData = modalData.culture;
      break;
    case "nature":
      categoryData = modalData.nature;
      break;
    default:
      break;
  }

  if (categoryData) {
    content = (
      <>
        <ul className="flex flex-col bg-white ">
          {categoryData.map((item) => (
            <li key={item.id} className="grid grid-cols-2 gap-x-40 gap-y-10 ">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover h-630 snap-center"
              />
              <div className="flex flex-col justify-center p-8  text-right">
                <h1 className="text-3xl font-bold my-9">{item.title}</h1>
                <p className="font-light ">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div
        className="snap-y  snap-mandatory overflow-y-auto h-630 rounded-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-3xl z-50 absolute top-13 left-[1430px] border border-black hover:border-white bg-white hover:bg-black hover:text-white transition ease-linear px-2 mt-1 rounded-full  cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </span>
        {content}
      </div>
    </Modal>
  );
};

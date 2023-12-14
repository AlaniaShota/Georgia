import { useState } from "react";
import { BannerCard } from "./Banner/BannerCard";
import { BannerModal } from "./Banner/BannerModal";

export const Banner = ({ bannerData }) => {
  const [openModalInfo, setOpenModalInfo] = useState(null);

  const openModal = (id, category) => {
    setOpenModalInfo({ id, category });
  };

  const closeModal = () => {
    setOpenModalInfo(null);
  };

  return (
    <div className="">
      <BannerCard bannerData={bannerData} openModal={openModal} />
      {openModalInfo && (
        <BannerModal
          bannerData={bannerData}
          isOpen={true}
          closeModal={closeModal}
          openModalId={openModalInfo.id}
          modalCategory={openModalInfo.category}
        />
      )}
    </div>
  );
};

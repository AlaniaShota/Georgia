import { useState } from "react";
import { BannerCard } from "./Banner/BannerCard";
import { BannerModal } from "./Banner/BannerModal";

export const Banner = ({ bannerData }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };
  return (
    <div className="">
      <BannerCard bannerData={bannerData} openModal={openModal} />
      <BannerModal
        bannerData={bannerData}
        isOpen={!!openModalId}
        closeModal={closeModal}
        openModalId={openModalId}
      />
    </div>
  );
};

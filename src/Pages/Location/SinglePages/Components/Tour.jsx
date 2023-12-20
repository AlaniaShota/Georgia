import { useState } from "react";
import { TourCard } from "./Tour/TourCard";
import { TourModal } from "./Tour/TourModal";
import { Modal } from "../../../../Components/Modal/Modal";

export const Tour = ({ tourData }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <>
      <TourCard tourData={tourData} openModal={openModal} />
      <TourModal
        isOpen={!!openModalId}
        closeModal={closeModal}
        tourData={tourData}
        openModalId={openModalId}
      />
    </>
  );
};

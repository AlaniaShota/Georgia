import { FoodModal } from "./Detail/FoodModal";
import { FoodCard } from "./Detail/FoodCard";
import { useState } from "react";

export const Food = ({ foods }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <>
      <FoodCard foods={foods} openModal={openModal} />
      <FoodModal
        isOpen={!!openModalId}
        closeModal={closeModal}
        foods={foods}
        openModalId={openModalId}
      />
    </>
  );
};

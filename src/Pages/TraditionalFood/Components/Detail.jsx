import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailFood, DetailModal } from ".";
import { useFoodStore } from "../../../Store/store";
// import { DetailFood, DetailModal } from './Detail';

export const Detail = ({ foods }) => {
  // const [moreInformation, setMoreInformation] = useState(null);
  // const params = useParams();

  // useEffect(() => {
  //   fetch(`/api/foods/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setMoreInformation(data.foods));
  // }, [params.id]);

  //   const { foods = [] } = useFoodStore((state) => state.foods);
  //   const fetchFoods = useFoodStore((state) => state.fetchFoods);
  //   useEffect(() => {
  //     fetchFoods();
  //   }, [fetchFoods]);

  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <div className="lg:container sm:mx-8 lg:mx-0">
      <DetailFood foods={foods} openModal={openModal} />
      <DetailModal
        foods={foods}
        isOpen={!!openModalId}
        closeModal={closeModal}
        openModalId={openModalId}
      />
      {/* {moreInformation ? <DetailModal 
        moreInformation={moreInformation} 
        isOpen={!!openModalId}
          closeModal={closeModal}
          openModalId={openModalId} /> : null} */}
    </div>
  );
};

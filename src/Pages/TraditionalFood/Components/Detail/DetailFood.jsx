import { useEffect, useState } from "react";
import {
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
// import { RecommendationRestaurant } from "./index";
// import { Header, Button } from "../../../Components/index";
import { DetailModal } from "./DetailModal";
import { useFoodStore } from "../../../../Store/store";
import { Button } from "react-day-picker";

export const DetailFood = ({ foods, openModal }) => {
  // const [moreInformation, setMoreInformation] = useState(null);
  // const params = useParams();
  // const location = useLocation();

  // useEffect(() => {
  //   fetch(`/api/foods/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setMoreInformation(data.foods));
  // }, [params.id]);

  // const [openModalId, setOpenModalId] = useState(null);

  // const openModal = (id) => {
  //   setOpenModalId(id);
  // };

  // const closeModal = () => {
  //   setOpenModalId(null);
  // };

  // const search = location.state?.search || "";
  // const searchCategory = location.state?.type || "ALL";

  // function ItemContent() {
  //   return (
  //     <>
  //       {/* <Header
  //         titlePage={`${moreInformation.name}`}
  //         // titleText={Dishes_Title}
  //         // descriptionText={Dishes_Description}
  //         // img={foodImg}
  //       /> */}
  //       <div className="border drop-shadow-md rounded-lg bg-white my-20">
  //         <img
  //           src={moreInformation.img}
  //           alt={moreInformation.name}
  //           className="rounded-t-lg object-contain"
  //         />
  //         <Link to={`..${search}`} relative="path" className="flex mt-10 pl-4">
  //           <Button>
  //             <span className="text-darkBlueText font-medium">
  //               &larr; BACK TO {searchCategory}
  //             </span>
  //           </Button>
  //         </Link>
  //         <div className="flex justify-between">
  //           <div className="flex flex-col flex-wrap justify-center items-start px-4">
  //             {moreInformation.type ? (
  //               <h6 className="text-BlackSecondColor font-light">
  //                 {moreInformation.type}
  //               </h6>
  //             ) : null}
  //             <h1 className="text-4xl font-semibold">{moreInformation.name}</h1>
  //             {moreInformation.location ? (
  //               <h4 className="text-BlackSecondColor text-lg font-light">
  //                 {moreInformation.location}
  //               </h4>
  //             ) : (
  //               <h4 className="text-BlackSecondColor font-medium">
  //                 Most iconic:
  //               </h4>
  //             )}
  //           </div>
  //           <div className="my-8 px-4">
  //             <img
  //               src={moreInformation.map}
  //               alt={moreInformation.name}
  //               className="object-cover w-[150px]"
  //             />
  //           </div>
  //         </div>
  //         <p className="text-lg  px-4 pb-5">{moreInformation.about}</p>
  //         <RecommendationRestaurant />
  //       </div>
  //     </>
  //   );
  // }
  const loadMoreContentCount = 15;

  const [next, setNext] = useState(loadMoreContentCount);
  const [showMore, setShowMore] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleMoreItem = () => {
    setNext(next + loadMoreContentCount);
  };

  return (
    <>
      {foods.slice(0, next).map((item) => (
        <div
          className="flex flex-col justify-between border drop-shadow-md rounded-md bg-white"
          key={item.id}
        >
          <img
            alt={item.name}
            src={item.img}
            className="object-cover rounded-t-md h-[200px]"
          />
          <div className="pt-1 px-4">
            <h1 className="text-2xl ">{item.name}</h1>
            {item.location ? (
              <h3 className="text-sm text-BlackSecondColor font-light my-3">
                {item.location}
              </h3>
            ) : (
              <h3 className="text-sm text-BlackSecondColor font-light my-3">
                Most iconic:
              </h3>
            )}
            {/* <p className="text-sm text-BlackSecondColor font-light">
              {showMore ? item.about : `${item.about.substring(0, 200)}`}
            </p> */}
          </div>
          <div className="flex justify-center items-center w-full p-4">
            {/* <Link
                to={`/library/${item.id}`}
                // state={{
                //   search: `?${searchParams.toString()}`,
                //   type: categoryFilter,
                // }}
                onClick={() => setShowMore(!showMore)}
              > */}
            <Button border onClick={() => openModal(item.id)}>
              <span className="text-lg text-darkBlueText">SEE MORE</span>
            </Button>
            {/* </Link> */}
          </div>
        </div>
      ))}
    </>
  );
};

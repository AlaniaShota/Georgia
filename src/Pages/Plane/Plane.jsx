import { FinalForm, FormReserve } from "./Components";
import img from "../../assets/plane/airport1.jpg";
import { Header } from "../../Components";
import { Title_Page, Description_Page } from "./constants";

export const Plane = () => {
  return (
    <>
      <Header
        img={img}
        titlePage={"Georgia"}
        titleText={Title_Page}
        descriptionText={Description_Page}
      />
      <div className="m-auto w-1/2 my-20">
        <FormReserve />
        {/* <FinalForm /> */}
      </div>
    </>
  );
};

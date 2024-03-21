import { Link } from "react-router-dom";
import { Button } from "../../../../Components";

export const ButtonViewMore = ({ setViewMore }) => {
  const handleViewMore = () => {
    setViewMore(true);
  };

  return (
    <>
      <Button border onClick={handleViewMore}>
        <span className="text-lg min-2xl:text-2xl text-darkBlueText">
          VIEW MORE
        </span>
      </Button>
    </>
  );
};

export const ButtonTour = ({ closeModal }) => {
  return (
    <>
      <Button border margin="4" onClick={closeModal}>
        <span className="text-lg min-2xl:text-2xl text-darkBlueText">
          CLOSE
        </span>
      </Button>
      <Link to="/plane">
        <Button border>
          <span className="text-lg min-2xl:text-2xl text-darkBlueText">
            PLANE TOUR
          </span>
        </Button>
      </Link>
    </>
  );
};

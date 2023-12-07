import { Button } from "../../../../Components";

export const ButtonViewMore = ({ setViewMore }) => {
  const handleViewMore = () => {
    setViewMore(true);
  };

  return (
    <>
      <Button border onClick={handleViewMore}>
        <span className="text-lg text-darkBlueText">View More</span>
      </Button>
    </>
  );
};

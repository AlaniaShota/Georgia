export const Section = ({ title, firstDescription, secondDescription }) => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="text-3xl font-bold  text-center ">{title}</h1>
      <p className="text-BlackSecondColor text-lg my-5 text-center w-[740px] ">
        {firstDescription}
      </p>
      <p className="text-center text-BlackSecondColor text-lg w-[740px] ">
        {secondDescription ? secondDescription : null}
      </p>
    </div>
  );
};

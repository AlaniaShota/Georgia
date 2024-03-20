export const Section = ({ title, firstDescription, secondDescription }) => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="lg:text-3xl min-2xl:text-4xl sm:text-xl font-bold   ">
        {title}
      </h1>
      <p className="text-BlackSecondColor text-center min-2xl:text-2xl lg:text-lg sm:text-base my-5  w-740 ">
        {firstDescription}
      </p>
      <p className=" text-BlackSecondColor text-center min-2xl:text-2xl lg:text-lg sm:text-base w-740 ">
        {secondDescription ? secondDescription : null}
      </p>
    </div>
  );
};

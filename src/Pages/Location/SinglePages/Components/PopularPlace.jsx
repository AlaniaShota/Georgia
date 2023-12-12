export const PopularPlace = ({ placeData }) => {
  console.log(placeData);
  return (
    <>
      {placeData.map((item, index) => (
        <div key={index} className="flex justify-between ">
          <div className="flex flex-wrap gap-4">
            <img
              src={item.firstImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md "
            />
            <img
              src={item.secondImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md"
            />
            <img
              src={item.thirdImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md"
            />
            <img
              src={item.fourthImg}
              alt="Popular Place"
              className="w-[285px] h-[222px] object-cover rounded-lg drop-shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center items-end text-right mr-4 w-2/3">
            <h1 className="text-4xl font-bold mb-5">{item.title}</h1>
            <p className="text-lg font-light">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

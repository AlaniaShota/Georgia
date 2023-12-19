import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Button } from "../../../Components";

export const GuidePortfolio = () => {
  const [guide, setGuide] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/guides/${params.id}`)
      .then((res) => res.json())
      .then((data) => setGuide(data.guides));
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title>{guide.last_name}</title>
      </Helmet>
      <div className="flex flex-col">
        <div className="flex w-full justify-start items-center flex-wrap cursor-default">
          <img
            src={guide.img}
            alt={guide.first_name}
            className="object-cover h-737 w-full"
          />
          <div className="absolute h-full bg-black bg-opacity-50">
            <div className="flex flex-col justify-center h-full w-1/2 ml-40 text-white">
              <h1 className="font-light text-6xl">
                {guide.first_name} {guide.last_name}
              </h1>
              <h3 className="text-lg font-medium py-7">{guide.email}</h3>
              <p className="text-lg font-medium">{guide.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col [&>*:nth-child(2)]:flex-row-reverse [&>*:nth-child(2)]:text-end lg:container sm:mx-8 lg:mx-0 my-20">
          {guide.recommended
            ? guide.recommended.map((item) => (
                <div key={item.id} className="flex flex-row items-center mb-20">
                  <div className="flex-1 px-10">
                    <h1 className="text-3xl font-medium">{item.title}</h1>
                    <p className="font-light my-10 ">{item.description}</p>
                    <Button border>
                      <span className="text-lg text-darkBlueText">
                        SEE MORE
                      </span>
                    </Button>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-5">
                    {Array.isArray(item.img) &&
                      item.img.map((imgSrc, index) => (
                        <div key={index} className="">
                          <img
                            src={imgSrc}
                            alt={`Image ${index}`}
                            className="w-full h-full object-cover rounded-md drop-shadow-2xl"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

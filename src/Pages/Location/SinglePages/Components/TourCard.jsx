import { Link } from "react-router-dom";
import { Button } from "../../../../Components";

export const TourCard = ({ tourData }) => {
  return (
    <div className="grid grid-cols-2 gap-16 my-20">
      {tourData.map((item) => (
        <div key={item.id} className="border shadow-md rounded-lg">
          <img
            src={item.img}
            alt={item.title}
            className="object-cover rounded-t-lg"
          />
          <div className="flex flex-col justify-between p-8">
            <h3 className="text-3xl mb-6">{item.title}</h3>
            <p className="font-light mb-5">{item.description}</p>
            <Link to={`/location//samegrelo-zemo-svaneti/${item.id}`}>
              <Button>
                <span>See More</span>
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

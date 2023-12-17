import { Button } from "../../../Components/Button";

export const Guide = ({ guides }) => {
  return (
    <div>
      {guides.map((item) => (
        <div key={item.id} className="flex flex-row justify-between">
          <div className="flex flex-col justify-center mr-20">
            <h1>
              {item.first_name} {item.last_name}
            </h1>
            <span className="text-BlackSecondColor py-4">{item.gender}</span>
            <h3 className="text-BlackSecondColor ">{item.email}</h3>
            <p className="text-BlackSecondColor py-4">{item.description}</p>
            <div>
              {item.status ? (
                <Button border>
                  <span className="text-lg text-darkBlueText">RESERVE</span>
                </Button>
              ) : (
                <Button border>
                  <span className="text-lg text-darkBlueText">RESERVE</span>
                </Button>
              )}
            </div>
          </div>
          <img
            src={item.img}
            alt={item.first_name}
            className="h-470 w-[276px] object-cover"
          />

          {/* <ul>
            {item.recommended.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.img.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                  </div>
                ))}
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

import { Link } from "react-router-dom";

export const NavLinks = ({ scrolled }) => {
  const links = [
    {
      id: "el1",
      to: "/",
      name: "Home",
    },
    {
      id: "el2",
      to: "location",
      name: "Location",
    },
    {
      id: "el3",
      to: "hotel",
      name: "Hotel",
    },
    {
      id: "el4",
      to: "traditional-food",
      name: "Traditional Food",
    },
    {
      id: "el5",
      to: "tour-guide",
      name: "Tour Guide",
    },
  ];
  return (
    <>
      <header className="flex lg:items-center lg:justify-end lg:flex-row sm:flex-col  text-xl  text-white ">
        {links.map((item) => (
          <div
            className={`flex sm:flex-col lg:flex-row sm:static sm:items-start sm:w-auto transition-colors duration-500 ease-in ${
              scrolled ? "text-black" : ""
            } ${open ? "sm:opacity-100" : "sm:hidden lg:inline"} `}
            key={item.id}
          >
            <Link to={item.to} className=" mr-4 py-1 lg:px-4 sm:px-14">
              {item.name}
            </Link>
          </div>
        ))}
      </header>
    </>
  );
};

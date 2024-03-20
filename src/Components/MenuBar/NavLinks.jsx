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
      <header className="flex items-center justify-around min-2xl:text-2xl lg:text-xl sm:text-base text-white ">
        {links.map((item) => (
          <div
            className={`flex  flex-row  transition-colors duration-500 ease-in ${
              scrolled ? "text-black" : ""
            } ${open ? "sm:opacity-100" : "sm:hidden lg:inline"} `}
            key={item.id}
          >
            <Link
              to={item.to}
              className=" mr-4 py-1 lg:px-4 min-2xl:px-5 min-2xl:py-5 min-2xl:text-2xl"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </header>
    </>
  );
};

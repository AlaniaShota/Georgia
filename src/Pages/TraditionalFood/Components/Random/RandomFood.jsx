import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useFoodStore } from "../../../../Store/store";

export const RandomFood = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { foods = [] } = useFoodStore((state) => state.foods);
  const fetchFoods = useFoodStore((state) => state.fetchFoods);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  //ზოგჯერ ტექსტი არ მომდის, მომდის მხოლოდ იმ შემთხვევაში თუ ტეკსტში არი ცვლილება

  return (
    <div className="flex flex-col">
      {foods
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map((item) => (
          <div
            key={item.id}
            className={`flex justify-between flex-row  basis-1 my-4 border drop-shadow-md   rounded-lg bg-white`}
          >
            <Link to={`/library/${item.id}`} className="flex w-full ">
              <div className="w-1/2 flex justify-center items-center ">
                <motion.div
                  ref={ref}
                  style={{
                    transform: isInView ? "none" : "translateX(-70px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                  className="flex flex-col justify-around px-6 py-5"
                >
                  <h1 className="text-3xl font-medium text-start">
                    {item.name}
                  </h1>
                  <p className="font-light pt-4">
                    {`${item.about.substring(0, 500)}...`}
                  </p>
                </motion.div>
              </div>
              <div className="w-1/2">
                <img
                  src={item.img}
                  alt={item.name}
                  className={`object-cover rounded-r-lg w-full h-80`}
                />
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

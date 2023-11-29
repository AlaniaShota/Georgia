import { Helmet } from "react-helmet";
import MultiHeaderParallax from "./Components/MultiHeaderParallax";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div>
        <MultiHeaderParallax />
      </div>
    </div>
  );
};

export default Home;

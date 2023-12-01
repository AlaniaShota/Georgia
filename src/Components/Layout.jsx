import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

const Layout = () => {
  return (
    <>
      <MenuBar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;

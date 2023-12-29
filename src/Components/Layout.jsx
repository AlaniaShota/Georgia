import { MenuBar } from "./MenuBar/MenuBar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
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

import Footer from "../Footer";
import NavBar from "../NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br   from-transparent to-green-100 ">
      <NavBar />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;

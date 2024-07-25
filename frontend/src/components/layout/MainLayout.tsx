import Footer from "../common/Footer";
import Header from "../common/Header";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../../routes/route";

const MainLayout: React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <AppRoutes />
    </BrowserRouter>
      <Footer />
    </>
  );
};

export default MainLayout;

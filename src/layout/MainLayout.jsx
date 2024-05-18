import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="pt-16">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
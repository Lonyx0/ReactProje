import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/innerPages/ContactPage";
import HomeDark from "./pages/homePages/HomeDark";
import ProjectDetailsPage from "./pages/innerPages/ProjectDetailsPage";
import ResumePage from "./pages/innerPages/ResumePage";
import ServicePage from "./pages/innerPages/ServicePage";
import NotFoundPage from "./pages/innerPages/NotFoundPage";
import ProjectsPage from "./pages/innerPages/ProjectsPage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeDark />} ></Route>
                <Route path="/contact" element={<ContactPage />} ></Route>
                <Route path="/projects" element={<ProjectsPage />} ></Route>
                <Route path="/project-details/:id" element={<ProjectDetailsPage />} ></Route>
                <Route path="/resume" element={<ResumePage />} ></Route>
                <Route path="/service" element={<ServicePage />} ></Route>
                <Route path="*" element={<NotFoundPage />} ></Route>
            </Routes>
        </>
    );
};

export default Routers;
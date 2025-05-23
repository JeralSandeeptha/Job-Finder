import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListingPage from "../pages/job-listings-page/JobListingPage";
import AddJobPage from "../pages/add-job-page/AddJobPage";
import JobDetailPage from "../pages/job-detail-page/JobDetailPage";

const MainNavigation = () => {
  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" Component={JobListingPage}/>
            <Route path="/add/job" Component={AddJobPage}/>
            <Route path="/job/:jobId" Component={JobDetailPage}/>
        </Routes>
    </BrowserRouter>
  );
}

export default MainNavigation;
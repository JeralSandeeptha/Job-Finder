import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListingPage from "../pages/job-listings-page/JobListingPage";
import AddJobPage from "../pages/add-job-page/AddJobPage";
import JobDetailPage from "../pages/job-detail-page/JobDetailPage";
import SearchJobsPage from "../pages/serach-page/SearchJobsPage";
import RegisterPage from "../pages/register-page/RegisterPage";
import LoginPage from "../pages/login-page/LoginPage";

const MainNavigation = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={JobListingPage}/>
        <Route path="/register" Component={RegisterPage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/add/job" Component={AddJobPage}/>
        <Route path="/search/:title/:company" Component={SearchJobsPage}/>
        <Route path="/job/:jobId" Component={JobDetailPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigation;
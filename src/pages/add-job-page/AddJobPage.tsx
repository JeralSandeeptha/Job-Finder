import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

const AddJobPage = () => {
  return (
    <>
      <Navbar />
      <Hero 
        isAddNewJob={true}
        titleOne="Add New Job"
        description="Add new jobs & explore the job community!"
      />
    </>
  );
}                             

export default AddJobPage;
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

const JobListingPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        isHero={true}
        titleOne="Find Your"
        titleTwo="Dream Jobs"
        description="Browse our latest to view, apply & post to the new jobs today!"
      />
    </>
  );
};

export default JobListingPage;

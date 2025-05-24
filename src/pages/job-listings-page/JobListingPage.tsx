import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search-bar/SearchBar";
import getAllJobs from "../../services/getAllJobs/getAllJobs";
import type { Job } from "../../types/interface.types";

const JobListingPage = () => {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit] = useState<number>(3);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight - 100 && hasMore
    ) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    getAllJobs({
      limit: limit,
      page: page,
      setHasMore: setHasMore,
      setJobs: setJobs,
      setPage: setPage,
      setLoading:setLoading
    });
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <>
      <Navbar />
      <Hero
        isHero={true}         
        titleOne="Find Your"
        titleTwo="Dream Jobs"
        description="Browse our latest to view, apply & post to the new jobs today!"
      />
      <SearchBar />
      <div>
        { loading && 'Loading'}
        <h2>Job Listings</h2>
        {jobs.map((job, index) => (
          <div key={`${job.id}` + index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h4>{job.id}</h4>
          </div>
        ))}
        {!hasMore && <p>No more jobs to load.</p>}
      </div>
    </>
  );
};

export default JobListingPage;

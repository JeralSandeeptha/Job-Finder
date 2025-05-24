import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search-bar/SearchBar";
import getAllJobs from "../../services/getAllJobs/getAllJobs";
import type { Job } from "../../types/interface.types";

const JobListingPage = () => {

  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const limit = 3;

  useEffect(() => {
    getAllJobs({
      page: page,
      limit: limit,
      setPage: setPage,
      setJobs: setJobs,
      setHasMore: setHasMore
    });
  }, [page]);

  const lastJobElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

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

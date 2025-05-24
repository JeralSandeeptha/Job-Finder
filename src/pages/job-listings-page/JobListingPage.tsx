import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search-bar/SearchBar";
import type { Job } from "../../types/interface.types";
import getAllJobs from "../../services/getAllJobs/getAllJobs";

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [limit] = useState(3);

  const changePage = () => {
    setPage((prev) => prev + 1);
    console.log(page);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (loading || !hasMore) return;

    if (window.innerHeight + window.scrollY + 100 >= document.documentElement.scrollHeight) {
      changePage();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    getAllJobs({
      limit: limit,
      page: page,
      setHasMore: setHasMore,
      setJobs: setJobs,
      setPage: setPage,
      setLoading: setLoading,
      jobs: jobs,
      loading: loading,
    });
  }, [page]);

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
        {jobs.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "10px",
              border: "1px solid gray",
              margin: "10px 0",
            }}
          >
            <h4>{post.id}</h4>
          </div>
        ))}
        {!hasMore && <p>No more jobs</p>}
        <button onClick={changePage}>changePage</button>
      </div>
    </>
  );
};

export default JobListingPage;

import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search-bar/SearchBar";
import type { Country, Job } from "../../types/interface.types";
import getAllJobs from "../../services/getAllJobs/getAllJobs";
import { Grid2x2, List } from "lucide-react";
import JobCard from "../../components/job-card/JobCard";
import SubTitle from "../../components/sub-title/SubTitle";
import { countries } from "../../constants/countries.data";

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [limit] = useState(3);

  const handleChangeGrid = () => {
    setIsGrid(!isGrid);
    console.log(isGrid);
  };

  const changePage = () => {
    setPage((prev) => prev + 1);
    console.log(page);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (loading || !hasMore) return;

    if (
      window.innerHeight + window.scrollY + 10 >=
      document.documentElement.scrollHeight
    ) {
      changePage();
    }
  };

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

      <div className="w-full grid grid-cols-[1fr_3fr] gap-6 px-[3rem] ">
        <div>
        <div className="p-4 rounded-lg border border-gray-300 shadow-sm w-full max-w-xs h-fit">
            <h1 className="text-lg font-semibold mb-4">Select by Location</h1>
            <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2">
              {countries.map((country: Country) => {
                return (
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="country"
                      id={country.name}
                      checked={selectedCountry === country.name}
                      onChange={() =>
                        setSelectedCountry((prev) =>
                          prev === country.name ? null : country.name
                        )
                      }
                      className="accent-green-600 w-4 h-4"
                    />
                    <label className="flex justify-between w-full text-sm cursor-pointer" htmlFor={country.name}>
                      <h5>{country.name}</h5>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div>
            {jobs.length !== 0 && <SubTitle title="Job results found..." />}
            <h5>Picked based on your preference and selections</h5>
          </div>

          <div>
            <div className="flex gap-10 items-center justify-end">
              <button
                className="cursor-pointer flex gap-3"
                onClick={handleChangeGrid}
              >
                <List />
                <h5>List View</h5>
              </button>
              <button
                className="cursor-pointer flex gap-3"
                onClick={handleChangeGrid}
              >
                <Grid2x2 />
                <h5>Grid View</h5>
              </button>
            </div>

            <div
              className="gap-3 grid"
              style={{
                gridTemplateColumns: isGrid ? "1fr 1fr 1fr" : "1fr",
              }}
            >
              {jobs.map((job: Job) => (
                <JobCard key={job.id} job={job} isGrid={isGrid} />
              ))}
            </div>
            {!hasMore && <p>No more jobs</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListingPage;

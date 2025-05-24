import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div>

      <div>                               
        <Search />
        <h5>search a job or keywork</h5>
      </div>

      <div>
        <div>
          <MapPin />
          <h5>country or city</h5>
        </div>
        <button>Find Jobs</button>
      </div>

    </div>
  );
}

export default SearchBar;